import ReservationPage from '../../pages/ReservationPage';
import Reservation_Testing_Utils from '../../Utils/Reservation_testing_Utils'
import MongoDB_Data from '../../Utils/Compare_Data_MongoDb';

describe("Reserve one ticket with deposit pay, tandem package & selected video are taxble  ",()=>{

    it("one ticket with deposit pay, tandem package & selected video are taxble & no weekend",async()=>{
        let numOfTickets = 1;
        let videoOptions = ["TA"];
        const tandemPackages = ["TA"];
        const payOption = "deposit"
        await ReservationPage.vist_reservation_page();
        await browser.pause(500);
        // Date index is the index of date in calender index starts from 1 
        // The very first date in the calender is at index 1 then index increases by 1 
        const DateIndex =24;
        await Reservation_Testing_Utils.select_tandemP_date(5,DateIndex);
        await Reservation_Testing_Utils.select_num_tickets_pay_option(numOfTickets,payOption);
        const jumperNames = await Reservation_Testing_Utils.fill_passenger_details(numOfTickets,tandemPackages,videoOptions);
        await Reservation_Testing_Utils.pay_makeReservation(payOption);
        const isweekend = (DateIndex%7===6 || DateIndex%7===0 )? true :false;
        await MongoDB_Data.check_data_for_reservations(jumperNames,isweekend,payOption);
    })

})


