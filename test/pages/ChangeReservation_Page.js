


class ChangeReservation {

    async visit_change_reservation_page(reservationId){
        await browser.url(`https://localhost:5004/change_reservation/${reservationId}`);
        await browser.pause(500);
    }

    async get_date_sel(month_date_index){   
        return await $(`//*[@id="reservationForm"]/div/div/div[2]/div/div[2]/div/div/div/div[2]/button[${month_date_index}]/abbr`);
                        //*[@id="reservationForm"]/div/div/div[2]/div/div[2]/div/div/div/div[2]/button[${month_date_index}]/abbr
    }

    get seats_sel(){
        return $('//*[@id="reservationForm"]/div/div[2]/div/div/div/button');
    }

    get change_date_btn(){
        return $('//*[@id="reservationForm"]/div/div[2]/button');
    }
}


export default new ChangeReservation();