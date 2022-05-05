import GiftCard_Page from "../pages/GiftCard_Page";
import GiftShop_Page from "../pages/GiftShop_Page";
import Mongo_DB from './Create_Connection_MongoDb';


class GiftCardUtils{

    async create_giftcards(){
        const database = await Mongo_DB.createConnection();
        await database.collection('items').deleteMany({"category":"giftcard"});
        for(let i = 1; i <= 3; i++){
            await GiftCard_Page.create_giftCard_btn.click();
            await GiftCard_Page.gift_card_name_input.setValue(`Test${i}`);
            await GiftCard_Page.gift_card_price_input.setValue(200*i);
            await GiftCard_Page.gift_card_Taxble_amount_input.setValue(200*i);
            const numTickets = i === 2 ? 2 : 1;
            await GiftCard_Page.gift_card_num_tickets_input.setValue(numTickets);
            await browser.pause(2000);
            await GiftCard_Page.gift_card_select_tandem_pack.selectByVisibleText(`Tandem_3_TA`);
            {i === 3 && await GiftCard_Page.gift_card_select_video.selectByIndex(1);}
            await GiftCard_Page.gift_card_expiry.setValue(15);
            await GiftCard_Page.gift_card_description.setValue(`Test${i}`);
            await GiftCard_Page.gift_card_submit_btn.click();
            await browser.pause(1000);
        }
    }

}



export default new GiftCardUtils();