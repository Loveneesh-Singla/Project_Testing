import timeslot_utils from '../../Utils/Check_Blackout_Delete_utils';
import LoginPage from '../../pages/Login_Page';


describe("Are Timeslots Correct",()=>{

    it("Login" , async ()=>{
        await LoginPage.doLogin();
    })

    it("Check timeslots are showing correctly on Reservation",async()=>{
        let checked = false;
        checked = await timeslot_utils.test(25,checked,"Blackout",true,"single","timeslot");
        await expect(checked).toEqual(true);

    })
})