



import ReservationPage from '../../pages/ReservationPage';
import Reservation_Testing_Utils from '../../Utils/Reservation_testing_Utils'
import MongoDB_Data from '../../Utils/Compare_Data_MongoDb';
import Manifest_Reservation_Testing_Utils from '../../Utils/Manifest_Reservation_Testing_Utils';

describe("Reserve one ticket with tandem coupon chargeble pack bookable in manifest,tandem package is no taxble and coupon doesn't have video",()=>{

    it("Reserve one ticket with tandem coupon chargeble pack bookable in manifest,tandem package is no taxble and coupon doesn't have video",async()=>{
        const numOfTickets =1;
        const videoOptions = [""];
        const tandemPackages = [""];
        const payOption = "giftcard";
        const isGiftCouponlink = false;
        const isGiftCoupon = true;
        const onPage = "regular"
        const Gift_Coupon = "Discount3"
        //make reservation using tandem coupon =================>>>>>>>>
        await ReservationPage.vist_reservation_page();
        const DateIndex = 21;
        const {selected_date,selected_month} = await Reservation_Testing_Utils.select_tandemP_date(4,DateIndex,isGiftCouponlink);
        await Reservation_Testing_Utils.select_num_tickets_pay_option(numOfTickets,payOption,isGiftCouponlink,isGiftCoupon);
        await Reservation_Testing_Utils.apply_gift_coupon(Gift_Coupon);
        const jumperNames = await Reservation_Testing_Utils.fill_passenger_details(numOfTickets,tandemPackages,videoOptions,isGiftCouponlink,isGiftCoupon);
        const invoiceTotalVal = await ReservationPage.get_invoice_total_val();
        await Reservation_Testing_Utils.pay_makeReservation(payOption,onPage,isGiftCoupon);
        await Manifest_Reservation_Testing_Utils.verify_reservation_manifest_side(selected_date,selected_month,jumperNames,invoiceTotalVal);
    })
})