
import CalenderPage from '../pages/CalenderPage';
import LoginPage from '../pages/Login_Page';
import TimeSlots_Utils from '../Utils/Create_Timeslots_utils';

describe("Create Timeslots", ()=>{

    it("Login" , async ()=>{
        await browser.pause(2000);
        await LoginPage.doLogin();
    })

    it("create timeslots" ,async()=>{
        let calenderDateRow =  2;
        for(let i=1;i<=5;i++){
            let numSeats = 100*i;
            await CalenderPage.vist_calender_page();
            await browser.pause(2000)
            await  CalenderPage.createTimeslot.click();
            await browser.pause(1000)
            await CalenderPage.select_event_name_ele.selectByIndex(i+2);
            await CalenderPage.setTime_Sel.setValue("1000AM");
            await CalenderPage.set_seats_sel.setValue(numSeats);
            await browser.pause(1000)
            await TimeSlots_Utils.select_dates(calenderDateRow,i);
            await CalenderPage.radioButton.waitForClickable({ timeout: 10000 });
            await CalenderPage.radioButton.click();
            await TimeSlots_Utils.select_days(i);
            await browser.pause(2000)
            await CalenderPage.create_btn.click();
            calenderDateRow++;
            if(calenderDateRow>4) calenderDateRow = 2;
        }
    })
})