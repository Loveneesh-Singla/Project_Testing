import Transitional_Modal from "./Components/Transitional_Modal";


class GroupOnReservationPage {

    async vist_groupon_reservation_page(){
        await browser.url('https://localhost:5004/groupon');
    }

    get groupOnCodeInput(){
        return $('//*[@id="reservationForm"]/div/div[1]/div[2]/div/div/input');
    }
}


export default new GroupOnReservationPage();