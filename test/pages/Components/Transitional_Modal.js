

class TransitionalModal{
    get transitional_modal(){
        return $('//*[@id="myModal"]/div');
    }

    get transnational_modal_iframe(){
        return $('//*[@id="transPayment"]/iframe');
    }
    get first_name_input_sel(){
        return $('//*[@id="tokenizer-form"]/div[1]/div[2]/div[1]/input');
    }

    get last_name_input_sel(){
        return $('//*[@id="tokenizer-form"]/div[1]/div[2]/div[2]/input');
    }

    get card_input_sel(){
        return $('//*[@id="card"]/div[1]/input');
    }

    get month_expiry_sel(){
        return $('//*[@id="card"]/div[3]/input');
    }

    get cvv_sel(){
        return $('//*[@id="card"]/div[4]/input');
    }

    get submit_btn(){
        return $('//*[@id="myModal"]/div/button');
    }

    // async submit_btn(i){
    //     return await  $(`//*[@id="reservationForm"]/div/div[${i}]/div/button`); 
    // }
}

export default new TransitionalModal();