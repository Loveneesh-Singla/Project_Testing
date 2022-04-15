import Transitional_Modal from "./Components/Transitional_Modal";


class GroupOnReservationPage {

    async vist_groupon_reservation_page(){
        await browser.url('https://localhost:5004/groupon');
    }

    get groupOnCodeInput(){
        return $('//*[@id="reservationForm"]/div/div[1]/div[2]/div/div/input');
    }

    get groupon_pack_header(){
        return $('//*[@id="reservationForm"]/div/div[1]/div[3]/div/div/div');
    }
}


export default new GroupOnReservationPage();