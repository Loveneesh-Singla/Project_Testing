

class TandemPackagesPage{

    async visit_tandem_packages_page(){
        await browser.url("http://localhost:5002/store/packages");
        await browser.pause(500);
    }

    get addTandemPackagesBtn(){
        return $('//*[@id="root"]/div/div/div[2]/div/div/table[2]/thead/tr/th[1]/button');
    }

    get item_input_sel(){
        return $('//*[@id="modal-main"]/div/div[2]/form/div[1]/div/input');
    }

    get display_text_input_sel(){
        return $('//*[@id="modal-main"]/div/div[2]/form/div[2]/div/input');
    }

    get price_input_sel(){
        return $('//*[@id="modal-main"]/div/div[2]/form/div[3]/div/input');
    }

    get weekend_price_input_sel(){
        return $('//*[@id="modal-main"]/div/div[2]/form/div[4]/div/input');
    }

    get altitude_sel(){
        return $('//*[@id="modal-main"]/div/div[2]/form/div[11]/div/select');
    }

    get calender_event_sel(){
        return $('//*[@id="modal-main"]/div/div[2]/form/div[12]/div/select');
    }

    get bookable_sel(){
        return $('//*[@id="modal-main"]/div/div[2]/form/div[14]/div/input');
    }

    get taxable_sel(){
        return $('//*[@id="modal-main"]/div/div[2]/form/div[15]/div/input');
    }

    get tandem_pack_submit_btn(){
        return $('//*[@id="modal-main"]/div/div[2]/form/div[16]/div/button[1]');
    }

    get parent_ele(){
        return $('/html/body/div[5]/div/div[1]');
    }
}

export default new TandemPackagesPage();