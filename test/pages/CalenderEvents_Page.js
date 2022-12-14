
class CalenderEventsPage{

    async vist_calender_event_page(){
        await browser.url('http://localhost:5002/calender-events')
    }

    get add_event_btn(){
        return $('//*[@id="root"]/div/div/div[2]/div/div/table/thead/tr/th[1]/button');
    }

    get event_name_input_sel(){
        return $('[name=eventName]');
    }

    get event_category_input_sel(){
        return $('[name=packageCategory]');
    }

    get submit_btn(){
        return $('//*[@id="modal-main"]/div/div[2]/form/div[4]/div/button[1]');
    }

    async event_name_sel(i){
        return await $(`//*[@id="root"]/div/div/div[2]/div/div/table/tbody/tr[${i}]/td[2]`);
    }

    async event_deposit_amount(row){
        return await $(`//*[@id="root"]/div/div/div[2]/div/div/table/tbody/tr[${row}]/td[4]`).getText();
    }

    async event_category_sel(i){
        return await $(`//*[@id="root"]/div/div/div[2]/div/div/table/tbody/tr[${i}]/td[3]`);
    }

    get deposit_amount_sel(){
        return $('//*[@id="modal-main"]/div/div[2]/form/div[3]/div/input');
    }

    async create_event(eventName, eventCat,amount){
        await browser.pause(2000);
        await this.add_event_btn.click();
        await this.event_name_input_sel.setValue(eventName);
        await this.event_category_input_sel.selectByIndex(eventCat)
        await this.deposit_amount_sel.setValue(amount);
        await this.submit_btn.click();
    }

}


export default new CalenderEventsPage();