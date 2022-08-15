class Gmail_Page {
    async emailLogin(){
        await browser.url('https://accounts.google.com/signin/v2/identifier?flowName=GlifWebSignIn&flowEntry=ServiceLogin');
    }
    get emailUsername(){
        return $('//*[@id="identifierId"]')
    }
    get next_btn(){
        return $('//*[@id="identifierNext"]/div/button/span')
    }
    get emailPassword(){
        return $('/html/body/div[1]/div[1]/div[2]/div/div[2]/div/div/div[2]/div/div[1]/div/form/span/section/div/div/div[1]/div[1]/div/div/div/div/div[1]/div/div[1]/input')
    }
    get Next_button(){
        return $('//*[@id="passwordNext"]/div/button/span')
    }
    async Url(){
        await browser.url('https://mail.google.com/mail/u/0/?tab=km#inbox')
    }
    get Error_Email(){
         return $('/html/body/div[7]/div[3]/div/div[2]/div[1]/div[2]/div/div/div/div/div[2]/div/div[1]/div/div[1]/div[6]/div[1]/div/table/tbody/tr[1]')
    }
    get Check_Error_Response(){
        return $('/html/body/div[7]/div[3]/div/div[2]/div[1]/div[2]/div/div/div/div/div[2]/div/div[1]/div/div[3]/div/table/tr/td[1]/div[2]/div[2]/div/div[3]/div/div/div/div/div/div[1]/div[2]/div[3]/div[3]/div/p[7]')
    }             
}
export default new Gmail_Page();