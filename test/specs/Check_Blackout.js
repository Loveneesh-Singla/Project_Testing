

import LoginPage from '../pages/Login_Page';
import Blackout_Utils from '../Utils/Check_Blackout_Delete_utils';

describe("Check Blackout is working", ()=>{

    it("Login" , async ()=>{
        await LoginPage.doLogin();
    })


    it("Blackout a timeslot in Manifest and Check in Reservation", async()=>{
        let checked = false;
        checked = await Blackout_Utils.test(10,checked,"Blackout",false,"single","Blackout");
        await expect(checked).toEqual(true);
    })
})