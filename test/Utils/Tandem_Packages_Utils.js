import Tandem_Packages_Page from "../pages/Tandem_Packages_Page";
import TandemPackagesPage from "../pages/Tandem_Packages_Page";
import Mongo_DB from './Create_Connection_MongoDb';
class Tandem_Packages_Utils{

    async create_tandem_packages(){
        let packNo =3;
        for(let i=1;i<=4;i++){
            let taxble = "TA";
            if(i>2) packNo = 4;
            if(i%2===0) taxble = "NT"
            await TandemPackagesPage.addTandemPackagesBtn.click();
            await browser.pause(500);
            const database = await Mongo_DB.createConnection();
            await browser.pause(1500);
            await database.collection('items').findOneAndDelete({item:`Tandem_${packNo}_${taxble}`})
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

    async create_groupon_tandem_packages(){
        for(let i=1;i<=2;i++){
            let taxble = "TA";
            if(i%2===0) taxble = "NT"
            await TandemPackagesPage.addTandemPackagesBtn.click();
            await browser.pause(500);
            const database = await Mongo_DB.createConnection();
            await browser.pause(1500);
            await database.collection('items').findOneAndDelete({item:`Tandem_GP_${i}_${taxble}`})
            await TandemPackagesPage.item_input_sel.setValue(`Tandem_GP_${i}_${taxble}`);
            await TandemPackagesPage.display_text_input_sel.setValue(`Tandem_GP_${i}_${taxble}`);
            await TandemPackagesPage.price_input_sel.setValue(500*(i%2));
            await TandemPackagesPage.weekend_price_input_sel.setValue(500*(i%2)*2);
            await TandemPackagesPage.parent_ele.scrollIntoView();
            await browser.pause(2000);
            await TandemPackagesPage.altitude_sel.selectByIndex(1);
            await TandemPackagesPage.calender_event_sel.selectByVisibleText(`Tandem${i+2}`);
            {taxble === "TA" && await TandemPackagesPage.taxable_sel.click()};
            await TandemPackagesPage.tandem_pack_submit_btn.click();
            await browser.pause(1000);
        }
    }

    async create_Zero_$_tandem_packages(){
        let packNo =3;
        for(let i=1;i<=4;i++){
            let taxble = "NT";
            if(i%2===0) taxble = "TA"
            const price = i <= 2 ? 0 : 500*i;
            const weekendPrice = i <= 2 ? 0 : 500*i+300;
            await TandemPackagesPage.addTandemPackagesBtn.click();
            await browser.pause(500);
            const database = await Mongo_DB.createConnection();
            await browser.pause(1500);
            const tandemPack = await database.collection('items').findOne({item:`Discount_Tandem_${i}_${taxble}`})
            await browser.pause(2500);
            if(tandemPack)
            await database.collection('items').findOneAndDelete({item:`Discount_Tandem_${i}_${taxble}`})
            await TandemPackagesPage.item_input_sel.setValue(`Discount_Tandem_${i}_${taxble}`);
            await TandemPackagesPage.display_text_input_sel.setValue(`Discount_Tandem_${i}_${taxble}`);
            await TandemPackagesPage.price_input_sel.setValue(price);
            await TandemPackagesPage.weekend_price_input_sel.setValue(weekendPrice);
            if(i%2===0) await TandemPackagesPage.video_option_sel.selectByIndex(1);
            await TandemPackagesPage.parent_ele.scrollIntoView();
            await browser.pause(2000);
            await Tandem_Packages_Page.discount_code_input_sel.setValue(`Discount${i}`);
            await TandemPackagesPage.altitude_sel.selectByIndex(1);
            await TandemPackagesPage.calender_event_sel.selectByVisibleText(`Tandem${packNo}`);
            {i > 2 && await TandemPackagesPage.bookable_sel.click()}
            {taxble === "TA" && await TandemPackagesPage.taxable_sel.click()};
            await TandemPackagesPage.tandem_pack_submit_btn.click();
            await browser.pause(1000);
        }
    }
}




export default new Tandem_Packages_Utils();