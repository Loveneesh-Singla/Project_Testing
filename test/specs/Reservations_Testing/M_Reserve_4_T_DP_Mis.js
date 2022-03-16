import ReservationPage from '../../pages/ReservationPage';
import Reservation_Testing_Utils from '../../Utils/Reservation_testing_Utils'

describe("Reserve four tickets with deposit pay",()=>{

    it("Four tickets with deposit pay, selected 2 tandem packages and 2 videos are taxble and other are non taxble",async()=>{
        let numOfTickets = 4;
        let videoOptions = ["TA","NT","NT","TA"]
        const tandemPackages = ["TA","NT","TA","NT"];
        await ReservationPage.vist_reservation_page();
        await browser.pause(500);
        await Reservation_Testing_Utils.select_tandemP_date(5,24);
        await Reservation_Testing_Utils.select_num_tickets_pay_option(numOfTickets,"deposit")
        await Reservation_Testing_Utils.fill_passenger_details(numOfTickets,tandemPackages,videoOptions);
        await Reservation_Testing_Utils.pay_makeReservation("deposit")
    })

})


