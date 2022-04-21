
import Login_Page from '../../pages/Login_Page';
import CalenderEventPage from '../../pages/CalenderEvents_Page';
import Check_Calender_Events_Utils from '../../Utils/Check_Calender_Events_Utils';



describe("Test Calender Events",()=>{

    it("Login" , async ()=>{
        await Login_Page.doLogin();
    })

    it("check 2 Calender Events Tandem Jump && Licensed Skydiving Course have been created correctly", async()=>{

        for(let i = 1 ; i <= 2 ; i++){
            await CalenderEventPage.vist_calender_event_page();
            await browser.pause(2000);
            let eventName = i ===1 ? "Tandem Jump" : "Licensed Skydiving Course"
            let eventCategory = i ===1 ? "Tandem" : "AFF"
            const eventNameEle =  await CalenderEventPage.event_name_sel(i+1);
            const eventCategoryEle = await CalenderEventPage.event_category_sel(i+1);
            expect(eventNameEle).toHaveText(eventName);
            expect(eventCategoryEle ).toHaveText(eventCategory);
            await Check_Calender_Events_Utils.check_deposit_amount_reservation(i,eventNameEle,i);
        }
    })
});