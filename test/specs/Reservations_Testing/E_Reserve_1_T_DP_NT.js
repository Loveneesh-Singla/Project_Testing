import ReservationPage from '../../pages/ReservationPage';
import Reservation_Testing_Utils from '../../Utils/Reservation_testing_Utils'

describe("Reserve one ticket with deposit pay, tandem package & selected video are not taxble ",()=>{

    it("one ticket with deposit pay, tandem package & selected video are not taxble",async()=>{
        let numOfTickets = 1;
        let videoOptions = ["NT"];
        const tandemPackages = ["NT"];
        await ReservationPage.vist_reservation_page();
        await browser.pause(500);
        await Reservation_Testing_Utils.select_tandemP_date(4,11);
        await Reservation_Testing_Utils.select_num_tickets_pay_option(numOfTickets,"deposit");
        await Reservation_Testing_Utils.fill_passenger_details(numOfTickets,tandemPackages,videoOptions);
        await Reservation_Testing_Utils.pay_makeReservation("deposit")
    })

})


