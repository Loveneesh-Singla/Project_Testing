import Transitional_Modal from "./Components/Transitional_Modal";


class GroupOnReservationPage {

    async vist_groupon_reservation_page(){
        await browser.url('https://localhost:5004/groupon');
    }

    get groupOnCodeInput(){
        return $('//*[@id="reservationForm"]/div/div[1]/div[3]/div/div/input');
    }

    get selected_month(){
        return $('//*[@id="reservationForm"]/div/div[2]/div[3]/div[1]/button[3]')
    }

    get groupon_pack_header(){
        return $('//*[@id="reservationForm"]/div/div[1]/div[4]/div/div/div');
    }

    async date_sel(index){
        return await $(`//*[@id="reservationForm"]/div/div[2]/div[3]/div[2]/div/div/div/div[2]/button[${index}]/abbr`)
    }

    get seat_available_btn_sel(){
        return  $('//*[@id="reservationForm"]/div/div[3]/div[2]/div/div[1]/div/div/div/div/button')
    }

    async first_name_input_sel(i){
        return await $(`//*[@id="reservationForm"]/div/div[5]/div/div/div[${i}]/div/div/div/div[1]/input`);
    } 

    async last_name_input_sel(i){
        return await $(`//*[@id="reservationForm"]/div/div[5]/div/div/div[${i}]/div/div/div/div[2]/input`);
    }

    get email_input_sel(){
        return $('//*[@id="reservationForm"]/div/div[5]/div/div/div/div/div/div/div[3]/input');
    }

    get phone_input_sel(){
        return $('//*[@id="reservationForm"]/div/div[5]/div/div/div/div/div/div/div[4]/input');
    }

    async above_18_sel(i){
        let num = i ===1 ? 5 : 3 ;
        return $(`//*[@id="reservationForm"]/div/div[5]/div/div/div[${i}]/div/div/div/div[${num}]/input`);
    }

    async below_230_lbs_sel(i){
        let num = i === 1 ? 6 : 4 ;
        return $(`//*[@id="reservationForm"]/div/div[5]/div/div/div[${i}]/div/div/div/div[${num}]/div[1]/input`);
    }

    get terms_condition_btn(){
        return $('//*[@id="reservationForm"]/div/div[7]/button');
    }

    get terms_condition_accept_btn(){
        return $('//*[@id="modal-report"]/div/div[2]/button');
    }

    async payNow(){
        return $('//*[@id="reservationForm"]/div/div[8]/div/div/button');
    }

    get Transitional_Modal(){
        return Transitional_Modal;
    }

    get invalid_groupon_code_error_div(){
        return $('//*[@id="reservationForm"]/div/div[1]/div[4]/div/div');
    }

    async get_invoice_total_val(){
        return await $('//*[@id="amountTotal"]').getText();
    }

    async video_option_sel(i){
        let num = i === 1 ? 6 : 4 ;
        return $(`//*[@id="reservationForm"]/div/div[5]/div/div/div[${i}]/div/div/div/div[${num}]/div[2]/select`);
    }
}


export default new GroupOnReservationPage();