import ReservationPage from '../../pages/ReservationPage';
import Reservation_Testing_Utils from '../../Utils/Reservation_testing_Utils'
import MongoDB_Data from '../../Utils/Compare_Data_MongoDb';
import Manifest_Reservation_Testing_Utils from '../../Utils/Manifest_Reservation_Testing_Utils';

describe("Reserve two tickets with No pay, tandem package is taxble",()=>{
    it("Two tickets with No pay, tandem package is taxble and weekend",async()=>{
        let numOfTickets = 2;
        let videoOptions = [""]
        const tandemPackages = ["TA","TA"];
        const payOption = "noPay"
        const onPage = "phone";
        await ReservationPage.vist_phone_reservation_page();
        await browser.pause(500);
        // Date index is the index of date in calender index starts from 1 
        // The very first date in the calender is at index 1 then index increases by 1 
        const DateIndex =28;
        const {selected_date,selected_month} = await Reservation_Testing_Utils.select_tandemP_date(5,DateIndex);
        const fillDetailsFor = 1;
        await Reservation_Testing_Utils.select_num_tickets_pay_option(numOfTickets,payOption)
        const jumperNames = await Reservation_Testing_Utils.fill_passenger_details(fillDetailsFor,tandemPackages,videoOptions);
        const invoiceTotalVal = await ReservationPage.get_invoice_total_val();
        await Reservation_Testing_Utils.pay_makeReservation(payOption,onPage);
        const isweekend = (DateIndex%7===6 || DateIndex%7===0 )? true :false;
        await MongoDB_Data.check_data_for_reservations(jumperNames,isweekend,payOption);
        await Manifest_Reservation_Testing_Utils.verify_reservation_manifest_side(selected_date,selected_month,jumperNames,invoiceTotalVal);
    })
})