
import Login_Page from '../../pages/Login_Page';
import CalenderEventPage from '../../pages/CalenderEvents_Page';
import Drop_collections_MongoDB from '../../Utils/Drop_collections_MongoDB';

describe("Create CalenderEvents",()=>{

    it("Login" , async ()=>{
        await Login_Page.doLogin();
    })

    it("create 2 Calender Events Tandem Jump && Licensed Skydiving Course",async()=>{
        await Drop_collections_MongoDB.drop_collection("calenderevents");
        await browser.pause(500);
        await CalenderEventPage.vist_calender_event_page();
        await CalenderEventPage.create_event("Tandem Jump",1,80);
        await CalenderEventPage.create_event("Licensed Skydiving Course",1,180);
    })
});