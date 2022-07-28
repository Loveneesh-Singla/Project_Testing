import ReservationPage from '../../pages/ReservationPage';
import Manifest_Reservation_Testing_Utils from '../../Utils/Manifest_Reservation_Testing_Utils';
import Reservation_Testing_Utils from '../../Utils/Reservation_testing_Utils';



describe("create aff reservation full pay",()=>{
    it("create aff reservation full pay", async()=>{
        const numOfTickets = 2;
        await ReservationPage.vist_reservation_page();
        await browser.pause(500);
        const DateIndex = 25;
        var {selected_date,selected_month,seats} = await Reservation_Testing_Utils.select_tandemP_date(7,DateIndex,"","aff");
        const prev_seats = seats
        await Reservation_Testing_Utils.select_num_tickets_pay_option(numOfTickets,"full");
        const jumperNames = await Reservation_Testing_Utils.fill_passenger_details_aff_res(numOfTickets);
        const invoiceTotalVal = await ReservationPage.get_invoice_total_val();
        await Reservation_Testing_Utils.pay_makeReservation("full");
        await browser.pause(500);
        await Manifest_Reservation_Testing_Utils.verify_reservation_manifest_side(selected_date,selected_month,jumperNames,invoiceTotalVal);
    })
})