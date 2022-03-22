import LoginPage from '../../pages/Login_Page';
import Blackout_Utils from '../../Utils/Check_Blackout_Delete_utils';

describe("Check Blackout Series Is Working", ()=>{

    it("Login" , async ()=>{
        await LoginPage.doLogin();
    })


    it("Blackout a timeslot series in manifest and check in Reservation", async()=>{
        let checked = false;
        checked = await Blackout_Utils.test(4,checked,"Blackout",false,"series","Blackout_Series");
        if(!checked)
        console.log("========================> Please create an un blackout timeslot series starting from the first column of  current month's next month or next to next month <========================")
        await expect(checked).toEqual(true);
    })
})