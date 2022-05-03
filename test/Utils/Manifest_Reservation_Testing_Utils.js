import CalenderPage from "../pages/CalenderPage";
import Login_Page from "../pages/Login_Page";


class Manifest_Reservation_Testing_Utils{

    async verify_reservation_manifest_side(selected_date,selected_month,jumperNames,invoiceTotalVal){
        console.log(selected_date,selected_month,jumperNames,invoiceTotalVal,"<=========selected_date,selected_month,jumperNames,invoiceTotalVal")
        await Login_Page.doLogin();
        await CalenderPage.vist_calender_page();
        await this.moveToMonth(selected_month);
        let {row,col} = await this.moveToDate(selected_date)
        const getTimeSlotBtn = await CalenderPage.timeslot_available(row,col);
        await getTimeSlotBtn.click();
        await browser.pause(5000);
        row = 1;
        let nameSel = await CalenderPage.get_Reservation_name_sel(row);
        let name = await nameSel.getText();
        let jumperName = jumperNames[0][0]+" "+jumperNames[0][1]
        let obj = await this.goToReservation(name,row,jumperName);
        await obj.nameSel.click();
        await browser.pause(2000);
        await this.check_invoice_value(obj.row,invoiceTotalVal);
    }

    async moveToMonth(selected_month){
        let curMonth = await CalenderPage.month_sel.getText();
        while(curMonth!==selected_month){
            await CalenderPage.change_month_button.click();
            curMonth = await CalenderPage.month_sel.getText();
        }
    }

    async moveToDate(selected_date){
        let curDate = await CalenderPage.timeslot_availability_date(2,1);
        if(selected_date < 10) selected_date = "0"+selected_date;
        let row = 2;
        let col = 1;
        while(curDate!==selected_date){
            col++;
            if(col>=8){
                col  -= 7;
                row++;
            }
            curDate = await CalenderPage.timeslot_availability_date(row,col);
        }
        return {row,col}
    }

    async check_invoice_value(row,invoiceTotalVal){
        let invoiceRow =1;
        let colIndex = 1;
        let invoiceProperty = await CalenderPage.get_invoice_data(row,invoiceRow,colIndex);
        let invoiceValue = await CalenderPage.get_invoice_data(row,invoiceRow,3);
        let totalInvoiceValue = Number(invoiceValue.slice(1));

        while(invoiceProperty !== "Total:"){
            invoiceRow++;
            invoiceProperty = await CalenderPage.get_invoice_data(row,invoiceRow,colIndex);
            invoiceValue = await CalenderPage.get_invoice_data(row,invoiceRow,3);
            if(invoiceProperty !== "Total:")
            totalInvoiceValue += Number(invoiceValue.slice(1));
        }
        await expect("$"+totalInvoiceValue.toFixed(2)+"").toEqual(invoiceTotalVal);
    }

    async goToReservation(name,row,jumperName){
        let nameSel ;
        while(name.toUpperCase() !== jumperName.toUpperCase()){
            row++;
            nameSel = await CalenderPage.get_Reservation_name_sel(row);
            name = await nameSel.getText();
        }
        return {nameSel,row};
    }
}


export default new Manifest_Reservation_Testing_Utils();