import ReservationPage from '../../pages/ReservationPage';
import Reservation_Testing_Utils from '../../Utils/Reservation_testing_Utils'

describe("Reserve two tickets with deposit pay, tandem package & selected video are taxble",()=>{

    it("Two tickets with deposit pay, tandem package & selected video are taxble second jumper never selected video option",async()=>{
        let numOfTickets = 2;
        let videoOptions = ["TA"]
        const tandemPackages = ["TA","TA"];
        await ReservationPage.vist_reservation_page();
        await browser.pause(500);
        await Reservation_Testing_Utils.select_tandemP_date(5,24);
        await Reservation_Testing_Utils.select_num_tickets_pay_option(numOfTickets,"deposit")
        await Reservation_Testing_Utils.fill_passenger_details(numOfTickets,tandemPackages,videoOptions);
        await Reservation_Testing_Utils.pay_makeReservation("deposit")
    })

})


