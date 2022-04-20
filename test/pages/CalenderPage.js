
class CalenderPage{

    async vist_calender_page(){
        await browser.url('http://localhost:5002/schedules-tandem-aff')
    }

    get change_month_button(){
        return $('//*[@id="root"]/div/div/div[2]/div/div[2]/div/div[1]/div/div[4]/div/button');
    }

    get createTimeslot(){
        return $('//*[@id="root"]/div/div/div[3]/div/div[1]/div[2]/button[1]');
    }

    get select_event_name_ele(){
        return $('//*[@id="root"]/div/div/div[3]/div/div[2]/div/div[1]/div[2]/select');
    }

    get setTime_Sel(){
        return $('//*[@id="root"]/div/div/div[3]/div/div[2]/div/div[2]/div/div[2]/input');
    }

    get set_seats_sel(){
        return $('//*[@id="root"]/div/div/div[3]/div/div[2]/div/div[2]/div/div[4]/input');
    }

    get start_date_sel(){
        return $('//*[@id="your_unique_start_date_id"]');
    }

    get end_date_sel(){
        return $('//*[@id="your_unique_end_date_id"]');
    }

    get next_month_sel(){
        return $('//*[@id="root"]/div/div/div[3]/div/div[2]/div/div[3]/div[2]/div/div/div/div[3]/div/div/div/div[2]/div[1]/div[2]');
    }

    async start_date_sel_cal(calenderDateRow,i){
        return await $(`//*[@id="root"]/div/div/div[3]/div/div[2]/div/div[3]/div[2]/div/div/div/div[3]/div/div/div/div[2]/div[2]/div/div[2]/div/table/tbody/tr[${calenderDateRow}]/td[${i+1}]`)
    }

    async end_date_Sel_Cal(calenderDateRow,i){
        return await $(`//*[@id="root"]/div/div/div[3]/div/div[2]/div/div[3]/div[2]/div/div/div/div[4]/div/div/div/div[2]/div[2]/div/div[3]/div/table/tbody/tr[${calenderDateRow}]/td[${i}]`)
    }

    get radioButton(){
        return $('//*[@id="root"]/div/div/div[3]/div/div[2]/div/div[4]/div[2]/input');
    }

    get create_btn(){
        return $('//*[@id="root"]/div/div/div[3]/div/div[2]/div/div[6]/div/button[1]');
    }

    async timeslot_available(row,col){
        if(await $(`//*[@id="root"]/div/div/div[2]/div/div[2]/div/div[2]/div[${row}]/div[2]/div[2]/div[${col}]/div/div`).isExisting()){
            return $(`//*[@id="root"]/div/div/div[2]/div/div[2]/div/div[2]/div[${row}]/div[2]/div[2]/div[${col}]/div/div`);
        }
    }

    async timeslot_availability_date(row,col){
        return await $(`//*[@id="root"]/div/div/div[2]/div/div[2]/div/div[2]/div[${row}]/div[2]/div[1]/div[${col}]/a`).getText();
    }

    get month_sel(){
        return $('//*[@id="root"]/div/div/div[2]/div/div[2]/div/div[1]/span[1]');
    }

    get action_dropdown_sel(){
        return $('//*[@id="select-filter"]/option[1]');
    }

    get action_dropdown_sel_main(){
        return $('//*[@id="select-filter"]');
    }

    get timeslot_submit_btn(){
        return $('/html/body/div[5]/div/div[1]/div/div/div[2]/div/div[1]/div[2]/div/div/button');
    }

    get timeslot_modal_cancel_btn(){
        return $('/html/body/div[5]/div/div[1]/div/div/div[3]/button');
    }

    get timeslot_modal_select_date_input(){
        return $('/html/body/div[5]/div/div[1]/div/div/div[2]/div/div[1]/div[2]/div[2]/div[2]/div/input[1]');
    }

    get timeslot_modal_next_month(){
        return $('//*[@id="rdp-input-group-example-datepicker"]/div[1]/div/div/div/div[1]/div/div[2]');
    }

    get timeslot_modal_select_date(){
        return $('//*[@id="rdp-input-group-example-datepicker"]/div[1]/div/div/div/div[2]/table/tbody/tr[1]/td[5]');
    }

    get timeslot_modal_calender_submit_btn(){
        return $('/html/body/div[5]/div/div[1]/div/div/div[2]/div/div[1]/div[2]/div[2]/button[1]');
    }

    async get_Reservation_name_sel(row){
        return await $(`/html/body/div[5]/div/div[1]/div/div/div[2]/div[2]/div[2]/div[2]/div[${row}]/div/ul/h6/div/div[1]`);
    }

    async get_total_invoice_val(row){
        return await $(`/html/body/div[5]/div/div[1]/div/div/div[2]/div[2]/div[2]/div[2]/div[${row}]/div/ul/div/li[1]/table/tbody/tr[4]/td[3]`).getText();
    }

    async get_invoice_data(row,invoiceRow,colIndex){
        return await $(`/html/body/div[5]/div/div[1]/div/div/div[2]/div[2]/div[2]/div[2]/div[${row}]/div/ul/div/li[1]/table/tbody/tr[${invoiceRow}]/td[${colIndex}]`).getText();
    }
};


export default new CalenderPage();