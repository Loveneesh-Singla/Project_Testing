import CalenderPage from "../pages/CalenderPage";


class TimeSlots_Utils{
    
    async select_dates(calenderDateRow,i){
        await CalenderPage.start_date_sel.click();
        await CalenderPage.next_month_sel.waitForClickable({timeout:2000})
        for(let j = 0 ;j<i;j++){
            await CalenderPage.next_month_sel.click();
            await browser.pause(500)
        }
        await browser.pause(500)
        const startDate = await CalenderPage.start_date_sel_cal(calenderDateRow,i);
        await startDate.waitForClickable({ timeout: 10000 });
        await startDate.click();
        await CalenderPage.end_date_sel.click();
        const endDate = await CalenderPage.end_date_Sel_Cal(calenderDateRow,i);
        await endDate.waitForClickable({timeout:10000});
        await endDate.click();
    }

    async select_days(i){
        await $('[name=sun]').click();
        await $('[name=mon]').click();
        if(i%2==0)
        await $('[name=tues]').click();
        await $('[name=wed]').click();
        await $('[name=thur]').click();
        await $('[name=fri]').click();
        if(i%2!=0)
        await $('[name=sat]').click();
    }

    async changeMonth(i){
        if(i<=5) await CalenderPage.change_month_button.click();
        else if(i>5 && i <= 10) { await this.Change_Month(2)}
        else if(i>10 && i <= 15){ await this.Change_Month(3)}
        else if(i>15 && i <= 20){ await this.Change_Month(4)}
        else{ await this.Change_Month(5) }
    }

    async Change_Month(n){
        for(let j=0 ;j<n;j++){
            await CalenderPage.change_month_button.click(); await browser.pause(500); 
        }
    }
}


export default new TimeSlots_Utils();