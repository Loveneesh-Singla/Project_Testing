import ReservationPage from "../pages/ReservationPage";

class Reservation_Testing_Utils{


    async select_tandemP_date(tandemPack,date){
        const TandemPackBtn = await ReservationPage.get_available_pack_sel(tandemPack);
        await TandemPackBtn.click();
        if(tandemPack===5){
            await ReservationPage.next_month_sel.click();
        }
        const TandemPackDate = await ReservationPage.date_sel(date);
        await TandemPackDate.click();
        await browser.pause(500);
        await ReservationPage.seat_available_btn_sel.click();
    }

    async select_num_tickets_pay_option(numTic,payOption){
        for(let i=1;i<=numTic;i++){
            await browser.pause(100);
            await ReservationPage.increment_ticket_btn.click();
        }
        const pay_Option = await ReservationPage.pay_option_radio_btn(payOption);
        await pay_Option.click();
    }

    async fill_passenger_details(numPassengers,tandemPackages,videoOptions){
        for(let i=65;i<numPassengers+65;i++){
            let nums = await this.get_randomNum(i);
            let name = await this.get_fName_lname(i);
            await this.set_fname_lname(i,name);
            if(i===65){
               await this.set_email_phone(name,nums);
            }
            const age_checkbox = await ReservationPage.above_18_checkbox(i-64);
            await age_checkbox.click();
            const weight_checkbox = await ReservationPage.below_230_lbs_checkbox(i-64);
            await weight_checkbox.click();
            const tandemPack = await this.get_tandem_pack(i-64,tandemPackages)
            const videoOption = await this.get_video_option(i-64,videoOptions);
            await this.select_tandemP_videoO(i,tandemPack,videoOption);
        }
    }

    get_fName_lname(i){
        const nums = this.get_randomNum(i);
        let first_name =  String.fromCharCode(nums[0],nums[1],nums[2],nums[3],nums[4]);
        let last_name = String.fromCharCode(nums[3],nums[2],nums[4],nums[1],nums[0]);
        return [first_name,last_name];
    }

    get_randomNum(i){
        let num1 = Math.floor((Math.random() * 10) + 1)+i;
        let num2 = Math.floor((Math.random() * 10) + 1)+i;
        let num3 = Math.floor((Math.random() * 10) + 1)+i;
        let num4 = Math.floor((Math.random() * 10) + 1)+i;
        let num5 = Math.floor((Math.random() * 10) + 1)+i;
        return [num1,num2,num3,num4]
    }


    async fill_transnational_payment_details(fname,lname){
        await ReservationPage.Transitional_Modal.first_name_input_sel.setValue(fname);
        await ReservationPage.Transitional_Modal.last_name_input_sel.setValue(lname);
        await ReservationPage.Transitional_Modal.card_input_sel.setValue(4111111111111111);
        await ReservationPage.Transitional_Modal.month_expiry_sel.setValue("0223");
        await ReservationPage.Transitional_Modal.cvv_sel.setValue("123");
    }

    async accept_terms_conditions(payOption){
        await browser.pause(500);
        const terms_condition_btn= await ReservationPage.terms_condition_button(payOption);
        await terms_condition_btn.click();
        await ReservationPage.terms_condition_accept_btn.waitForDisplayed({timeout:10000});
        await ReservationPage.terms_condition_accept_btn.click();
        await browser.pause(1000);
    }

    async set_fname_lname(i,name){
        const firstName = await ReservationPage.first_name_input_sel(i-64);
        const lastName = await ReservationPage.last_name_input_sel(i-64);
        await firstName.setValue(name[0]);
        await browser.pause(1000);
        await lastName.setValue(name[1]);
        await browser.pause(1000);
    }

    async select_tandemP_videoO(i,tandemPack,videoOption){
        const TandemPack = await ReservationPage.tandem_option_sel(i-64);
        await TandemPack.selectByIndex(tandemPack);
        await browser.pause(1500);
        const selectVideo =  await ReservationPage.video_option_sel(i-64);
        await selectVideo.selectByIndex(videoOption);
        await browser.pause(1500);
    }

    async set_email_phone(name,nums){
        await ReservationPage.email_input_sel.setValue(`${name[0]}_${name[1]}${nums[1],nums[3]}@gmail.com`)
        await ReservationPage.phoneNo_input_sel.setValue(`646648${nums[0]}${nums[1]}`)
        await browser.pause(500);
    }

    async pay_makeReservation(payOption){
        let name = await this.get_fName_lname(67);
        await this.accept_terms_conditions(payOption);
        const payNowBtn = await ReservationPage.pay_now_btn(payOption);
        await payNowBtn.click();
        const reservationModal = await ReservationPage.Transitional_Modal.transitional_modal;
        await browser.pause(4000);
        const Tansitional_iframe = await ReservationPage.Transitional_Modal.transnational_modal_iframe;
        await browser.switchToFrame(Tansitional_iframe); 
        if(reservationModal){
           await this.fill_transnational_payment_details(name[0],name[1]);
        }
        await browser.switchToParentFrame();
        await ReservationPage.Transitional_Modal.submit_btn.click();
        await browser.pause(3000);
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
        else if(i===3){
            if(videoOptions[2]==="NT") return 2;
            else if(videoOptions[2]==="TA") return 1;
            else return 0;}
        else if(i===4){
            if(videoOptions[3]==="NT") return 2;
            else if(videoOptions[3]==="TA") return 1;
            else return 0;}
        else return 0;
    }

    get_tandem_pack(i,tandemPackages){
        if(i===1){
            if(tandemPackages[0]==="NT") return 2;
            else if(tandemPackages[0]==="TA") return 1;
            }
        else if(i===2){
            if(tandemPackages[1]==="NT") return 2;
            else if(tandemPackages[1]==="TA") return 1;
            }
        else if(i===3){
            if(tandemPackages[2]==="NT") return 2;
            else if(tandemPackages[2]==="TA") return 1;
            }
        else if(i===4){
            if(tandemPackages[3]==="NT") return 2;
            else if(tandemPackages[3]==="TA") return 1;
            }
        else return 1;
    }
}



export default new Reservation_Testing_Utils();