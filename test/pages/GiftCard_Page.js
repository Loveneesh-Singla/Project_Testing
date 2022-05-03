






class GiftCard{

    async vist_gift_cards_page(){
        await browser.url('http://localhost:5002/store/giftcards')
        browser.pause(10000);
    }

    get create_giftCard_btn(){
        return $('//*[@id="root"]/div/div/div[2]/div/div/table/thead/tr/th[1]/button');
    }

    get gift_card_name_input(){
        return $('//*[@id="modal-main"]/div/div[2]/form/div[1]/div/input');
    }

    get gift_card_price_input(){
        return $('//*[@id="modal-main"]/div/div[2]/form/div[2]/div/input');
    }

    get gift_card_Taxble_amount_input(){
        return $('//*[@id="modal-main"]/div/div[2]/form/div[3]/div/input');
    }

    get gift_card_num_tickets_input(){
        return $('//*[@id="modal-main"]/div/div[2]/form/div[4]/div/input');
    }

    get gift_card_select_tandem_pack(){
        return $('//*[@id="modal-main"]/div/div[2]/form/div[5]/div/select');
    }

    get gift_card_select_video(){
        return $('//*[@id="modal-main"]/div/div[2]/form/div[6]/div/select');
    }

    get gift_card_description(){
        return $('//*[@id="modal-main"]/div/div[2]/form/div[9]/div/textarea');
    }

    get gift_card_expiry(){
        return $('//*[@id="modal-main"]/div/div[2]/form/div[8]/div/input');
    }

    get gift_card_submit_btn(){
        return $('//*[@id="modal-main"]/div/div[2]/form/div[12]/div/button[1]');
    }
}




export default new GiftCard();