import ReservationPage from '../../pages/ReservationPage';
import Reservation_Testing_Utils from '../../Utils/Reservation_testing_Utils'

describe("Reserve three tickets with full pay & tandem package is taxble",()=>{

    it("Three tickets with full pay, selected tandem package and one video is taxble and second jumper never selected video, third jumper second non-taxble video",async()=>{
        let numOfTickets = 3;
        let videoOptions = ["TA","","NT"]
        const tandemPackages = ["TA","TA","TA"];
        await ReservationPage.vist_reservation_page();
        await browser.pause(500);
        await Reservation_Testing_Utils.select_tandemP_date(5,24);
        await Reservation_Testing_Utils.select_num_tickets_pay_option(numOfTickets,"full")
        await Reservation_Testing_Utils.fill_passenger_details(numOfTickets,tandemPackages,videoOptions);
        await Reservation_Testing_Utils.pay_makeReservation("full")
    })

})


