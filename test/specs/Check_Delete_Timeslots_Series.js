import LoginPage from '../pages/Login_Page';
import Delete_utils from '../Utils/Check_Blackout_Delete_utils';


describe("Check Delete Timeslot Series Is Working", ()=>{

    it("Login" , async ()=>{
        await LoginPage.doLogin();
    })


    it("Delete timeslot series in manifest and check in Reservation", async()=>{
        let checked = false;
        checked = await Delete_utils.test(10,checked,"Blackout",false,"series","delete");
        if(!checked)
            console.log("========================> Please create an un blackout timeslot series starting from the first column of  current month's next month or next to next month <========================")
        await expect(checked).toEqual(true);
    })
})