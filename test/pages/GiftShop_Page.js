import Transitional_Modal from "./Components/Transitional_Modal";



class GiftShop{
    
    async visit_gift_shop_page(){
        await browser.url("https://localhost:5004/giftshop");
        await browser.pause(1500);
    }

    async get_gift_card_name(index){
        return await $(`//*[@id="root"]/div/div/div/div[3]/div/div[${index}]/div[2]/h4`);
    }

    async add_gift_card_quantity(index){
        return await $(`//*[@id="root"]/div/div/div/div[3]/div/div[${index}]/div[2]/div/button[2]`);
    }

    async add_gift_card_cart(index){
        return await $(`//*[@id="root"]/div/div/div/div[3]/div/div[${index}]/div[2]/div/button[3]`);
    }

    get proceed_to_checkout_btn(){
        return $('//*[@id="root"]/div/div/div/div[3]/div/div[5]/button');
    }

    get checkout_btn(){
        return $('//*[@id="root"]/div/div/div/div[3]/div/div[2]/div[3]/button[1]');
    }

    get enter_email(){
        return $('//*[@id="root"]/div/div/div/div[3]/div/div[2]/div[4]/h6/span/input');
    }

    get set_name(){
        return $('//*[@id="root"]/div/div/div/div[3]/div/div[2]/div[5]/h6/span/input');
    }

    get terms_conditions_btn(){
        return $('//*[@id="root"]/div/div/div/div[3]/div/div[2]/div[6]/button');
    }

    get accept_terms_conditions_btn(){
        return $('//*[@id="modal-report"]/div/div[2]/button');
    }

    get pay_btn(){
        return $('//*[@id="root"]/div/div/div/div[3]/div/div[2]/div[7]/button');
    }

    get Transitional_Modal(){
        return Transitional_Modal;
    }
}

export default new GiftShop();