import GroupOn_Res_Page from "../pages/GroupOn_Res_Page";


class GroupResTestingUtils {

    async set_groupOn_code(codes){
        let i = 0;
        while(true){
            await GroupOn_Res_Page.groupOnCodeInput.setValue(codes[i])
            const isValid =  await GroupOn_Res_Page.groupon_pack_header.isExisting();
            if( isValid || i > 400 ) {
                if(i < 400) return codes[i];
                break;
            };
            i++;
        }
    }

    async select_GroupOnP_date(date){
        const GroupOnPackDate = await GroupOn_Res_Page.date_sel(date);
        const selected_date = await GroupOnPackDate.getText();
        const selected_month = await GroupOn_Res_Page.selected_month.getText();
        await GroupOnPackDate.click();
        await browser.pause(500);
        await GroupOn_Res_Page.seat_available_btn_sel.click();
        return {selected_date,selected_month}
    }

    async fill_passenger_details(numPassengers,selectVideo,videoOptions){
        let jumperNames = [];
        for(let i=65;i<numPassengers+65;i++){
            let nums = await this.get_randomNum(i);
            let name = await this.get_fName_lname(i);
            await jumperNames.push(name);
            await this.set_fname_lname(i,name);
            if(i===65){
               await this.set_email_phone(name,nums);
            }
            const age_checkbox = await GroupOn_Res_Page.above_18_sel(i-64);
            await age_checkbox.click();
            const weight_checkbox = await GroupOn_Res_Page.below_230_lbs_sel(i-64);
            await weight_checkbox.click();

            if(selectVideo){
            const videoOption = await this.get_video_option(i-64,videoOptions);
            await this.select_tandemP_videoO(i,videoOption);}
        }
        return jumperNames;
    }

    async select_tandemP_videoO(i,videoOption){
        const selectVideo =  await GroupOn_Res_Page.video_option_sel(i-64);
        await selectVideo.selectByIndex(videoOption);
        // await browser.pause(1500);
    }

    get_randomNum(i){
        let num1 = Math.floor((Math.random() * 10) + 1)+i;
        let num2 = Math.floor((Math.random() * 10) + 1)+i;
        let num3 = Math.floor((Math.random() * 10) + 1)+i;
        let num4 = Math.floor((Math.random() * 10) + 1)+i;
        let num5 = Math.floor((Math.random() * 10) + 1)+i;
        return [num1,num2,num3,num4,num5]
    }

    get_fName_lname(i){
        const nums = this.get_randomNum(i);
        let first_name =  String.fromCharCode(nums[0],nums[1],nums[2],nums[3],nums[4]);
        let last_name = String.fromCharCode(nums[3],nums[2],nums[4],nums[1],nums[0]);
        return [first_name,last_name];
    }

    async set_fname_lname(i,name){
        const firstName = await GroupOn_Res_Page.first_name_input_sel(i-64);
        const lastName = await GroupOn_Res_Page.last_name_input_sel(i-64);
        await firstName.setValue(name[0]);
        await browser.pause(1000);
        await lastName.setValue(name[1]);
        await browser.pause(1000);
    }

    async set_email_phone(name,nums){
        await GroupOn_Res_Page.email_input_sel.setValue(`${name[0]}_${name[1]}${nums[1],nums[3]}@gmail.com`)
        await GroupOn_Res_Page.phone_input_sel.setValue(`646648${nums[0]}${nums[1]}`)
        // await browser.pause(500);
    }

    async pay_makeReservation(){
        let name = await this.get_fName_lname(67);
        await this.accept_terms_conditions();
        const payNow = await GroupOn_Res_Page.payNow();
        const btnText = await payNow.getText();
        await payNow.click();
        if(btnText === "Pay Now" || btnText === "Pay with Credit Card"){
        const GroupOnResModal = await GroupOn_Res_Page.Transitional_Modal.transitional_modal;
        await browser.pause(1000);
        const Tansitional_iframe = await GroupOn_Res_Page.Transitional_Modal.transnational_modal_iframe;
        await browser.switchToFrame(Tansitional_iframe); 
        await browser.pause(1000);
        if(GroupOnResModal){
           await this.fill_transnational_payment_details(name[0],name[1]);
        }
        await browser.switchToParentFrame();
        await GroupOn_Res_Page.Transitional_Modal.submit_btn.click();
        }
        await browser.pause(3000);
    }


    async accept_terms_conditions(){
        // await browser.pause(500);
        await GroupOn_Res_Page.terms_condition_btn.click();
        await GroupOn_Res_Page.terms_condition_accept_btn.waitForDisplayed({timeout:10000});
        await GroupOn_Res_Page.terms_condition_accept_btn.click();
        await browser.pause(1000);
    }

    async fill_transnational_payment_details(fname,lname){
        await GroupOn_Res_Page.Transitional_Modal.first_name_input_sel.setValue(fname);
        await GroupOn_Res_Page.Transitional_Modal.last_name_input_sel.setValue(lname);
        await GroupOn_Res_Page.Transitional_Modal.card_input_sel.setValue(4111111111111111);
        await GroupOn_Res_Page.Transitional_Modal.month_expiry_sel.setValue("0223");
        await GroupOn_Res_Page.Transitional_Modal.cvv_sel.setValue("123");
    }

    get_video_option(i,videoOptions){
        if(i===1){
            if(videoOptions[0]==="NT") return 2;
            else if(videoOptions[0]==="TA") return 1;
            else return 0;}
        else if(i===2){
            if(videoOptions[1]==="NT") return 2;
            else if(videoOptions[1]==="TA") return 1;
            else return 0;}
        else return 0;
    }

    async verifyGrouponCodeInvalid(grouponCode){
        await GroupOn_Res_Page.groupOnCodeInput.setValue(grouponCode);
        const errorMessage = await GroupOn_Res_Page.invalid_groupon_code_error_div.getText();
        await expect("Invalid Code !!").toEqual(errorMessage);
    }
}


export default new GroupResTestingUtils();