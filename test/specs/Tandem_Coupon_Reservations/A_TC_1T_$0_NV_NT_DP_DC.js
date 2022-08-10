



import ReservationPage from '../../pages/ReservationPage';
import Reservation_Testing_Utils from '../../Utils/Reservation_testing_Utils'
import MongoDB_Data from '../../Utils/Compare_Data_MongoDb';
import Manifest_Reservation_Testing_Utils from '../../Utils/Manifest_Reservation_Testing_Utils';

describe("Reserve one ticket with tandem coupon zero dollar pack not bookable in manifest,tandem package is no taxble and coupon don't have video",()=>{

    it("Reserve one ticket with tandem coupon zero dollar pack not bookable in manifest,tandem package is no taxble and coupon don't have video",async()=>{
        let numOfTickets =1;
        const videoOptions = [""];
        const tandemPackages = [""];
        let payOption = "deposit";
        const isGiftCouponlink = false;
        const onPage = "regular";
        //make reservation using tandem coupon =================>>>>>>>>
        await ReservationPage.vist_reservation_page();
        const DateIndex = 18;
        const {selected_date,selected_month} = await Reservation_Testing_Utils.select_tandemP_date(4,DateIndex,isGiftCouponlink);
        await Reservation_Testing_Utils.select_num_tickets_pay_option(numOfTickets,payOption,isGiftCouponlink);
        await browser.pause(5000);
        const isGiftCoupon = true;
        const Gift_Coupon = "Discount1"
        payOption = "giftcard";
        numOfTickets = 0;
        await Reservation_Testing_Utils.select_num_tickets_pay_option(numOfTickets,payOption,isGiftCouponlink,isGiftCoupon);
        numOfTickets = 1;
        await Reservation_Testing_Utils.apply_gift_coupon(Gift_Coupon);
        const jumperNames = await Reservation_Testing_Utils.fill_passenger_details(numOfTickets,tandemPackages,videoOptions,isGiftCouponlink,isGiftCoupon);
        const invoiceTotalVal = await ReservationPage.get_invoice_total_val();
        // payOption = "deposit";
        await Reservation_Testing_Utils.pay_makeReservation(payOption,onPage,isGiftCoupon);
        await browser.pause(5000);
        const isweekend = (DateIndex%7===6 || DateIndex%7===0 )? true :false;
        payOption = "giftcard";
        await MongoDB_Data.check_data_for_reservations(jumperNames,isweekend,payOption);
        await Manifest_Reservation_Testing_Utils.verify_reservation_manifest_side(selected_date,selected_month,jumperNames,invoiceTotalVal);
    })

})