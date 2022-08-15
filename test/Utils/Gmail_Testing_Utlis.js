import Gmail_Page from "../pages/Gmail_Page";


class GmailUtils{
    async visit_gmail_login_page(){
        await Gmail_Page.emailLogin();
    }
    async verify_transaction_response__card_status(Error_Message){
        await this.visit_gmail_login_page();
        await this.gmail_login();
        await browser.pause(3000)
        await Gmail_Page.Url();
        await Gmail_Page.Error_Email.click();
        await browser.pause(3000)
        const transactionErrorResponse = await Gmail_Page.Check_Error_Response.getText();
        await expect (transactionErrorResponse).toEqual(`Transaction Error Response: ${Error_Message}`)
    }
    async gmail_login(){
        await Gmail_Page.emailUsername.setValue("mahimasaini@zestgeek.com");
        await Gmail_Page.next_btn.click();
        await browser.pause(3000)
        await Gmail_Page.emailPassword.setValue("Mahima@09Ind#!");
        await Gmail_Page.Next_button.click();
    }
}

export default new GmailUtils();

