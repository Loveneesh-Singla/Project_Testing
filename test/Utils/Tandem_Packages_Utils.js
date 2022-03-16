import TandemPackagesPage from "../pages/Tandem_Packages_Page";

class Tandem_Packages_Utils{

    async create_tandem_packages(){
        let packNo =3;
        for(let i=1;i<=4;i++){
            let taxble = "TA";
            if(i>2) packNo = 4;
            if(i%2===0) taxble = "NT"
            await TandemPackagesPage.addTandemPackagesBtn.click();
            await browser.pause(500);
            await TandemPackagesPage.item_input_sel.setValue(`Tandem_${packNo}_${taxble}`);
            await TandemPackagesPage.display_text_input_sel.setValue(`Tandem_${packNo}_${taxble}`);
            await TandemPackagesPage.price_input_sel.setValue(500*i);
            await TandemPackagesPage.weekend_price_input_sel.setValue(500*i+300);
            await TandemPackagesPage.parent_ele.scrollIntoView();
            await browser.pause(2000);
            await TandemPackagesPage.altitude_sel.selectByIndex(1);
            await TandemPackagesPage.calender_event_sel.selectByVisibleText(`Tandem${packNo}`);
            await TandemPackagesPage.bookable_sel.click();
            {taxble === "TA" && await TandemPackagesPage.taxable_sel.click()};
            await TandemPackagesPage.tandem_pack_submit_btn.click();
            await browser.pause(1000);

        }
    }
}




export default new Tandem_Packages_Utils();