import LoginPage from '../pages/Login_Page';
import Delete_utils from '../Utils/Check_Blackout_Delete_utils';

describe("Check Deleing Timeslot is Working", ()=>{

    it("Login" , async ()=>{
        await LoginPage.doLogin();
    })


    it("Delete a timeslot in Manifest and check in manifest", async()=>{
        let checked = false;
        checked = await Delete_utils.test(10,checked,"Blackout",false,"single","delete");
        if(!checked)
            console.log("========================> Please create an un blackout timeslot in the first column of  current month's next month or next to next month <========================")
        await expect(checked).toEqual(true);
    })
})