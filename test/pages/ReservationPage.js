import Transitional_Modal from "./Components/Transitional_Modal";

class ReservationPage{

    async vist_reservation_page(){
        await browser.url('https://localhost:5004');
    }

    async get_available_pack_sel(pack_button_index){
        return await $(`//*[@id="reservationForm"]/div/div[1]/div[1]/div[2]/div/div/button[${pack_button_index}]`);
    }

    get month_sel(){
        return $('//*[@id="reservationForm"]/div/div[1]/div[3]/div[1]/button[3]');
    }

    get next_month_sel(){
        return $('//*[@id="reservationForm"]/div/div[1]/div[3]/div[1]/button[4]');
    }

    async date_sel(month_date_index){
        return await $(`//*[@id="reservationForm"]/div/div[1]/div[3]/div[2]/div/div/div/div[2]/button[${month_date_index}]/abbr`)
    }

    async date_btn_sel(month_date_index){
        return await $(`//*[@id="reservationForm"]/div/div[1]/div[3]/div[2]/div/div/div/div[2]/button[${month_date_index}]`)
    }

    async getAvailablePack(pack_button_index){
        let availablePackSel = await this.get_available_pack_sel(pack_button_index);
        return await availablePackSel.getText()
    }

    get seat_available_btn_sel(){
       return  $('//*[@id="reservationForm"]/div/div[2]/div[2]/div/div[1]/div/div/div/div/button')
       
    }

    get increment_ticket_btn(){
        return $('//*[@id="reservationForm"]/div/div[3]/div/div[1]/div[1]/div/input[3]');
    }

    async first_name_input_sel(i){
        return await $(`//*[@id="reservationForm"]/div/div[4]/div/div/div[${i}]/div/div/div/div[1]/input`);
        
    }

    async last_name_input_sel(i){
        return await $(`//*[@id="reservationForm"]/div/div[4]/div/div/div[${i}]/div/div/div/div[2]/input`);
    }

    get email_input_sel(){
        return $('//*[@id="reservationForm"]/div/div[4]/div/div/div/div/div/div/div[3]/input');
    }

    get phoneNo_input_sel(){
        return $('//*[@id="reservationForm"]/div/div[4]/div/div/div/div/div/div/div[4]/input');
    }

    async above_18_checkbox(i){
        let num = i ===1 ? 5 : 3 ;
        return await $(`//*[@id="reservationForm"]/div/div[4]/div/div/div[${i}]/div/div/div/div[${num}]/input`);
    }

    async below_230_lbs_checkbox(i){
        let num = i === 1 ? 6 : 4 ;
        return await $(`//*[@id="reservationForm"]/div/div[4]/div/div/div[${i}]/div/div/div/div[${num}]/div[1]/input`);
    }

    async  tandem_option_sel(i){
        let num = i === 1 ? 6 : 4 ;
        return await $(`//*[@id="reservationForm"]/div/div[4]/div/div/div[${i}]/div/div/div/div[${num}]/div[2]/select`);
    }

    async video_option_sel(i){
        let num = i === 1 ? 6 : 4 ;
        return await $(`//*[@id="reservationForm"]/div/div[4]/div/div/div[${i}]/div/div/div/div[${num}]/div[3]/select`);
    }

    async terms_condition_button(payOption){
        let index;
        if(payOption==="full") index = 7;
        if(payOption==="deposit") index = 6;
        
        return await $(`//*[@id="reservationForm"]/div/div[${index}]/button`);
    }

    get terms_condition_accept_btn(){
        return $('//*[@id="modal-report"]/div/div[2]/button');
    }

    async pay_now_btn(payOption){
        let index;
        if(payOption==="full") index = 8;
        if(payOption==="deposit") index = 7;
        return await $(`//*[@id="reservationForm"]/div/div[${index}]/div/div/div/button`);
    }

   get Transitional_Modal(){
       return Transitional_Modal;
   }


    async pay_option_radio_btn(type){
        let index;
        if(type==="full") index = 1;
        if(type==="deposit") index = 2;
        if(type==="gift card") index =3 ;
        return await $(`/html/body/div[1]/div/div/div/div[3]/div/div/div[3]/div/div[1]/div[2]/input[${index}]`);
    }

    async visit_selectedtimeslot_month(Mani_Month){
        let monthSch = await this.month_sel.getText();    
        while(monthSch!==Mani_Month){
            await this.next_month_sel.click();
            monthSch = await this.month_sel.getText();
        }
    }
}


export default new ReservationPage();