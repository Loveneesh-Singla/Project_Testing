
import Login_Page from '../../pages/Login_Page';
import CalenderEventPage from '../../pages/CalenderEvents_Page';
import Drop_collections_MongoDB from '../../Utils/Drop_collections_MongoDB';
import ReservationPage from '../../pages/ReservationPage';
import Check_Calender_Events_Utils from '../../Utils/Check_Calender_Events_Utils';



describe("Test TimeSlots",()=>{

    it("Login" , async ()=>{
        await Login_Page.doLogin();
    })

    it("create Calender Events",async()=>{
        await Drop_collections_MongoDB.drop_collection("calenderevents");
        await browser.pause(500);
        await CalenderEventPage.vist_calender_event_page();
        for(let i=1;i<=7;i++){
            let eventName = (i<=5 && i!==2 ) ? "Tandem" : "Aff";
            let index = (i<=5 && i!==2 ) ? 1 : 2;
            await CalenderEventPage.create_event(eventName+i,index,25*i);
        }
    })

    it("check calender events have been created correctly", async()=>{
        for(let i=1;i<=7;i++){
            await CalenderEventPage.vist_calender_event_page();
            let eventName,eventCategory;
            eventName = (i<=5 && i!==2 ) ? `Tandem${i}` : `Aff${i}`;
            eventCategory = (i<=5 && i!==2 ) ? "Tandem" : "AFF";
            const eventNameEle =  await CalenderEventPage.event_name_sel(i);
            const eventCategoryEle = await CalenderEventPage.event_category_sel(i);
            expect(eventNameEle).toHaveText(eventName);
            expect(eventCategoryEle ).toHaveText(eventCategory);
            if(i > 2 && i < 5){
                await Check_Calender_Events_Utils.check_deposit_amount_reservation(i,eventNameEle);
            }
        }
    })
});