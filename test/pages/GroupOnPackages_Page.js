class GroupOnPackagesPage{
    async visit_groupon_packages_page(){
        await browser.url("http://localhost:5002/store/grouponpackages");
        await browser.pause(500);
    }

    get add_groupon_btn(){
        return $('//*[@id="root"]/div/div/div[2]/div/div/table/thead/tr/th[1]/button/i');
    }

    get upload_codes_sel(){
        return $('//*[@id="modal-main"]/div/div[2]/form/div[1]/div/div/div/button');
    }

    get upload_file_input_sel(){
        return $('.react-file-reader-input');
    }

    get num_tickets_input_sel(){
        return $('//*[@id="modal-main"]/div/div[2]/form/div[5]/div/input');
    }

    get tandem_pack_sel(){
        return $('//*[@id="modal-main"]/div/div[2]/form/div[6]/div/select');
    }

    get submit_btn(){
        return $('//*[@id="modal-main"]/div/div[2]/form/div[8]/div/button[1]');
    }
}


export default new GroupOnPackagesPage();