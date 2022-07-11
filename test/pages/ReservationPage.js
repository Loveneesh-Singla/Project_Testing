import Transitional_Modal from "./Components/Transitional_Modal";

class ReservationPage{

    async vist_reservation_page(){
        await browser.url('https://localhost:5004');
    }

    async visit_giftcard_reservation_page(Gift_Coupon){
        await browser.url(`https://localhost:5004/giftcard-reservation/${Gift_Coupon}`);
        await browser.pause(500);
    }

    async vist_phone_reservation_page(){
        await browser.url('https://localhost:5004/phone');
    }

    async get_available_pack_sel(pack_button_index,isGiftCoupon){
        let index = 1;
        let index_2 =2;
        if(isGiftCoupon) {
            index = 2;
            index_2=1
        }
        return await $(`//*[@id="reservationForm"]/div/div[${index}]/div[${index_2}]/div[2]/div/div/button[${pack_button_index}]`);
    }

    get month_sel(){
        return $('//*[@id="reservationForm"]/div/div[1]/div[3]/div[1]/button[3]');
    }

    get next_month_sel(){
        return $('//*[@id="reservationForm"]/div/div[1]/div[4]/div[1]/button[4]');
    }

    async get_date_month(isGiftCoupon){
        let index = 2;
        if(isGiftCoupon) index = 3;
        return $(`//*[@id="reservationForm"]/div/div[${index}]/div[1]/span[2]`);
    }

    async date_sel(month_date_index,isGiftCoupon){
        let index = 1;
        let index_2 = 4;
        if(isGiftCoupon) {
            index = 2;
            index_2 = 3;
        }
        return await $(`//*[@id="reservationForm"]/div/div[${index}]/div[${index_2}]/div[2]/div/div/div/div[2]/button[${month_date_index}]/abbr`)
    }
                       
    async date_btn_sel(month_date_index){
        return await $(`//*[@id="reservationForm"]/div/div[1]/div[3]/div[2]/div/div/div/div[2]/button[${month_date_index}]`)
    }

    async getAvailablePack(pack_button_index){
        let availablePackSel = await this.get_available_pack_sel(pack_button_index);
        return await availablePackSel.getText()
    }

    async seat_available_btn_sel(isGiftCoupon){
        let index = 2;
        if(isGiftCoupon) index = 3;
        return await  $(`//*[@id="reservationForm"]/div/div[${index}]/div[2]/div/div[1]/div/div/div/div/button`)
       
    }

    get increment_ticket_btn(){
        return $('//*[@id="reservationForm"]/div/div[3]/div/div[1]/div[1]/div/input[3]');
    }

    async first_name_input_sel(i,isGiftCouponlink){
        let index = 4;
        if(isGiftCouponlink) index = 5;
        return await $(`//*[@id="reservationForm"]/div/div[${index}]/div/div/div[${i}]/div/div/div/div[1]/input`);
    }

    async last_name_input_sel(i,isGiftCouponlink){
        let index = 4;
        if(isGiftCouponlink) index = 5;
        return await $(`//*[@id="reservationForm"]/div/div[${index}]/div/div/div[${i}]/div/div/div/div[2]/input`);
    }

    async email_input_sel(isGiftCouponlink){
        let index = 4;
        if(isGiftCouponlink) index = 5;
        return await $(`//*[@id="reservationForm"]/div/div[${index}]/div/div/div/div/div/div/div[3]/input`);
    }

    async phoneNo_input_sel(isGiftCouponlink){
        let index = 4;
        if(isGiftCouponlink) index = 5;
    
        return await $(`//*[@id="reservationForm"]/div/div[${index}]/div/div/div/div/div/div/div[4]/input`);
    }

    async above_18_checkbox(i,isGiftCouponlink){
        let index = 4;
        if(isGiftCouponlink) index = 5;
        let num = i ===1 ? 5 : 3 ;
        return await $(`//*[@id="reservationForm"]/div/div[${index}]/div/div/div[${i}]/div/div/div/div[${num}]/input`);
    }

    async below_230_lbs_checkbox(i,isGiftCouponlink){
        let index = 4;
        if(isGiftCouponlink) index = 5;
        let num = i === 1 ? 6 : 4 ;
        return await $(`//*[@id="reservationForm"]/div/div[${index}]/div/div/div[${i}]/div/div/div/div[${num}]/div[1]/input`);
    }

    async  tandem_option_sel(i){
        let num = i === 1 ? 6 : 4 ;
        return await $(`//*[@id="reservationForm"]/div/div[4]/div/div/div[${i}]/div/div/div/div[${num}]/div[2]/select`);
    }

    async video_option_sel(i){
        let num = i === 1 ? 6 : 4 ;
        return await $(`//*[@id="reservationForm"]/div/div[4]/div/div/div[${i}]/div/div/div/div[${num}]/div[3]/select`);
    }

    async terms_condition_button(payOption,isGiftCoupon){
        let index;
        if(payOption==="deposit") index = 6;
        if(payOption === "giftcard") index = 8;
        if(payOption==="full" || isGiftCoupon) index = 7;
        return await $(`//*[@id="reservationForm"]/div/div[${index}]/button`);
    }

    get terms_condition_accept_btn(){
        return $('//*[@id="modal-report"]/div/div[2]/button');
    }

    async pay_now_btn(payOption,onPage,isGiftCoupon){
        let index;
        if(payOption==="deposit") index = 7;
        if((payOption==="full" || payOption ==="noPay") && onPage === "phone") index = 7;
        if(payOption==="deposit" && onPage === "phone") index = 6;
        if(payOption === "giftcard") index = 9;
        if((payOption==="full" || isGiftCoupon) && onPage !== "phone") index = 8;
        return await $(`//*[@id="reservationForm"]/div/div[${index}]/div/div/div/button`);
    }

    get Transitional_Modal(){
       return Transitional_Modal;
    }

    async get_invoice_total_val(){
        return await $('//*[@id="amountTotal"]').getText();
    }

    async get_deposit_amount_span(){
        return await $('//*[@id="reservationForm"]/div/div[3]/div/div[1]/div[2]/span[2]').getText();
    }

    async enter_gift_code_input(Gift_Coupon){
        return await $('//*[@id="reservationForm"]/div/div[3]/div/div[1]/div[1]/div/div/input').setValue(Gift_Coupon);
    }

    async apply_coupon_btn(){
        return await $('//*[@id="reservationForm"]/div/div[3]/div/div[1]/div[1]/div/div/button').click();
    }

    async pay_option_radio_btn(type,isGiftCoupon){
        let index;
        if(type==="full") index = 1;
        if(type==="deposit") index = 2;
        if(isGiftCoupon) index = 3;
        if(type==="noPay")
        return await $('/html/body/div[1]/div/div/div/div[3]/div/div/div[3]/div/div[1]/div[2]/div/input');
        return await $(`/html/body/div[1]/div/div/div/div[3]/div/div/div[3]/div/div[1]/div[2]/input[${index}]`);
    }

    async visit_selectedtimeslot_month(Mani_Month){
        let monthSch = await this.month_sel.getText();    
        while(monthSch!==Mani_Month){
            await this.next_month_sel.click();
            monthSch = await this.month_sel.getText();
        }
    }

    get error_message_sel(){
        return $('//*[@id="reservationForm"]/div/div[1]/div[3]/div/div');
    }
}


export default new ReservationPage();