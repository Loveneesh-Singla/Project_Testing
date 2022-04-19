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
        return $('//*[@id="3319aec5-9e34-4b97-a3b1-04882ac23a10"]');
    }


}


export default new GroupOnPackagesPage();