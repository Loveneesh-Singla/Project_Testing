import ReservationPage from '../../pages/ReservationPage';
import Reservation_Testing_Utils from '../../Utils/Reservation_testing_Utils';
import GmailUtils from '../../Utils/Gmail_Testing_Utils'

describe("Try to reserve one ticket and used card is lost, checked error response in email",()=>{

    it("Try to reserve one ticket and used card is lost, checked error response in email",async()=>{
        let card = "Lost Card";
        let card_Number = 4000000000009987;
        let Error_Message = "Lost Card"
        let numOfTickets = 1;
        const videoOptions = ["NT"];
        const tandemPackages = ["NT"];
        let payOption = "full";
        await ReservationPage.vist_reservation_page();
        await browser.pause(500);
        // Date index is the index of date in calender index starts from 1 
        // The very first date in the calender is at index 1 then index increases by 1 
        const DateIndex = 14;
        const {selected_date,selected_month} = await Reservation_Testing_Utils.select_tandemP_date(4,DateIndex);
        await Reservation_Testing_Utils.select_num_tickets_pay_option(numOfTickets,payOption);
        await browser.pause(2500);
        const jumperNames = await Reservation_Testing_Utils.fill_passenger_details(numOfTickets,tandemPackages,videoOptions);
       
        await browser.pause(2500);
        const invoiceTotalVal = await ReservationPage.get_invoice_total_val();
        await Reservation_Testing_Utils.pay_makeReservation(payOption,'','', card, card_Number );
        await browser.pause(4000)
        await GmailUtils.verify_transaction_response__card_status(Error_Message);
        await browser.pause(4000);
    })
})