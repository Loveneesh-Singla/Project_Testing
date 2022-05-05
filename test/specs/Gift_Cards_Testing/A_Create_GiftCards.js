import GiftCard_Page from '../../pages/GiftCard_Page';
import Login_Page from '../../pages/Login_Page'
import GiftCardUtils from '../../Utils/Gift_Card_Utils';


describe("Create GiftCards",()=>{

    it("Login" , async ()=>{
        await Login_Page.doLogin();
    })

    it("Create GiftCards", async()=>{
        await GiftCard_Page.vist_gift_cards_page();
        await GiftCardUtils.create_giftcards();
    })
    
})