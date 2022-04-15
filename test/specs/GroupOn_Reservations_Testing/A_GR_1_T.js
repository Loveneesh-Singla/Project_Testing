import GroupOnReservationPage from '../../pages/GroupOn_Res_Page';
import GroupResTestingUtils from '../../Utils/GroupOn_Res_Testing_Utils'
import MongoDB_Data from '../../Utils/Compare_Data_MongoDb';
import JumpsCodes from '../../Data/1_jumps_codes'

describe("Reserve 1 GroupOn Ticket",()=>{

    it("Reserve 1 GroupOn Ticket",async()=>{
        const numOfTickets = 1;
        // const videoOptions = ["NT"];
        // const tandemPackages = ["NT"];

        await GroupOnReservationPage.vist_groupon_reservation_page();
        await browser.pause(500);

        const codes = await JumpsCodes.get_1_codes()
        
        await GroupResTestingUtils.set_groupOn_code(codes);
        await browser.pause(1500);
        // Date index is the index of date in calender index starts from 1 
        // The very first date in the calender is at index 1 then index increases by 1 
        // const DateIndex = 15;
        // await Reservation_Testing_Utils.select_tandemP_date(4,DateIndex);
        // await Reservation_Testing_Utils.select_num_tickets_pay_option(numOfTickets,"full");
        // const jumperNames = await Reservation_Testing_Utils.fill_passenger_details(numOfTickets,tandemPackages,videoOptions);
        // await Reservation_Testing_Utils.pay_makeReservation("full");
        // const isweekend = (DateIndex%7===6 || DateIndex%7===0 )? true :false;
        // await MongoDB_Data.check_data_for_reservations(jumperNames,isweekend)
    })
})