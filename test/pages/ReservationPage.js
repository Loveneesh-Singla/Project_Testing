



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

    async visit_selectedtimeslot_month(Mani_Month){
        let monthSch = await this.month_sel.getText();    
        while(monthSch!==Mani_Month){
            await this.next_month_sel.click();
            monthSch = await this.month_sel.getText();
        }
    }
}


export default new ReservationPage();