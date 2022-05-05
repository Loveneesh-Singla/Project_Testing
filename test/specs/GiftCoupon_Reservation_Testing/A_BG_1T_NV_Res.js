import GiftShop_Page from "../../pages/GiftShop_Page";
import ReservationPage from "../../pages/ReservationPage";
import GiftShop_Utils from "../../Utils/GiftShop_Utils";
import MongoDB from "../../Utils/Drop_collections_MongoDB";
import Reservation_Testing_Utils from "../../Utils/Reservation_testing_Utils";
import Manifest_Reservation_Testing_Utils from "../../Utils/Manifest_Reservation_Testing_Utils";

describe("Buy a gift card num of tickets in giftcard are 1 and no video",()=>{
    it("Buy a gift card num of tickets in giftcard are 1 and no video and make reservation using giftcoupon using email link",async()=>{
        const numOfTickets =1;
        const videoOptions = [""];
        const tandemPackages = [""];
        const payOption = "giftcard"
        const giftCard = "Test1"
        await MongoDB.drop_collection("giftpurchases");
        await GiftShop_Page.visit_gift_shop_page();
        await GiftShop_Utils.add_giftcard_2_cart_checkout(giftCard);
        await GiftShop_Utils.fill_user_details();
        await GiftShop_Utils.pay_get_giftcard();
        const Gift_Coupon = await GiftShop_Utils.get_gift_card_code();

        //make reservation using gift coupon =================>>>>>>>>
        const DateIndex = 18;
        const isGiftCouponlink = true;
        const isGiftCoupon = true;
        await ReservationPage.visit_giftcard_reservation_page(Gift_Coupon);
        const {selected_date,selected_month} = await Reservation_Testing_Utils.select_tandemP_date(4,DateIndex,isGiftCouponlink);
        const jumperNames = await Reservation_Testing_Utils.fill_passenger_details(numOfTickets,tandemPackages,videoOptions,isGiftCouponlink,isGiftCoupon);
        const invoiceTotalVal = await ReservationPage.get_invoice_total_val();
        await Reservation_Testing_Utils.pay_makeReservation(payOption);
        await Manifest_Reservation_Testing_Utils.verify_reservation_manifest_side(selected_date,selected_month,jumperNames,invoiceTotalVal);
    })
})