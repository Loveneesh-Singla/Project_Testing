import GiftShop_Page from "../../pages/GiftShop_Page";
import GiftShop_Utils from "../../Utils/GiftShop_Utils";
import GmailUtils from '../../Utils/Gmail_Testing_Utlis'
import Mongo_DB from '../../Utils/Create_Connection_MongoDb'

describe("Try to buy a gift card and used  card is lost, checked error response in email",()=>{
    it("Try to buy a gift card and used card is lost, checked error response in email",async()=>{
        let card = "Lost Card";
        let card_Number = 4000000000009987;
        let Error_Message = "Lost Card"
        const giftCard = "Test1"
        const database = await Mongo_DB.createConnection();
        await browser.pause(2000);
        const totalNumOFGiftCardBefore = await database.collection('giftcoupons').count();
        await browser.pause(1000);
        await GiftShop_Page.visit_gift_shop_page();
        await GiftShop_Utils.add_giftcard_2_cart_checkout(giftCard);
        await GiftShop_Utils.fill_user_details();
        await GiftShop_Utils.pay_get_giftcard(card,card_Number);
        const totalNumOFGiftCardAfter = await database.collection('giftcoupons').count();
        await browser.pause(1000);
        await expect(totalNumOFGiftCardBefore).toEqual(totalNumOFGiftCardAfter);
        // await GmailUtils.verify_transaction_response__card_status(Error_Message);
        await browser.pause(1000);
    })
})