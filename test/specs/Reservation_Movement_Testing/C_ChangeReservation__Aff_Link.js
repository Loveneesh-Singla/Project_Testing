import ReservationPage from '../../pages/ReservationPage';
import Reservation_Testing_Utils from '../../Utils/Reservation_testing_Utils'
import MongoDB_Data from '../../Utils/Compare_Data_MongoDb';
import Reservation_Movement_Utils from '../../Utils/Reservation_Movement_Utils';
import ChangeReservation_Page from '../../pages/ChangeReservation_Page';
import Manifest_Reservation_Testing_Utils from '../../Utils/Manifest_Reservation_Testing_Utils';

describe("create aff reservation, change reservation from email link and verify the timeslots",()=>{
    it("create aff reservation, change reservation from email link and verify the timeslots" , async()=>{
        const numOfTickets = 1;
        await ReservationPage.vist_reservation_page();
        await browser.pause(500);
        // Date index is the index of date in calender index starts from 1 
        // The very first date in the calender is at index 1 then index increases by 1 
        const DateIndex = 25;
    

        var {selected_date,selected_month,seats} = await Reservation_Testing_Utils.select_tandemP_date(7,DateIndex,"","aff");
        await Reservation_Testing_Utils.select_num_tickets_pay_option(numOfTickets,"full");
        const jumperNames = await Reservation_Testing_Utils.fill_passenger_details_aff_res(numOfTickets,true);
        const invoiceTotalVal = await ReservationPage.get_invoice_total_val();
        await Reservation_Testing_Utils.pay_makeReservation("full");
        await browser.pause(5000);
        await Manifest_Reservation_Testing_Utils.verify_reservation_manifest_side(selected_date,selected_month,jumperNames[0],invoiceTotalVal);
        await browser.pause(1000);
        const reservationId = await Reservation_Movement_Utils.get_reservation_id(jumperNames);

        // // //visit change reservation link
        await browser.pause(2000);
        await ChangeReservation_Page.visit_change_reservation_page(reservationId);
        await browser.pause(1000);


        const dateSel = await ChangeReservation_Page.get_date_sel(26);
        await dateSel.click();
        await browser.pause(1000);
        const selected_new_date = await dateSel.getText();
        let numOfSeatsPrev = await ChangeReservation_Page.seats_sel.getText();
        numOfSeatsPrev = Number((numOfSeatsPrev.split(" "))[3])
        await ChangeReservation_Page.seats_sel.click();
        await ChangeReservation_Page.change_date_btn.click();
        await ChangeReservation_Page.visit_change_reservation_page(reservationId);
        await browser.pause(1000);
        await dateSel.click();
        let numOfSeatsAft = await ChangeReservation_Page.seats_sel.getText();
        numOfSeatsAft = Number((numOfSeatsAft.split(" "))[3])
        await expect(numOfSeatsPrev-1).toEqual(numOfSeatsAft);
        await browser.pause(1000);
        await Manifest_Reservation_Testing_Utils.verify_reservation_manifest_side(selected_new_date,selected_month,jumperNames[0],invoiceTotalVal,false,true);
        await browser.pause(7000);
    })
})