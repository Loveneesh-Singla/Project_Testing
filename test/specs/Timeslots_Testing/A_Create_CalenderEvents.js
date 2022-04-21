
import Login_Page from '../../pages/Login_Page';
import CalenderEventPage from '../../pages/CalenderEvents_Page';
import Drop_collections_MongoDB from '../../Utils/Drop_collections_MongoDB';
import Check_Calender_Events_Utils from '../../Utils/Check_Calender_Events_Utils';

describe("Test Calender Events",()=>{

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
});