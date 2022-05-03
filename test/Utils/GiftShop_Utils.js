import GiftShop_Page from "../pages/GiftShop_Page";
import Mongo_DB from './Create_Connection_MongoDb'


class GiftShopUtils{

    async add_giftcard_2_cart_checkout(giftCard){
        await browser.pause(1000);
        let i = 2;
        let gift_card_name_sel = await GiftShop_Page.get_gift_card_name(i);
        let gift_card_name = await gift_card_name_sel.getText();
        while(gift_card_name !== giftCard){
            i++;
            gift_card_name_sel = await GiftShop_Page.get_gift_card_name(i);
            gift_card_name = await gift_card_name_sel.getText();    
        }
        const set_gift_card_quantity = await GiftShop_Page.add_gift_card_quantity(i);
        await set_gift_card_quantity.click();
        const add_gift_card_cart = await GiftShop_Page.add_gift_card_cart(i);
        await add_gift_card_cart.click();
        await GiftShop_Page.proceed_to_checkout_btn.click();
        await browser.pause(3000);
        await GiftShop_Page.checkout_btn.click();
    }

    async fill_user_details(){
        await browser.pause(2000);
        await GiftShop_Page.enter_email.setValue("l.ksingla2@gmail.com");
        await GiftShop_Page.set_name.setValue("Loveneesh");
    }

    async pay_get_giftcard(){
        await GiftShop_Page.terms_conditions_btn.click();   
        await browser.pause(2000);
        await GiftShop_Page.accept_terms_conditions_btn.click();
        await browser.pause(3000);
        await GiftShop_Page.pay_btn.click();
        const TransitionalModal = await GiftShop_Page.Transitional_Modal.transitional_modal;
        await browser.pause(1000);
        const Tansitional_iframe = await GiftShop_Page.Transitional_Modal.transnational_modal_iframe;
        await browser.switchToFrame(Tansitional_iframe); 
        if(TransitionalModal){
            await this.fill_transnational_payment_details("abcd","xyze")
        }
        await browser.switchToParentFrame();
        await GiftShop_Page.Transitional_Modal.submit_btn.click();
    }


    async get_gift_card_code(){
        await browser.pause(500);
        const database = await Mongo_DB.createConnection();
        await browser.pause(3500);
        const GiftCard = await database.collection('giftpurchases').findOne({purchaserEmail:"l.ksingla2@gmail.com"});
        await browser.pause(4500);
        const GiftCoupon = await database.collection('giftcoupons').findOne({_id:GiftCard.giftCouponIds[0]});
        return await GiftCoupon.couponCode;
    }

    async fill_transnational_payment_details(fname,lname){
        await GiftShop_Page.Transitional_Modal.first_name_input_sel.setValue(fname);
        await GiftShop_Page.Transitional_Modal.last_name_input_sel.setValue(lname);
        await GiftShop_Page.Transitional_Modal.card_input_sel.setValue(4111111111111111);
        await GiftShop_Page.Transitional_Modal.month_expiry_sel.setValue("0223");
        await GiftShop_Page.Transitional_Modal.cvv_sel.setValue("123");
    }
}

export default new GiftShopUtils();