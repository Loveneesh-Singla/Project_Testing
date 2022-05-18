import GroupOnReservationPage from '../../pages/GroupOn_Res_Page';
import GroupResTestingUtils from '../../Utils/GroupOn_Res_Testing_Utils'
import MongoDB_Data from '../../Utils/Compare_Data_MongoDb';
import Manifest_Reservation_Testing_Utils from '../../Utils/Manifest_Reservation_Testing_Utils';

import GroupOn_Res_Testing_Utils from '../../Utils/GroupOn_Res_Testing_Utils';
import _jumps_codes from '../../Data/2_jumps_codes';

describe("Reserve 2 GroupOn Ticket with 2 Videos",()=>{

    it("Reserve 2 GroupOn Ticket with 1 Video is taxble and no weekend",async()=>{
        const numOfTickets = 2;
        const selectVideo = true;
        const videoOptions = ["TA","NT"];
        await GroupOnReservationPage.vist_groupon_reservation_page();
        await browser.pause(500);
        const codes = await _jumps_codes.get_2_codes()
        const grouponCode = await GroupResTestingUtils.set_groupOn_code(codes);
        // Date index is the index of date in calender index starts from 1 
        // The very first date in the calender is at index 1 then index increases by 1 
        const DateIndex = 25;
        const {selected_date,selected_month} = await GroupResTestingUtils.select_GroupOnP_date(DateIndex);
        await browser.pause(500);
        const jumperNames = await GroupOn_Res_Testing_Utils.fill_passenger_details(numOfTickets,selectVideo,videoOptions);
        await browser.pause(1000);
        await GroupOn_Res_Testing_Utils.pay_makeReservation();
        const isweekend = (DateIndex%7===6 || DateIndex%7===0 )? true :false;
        await MongoDB_Data.check_data_for_reservations(jumperNames,isweekend);
        await Manifest_Reservation_Testing_Utils.verify_reservation_manifest_side(selected_date,selected_month,jumperNames,0,grouponCode);
        await GroupOnReservationPage.vist_groupon_reservation_page();
        await browser.pause(1000);
        await GroupOn_Res_Testing_Utils.verifyGrouponCodeInvalid(grouponCode);

    })
})