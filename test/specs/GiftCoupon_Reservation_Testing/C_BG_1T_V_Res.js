import GiftShop_Page from "../../pages/GiftShop_Page"
import ReservationPage from "../../pages/ReservationPage";
import GiftShop_Utils from "../../Utils/GiftShop_Utils";
import Reservation_Testing_Utils from "../../Utils/Reservation_testing_Utils";
import MongoDB from '../../Utils/Drop_collections_MongoDB'
import Manifest_Reservation_Testing_Utils from "../../Utils/Manifest_Reservation_Testing_Utils";

describe("Buy a gift card num of tickets in giftcard are 1 and have video",()=>{
    it("Buy a gift card num of tickets in giftcard are 1 and have video and make reservation using giftcoupon using regular reservation link",async()=>{
        const numOfTickets =1;
        const videoOptions = [""];
        const tandemPackages = [""];
        const payOption = "giftcard";
        const giftCard = "Test3";
        const isGiftCouponlink = false;
        const isGiftCoupon = true;
        const onPage = "regular";
        await MongoDB.drop_collection("giftpurchases");
        await GiftShop_Page.visit_gift_shop_page();
        await GiftShop_Utils.add_giftcard_2_cart_checkout(giftCard);
        await GiftShop_Utils.fill_user_details();
        await browser.pause(2000);
        await GiftShop_Utils.pay_get_giftcard();
        const Gift_Coupon = await GiftShop_Utils.get_gift_card_code();

        //make reservation using gift coupon =================>>>>>>>>
        const DateIndex = 18;
        await ReservationPage.vist_reservation_page();
        const {selected_date,selected_month} = await Reservation_Testing_Utils.select_tandemP_date(4,DateIndex,isGiftCouponlink);
        await Reservation_Testing_Utils.select_num_tickets_pay_option(numOfTickets,payOption,isGiftCouponlink,isGiftCoupon);
        await Reservation_Testing_Utils.apply_gift_coupon(Gift_Coupon);
        const jumperNames = await Reservation_Testing_Utils.fill_passenger_details(numOfTickets,tandemPackages,videoOptions,isGiftCouponlink,isGiftCoupon);
        const invoiceTotalVal = await ReservationPage.get_invoice_total_val();
        await Reservation_Testing_Utils.pay_makeReservation(payOption,onPage,isGiftCoupon);
        await Manifest_Reservation_Testing_Utils.verify_reservation_manifest_side(selected_date,selected_month,jumperNames,invoiceTotalVal," "+Gift_Coupon);
        await ReservationPage.visit_giftcard_reservation_page(Gift_Coupon);
        await Reservation_Testing_Utils.verifyGiftCoupon();
    })
})