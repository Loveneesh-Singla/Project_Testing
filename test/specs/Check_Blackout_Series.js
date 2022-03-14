import LoginPage from '../pages/Login_Page';
import Blackout_Utils from '../Utils/Check_Blackout_Delete_utils';

describe("Check Blackout Series Is Working", ()=>{

    it("Login" , async ()=>{
        await LoginPage.doLogin();
    })


    it("Blackout a timeslot series in manifest and check in Reservation", async()=>{
        let checked = false;
        checked = await Blackout_Utils.test(10,checked,"Blackout",false,"series","Blackout_Series");
        await expect(checked).toEqual(true);
    })
})