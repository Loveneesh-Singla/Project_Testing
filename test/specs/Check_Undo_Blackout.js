import LoginPage from '../pages/Login_Page';
import Blackout_Utils from '../Utils/Check_Blackout_Delete_utils';

describe("Check Blackout is working", ()=>{

    it("Login" , async ()=>{
        await LoginPage.doLogin();
    })


    it("Undo Blackout timeslot in Manifest and check in Reservation", async()=>{
        let checked = false;
        checked = await Blackout_Utils.test(10,checked,"Undo Blackout",true,"single","undo_blackout");
        await expect(checked).toEqual(true);
    })
})