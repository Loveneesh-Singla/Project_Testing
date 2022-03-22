import LoginPage from '../../pages/Login_Page';
import Blackout_Utils from '../../Utils/Check_Blackout_Delete_utils';

describe("Check Blackout is working", ()=>{

    it("Login" , async ()=>{
        await LoginPage.doLogin();
    })


    it("Undo Blackout timeslot in Manifest and check in Reservation", async()=>{
        let checked = false;
        checked = await Blackout_Utils.test(4,checked,"Undo Blackout",true,"single","undo_blackout");
        if(!checked)
        console.log("========================> Please create a blackout timeslot in the first column of  current month's next month or next to next month <========================")
        await expect(checked).toEqual(true);
    })
})