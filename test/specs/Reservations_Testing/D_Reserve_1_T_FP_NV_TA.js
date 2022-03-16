import ReservationPage from '../../pages/ReservationPage';
import Reservation_Testing_Utils from '../../Utils/Reservation_testing_Utils'

describe("Reserve one ticket with full pay, tandem package is taxble ",()=>{

    it("one ticket with full pay,tandem package is taxble and video option not selected",async()=>{
        let numOfTickets = 1;
        let videoOptions = [];
        const tandemPackages = ["TA"];
        await ReservationPage.vist_reservation_page();
        await browser.pause(500);
        await Reservation_Testing_Utils.select_tandemP_date(5,24);
        await Reservation_Testing_Utils.select_num_tickets_pay_option(numOfTickets,"full")
        await Reservation_Testing_Utils.fill_passenger_details(numOfTickets,tandemPackages,videoOptions);
        await Reservation_Testing_Utils.pay_makeReservation("full")
    })

})


