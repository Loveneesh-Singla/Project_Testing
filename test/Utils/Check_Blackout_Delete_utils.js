import ReservationPage from "../pages/ReservationPage";
import CalenderPage from "../pages/CalenderPage";
import Timeslots_utils from "./Create_Timeslots_utils";



class Blackout_Utils{

   async change_month(i,callFrom){
        if(i>5){
            await CalenderPage.change_month_button.click();
            await CalenderPage.change_month_button.click();
            if(callFrom === "delete"){
                await CalenderPage.change_month_button.click();
                await CalenderPage.change_month_button.click();
            }
        }else {
            await CalenderPage.change_month_button.click();
            if(callFrom === "delete"){
                await CalenderPage.change_month_button.click();
                await CalenderPage.change_month_button.click();
            }
            
        }
    }

   async reach_sel_timeslot_date(month_date_index,Mani_Date){
        let Date_Button;
        for(let j = 1; j<10; j++ ){

            let Sch_Date_Sel = await ReservationPage.date_sel(month_date_index);
            let Sch_Date =  await Sch_Date_Sel.getText();
            
            if(Sch_Date === "1"){
                for(let x = 1 ; x<=31 ; x++ ){
                    Sch_Date_Sel = await ReservationPage.date_sel(month_date_index);
                    Sch_Date =  await Sch_Date_Sel.getText();
                    Sch_Date = Number(Sch_Date);
                    if(Sch_Date < 10){
                        Sch_Date = "0"+Sch_Date;
                    }
                    Sch_Date = Sch_Date+"";
                    if(Sch_Date === Mani_Date){
                        Date_Button =  await ReservationPage.date_btn_sel(month_date_index);
                        break;
                    
                    }
                    month_date_index = month_date_index +1;
                }
                break;
            }
            month_date_index = month_date_index +1;
            
        }
        return Date_Button;
    }

   async test(numOfTest,checked,option,expected,isSingle,callFrom){
        let row = 2;
        let col = 1;

        for(let i = 1; i <=numOfTest ; i++){ 

            await browser.pause(500);
            await CalenderPage.vist_calender_page();
            {callFrom === "timeslot" ? await Timeslots_utils.changeMonth(i)
             :await this.change_month(i,callFrom)}
            await browser.pause(500);

            let timeslot = await CalenderPage.timeslot_available(row,col);
            let Mani_Month,Mani_Date,Mani_Text;

            if(timeslot){
                Mani_Text = await timeslot.getText();      
                Mani_Date = await CalenderPage.timeslot_availability_date(row,col)
                Mani_Month = await CalenderPage.month_sel.getText();

                await timeslot.click();
                const optionValue = await CalenderPage.action_dropdown_sel.getText();
                    if(optionValue===option){

                        {callFrom==="delete" && isSingle==="single" && await CalenderPage.action_dropdown_sel_main.selectByIndex(2)}
                        { isSingle==="single" && callFrom!=="timeslot" ? await CalenderPage.timeslot_submit_btn.click()
                          :callFrom!=="timeslot" && await this.blackoutSeries(callFrom);
                        }
                        
                        await browser.pause(500);

                        await ReservationPage.vist_reservation_page();
                        let pack_button_index = 1;
                        let Selected_Pack = Mani_Text.split(" ")[0];

                        let Available_Pack = await ReservationPage.getAvailablePack(pack_button_index)
                        while(Available_Pack!==Selected_Pack){
                            pack_button_index++;
                            Available_Pack = await ReservationPage.getAvailablePack(pack_button_index)
                        }
                        if(Available_Pack===Selected_Pack){
                            let Available_Pack_sel =await ReservationPage.get_available_pack_sel(pack_button_index);
                            await Available_Pack_sel.click();
                            await browser.pause(500);
                        }

                        await ReservationPage.visit_selectedtimeslot_month(Mani_Month);
                        let month_date_index = 1;
                        let Date_Button;
                        Date_Button = await this.reach_sel_timeslot_date(month_date_index,Mani_Date);
                        checked = true;
                        let isDateButtonClickble =await Date_Button.isClickable();
                        await expect(isDateButtonClickble).toEqual(expected);
                }else
                    await CalenderPage.timeslot_modal_cancel_btn.click();
                
            }
            if(row<6) row++;
            else row =2;
        }
        return checked;
    }


    async blackoutSeries(callFrom){
        let value;
        {value = callFrom === "delete" ? 3 : 1}
        await CalenderPage.action_dropdown_sel_main.selectByIndex(value)
        await browser.pause(2000);
        await CalenderPage.timeslot_submit_btn.click();
        await CalenderPage.timeslot_modal_select_date_input.click();
        await CalenderPage.timeslot_modal_next_month.click(); 
        await browser.pause(2000);  
        await CalenderPage.timeslot_modal_select_date.click();
        await browser.pause(2000);
        await CalenderPage.timeslot_modal_calender_submit_btn.click();
    }

}



export default new Blackout_Utils();