import CalenderEvents_Page from "../pages/CalenderEvents_Page";
import ReservationPage from "../pages/ReservationPage";


class Check_Calender_Events{

    async check_deposit_amount_reservation(i,eventNameEle,speacialI){
        const eventDepositAmount = await CalenderEvents_Page.event_deposit_amount(i);
        await ReservationPage.vist_reservation_page();
        await browser.pause(500);
        let Available_Pack_Sel = await ReservationPage.getAvailablePack(i+1);
        expect(eventNameEle).toHaveText(Available_Pack_Sel);
        let Available_Pack_Sel_Btn = await ReservationPage.get_available_pack_sel(i+1);
        await Available_Pack_Sel_Btn.click();
        if(i === 4 || speacialI === 2){
            await ReservationPage.next_month_sel.click();
        }
        const dateIndex = 25;
        let Date_Btn_Sel = await ReservationPage.date_btn_sel(dateIndex);
        await Date_Btn_Sel.click();
        await ReservationPage.seat_available_btn_sel.click();
        let content = await ReservationPage.get_deposit_amount_span();
        await expect((content.split(" ")[5]).slice(1)).toEqual(eventDepositAmount);
        await browser.pause(3000);
    }

}

export default new Check_Calender_Events();