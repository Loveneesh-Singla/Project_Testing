class LoginPage{

    open(){
        return browser.url('/');
    }

    get submit_btn(){
        return $('//*[@id="root"]/div/div/div/div/div[1]/div/div/div/div/div[2]/div/form/div[3]/button');
    }

    async doLogin(){
        await this.open();
        await $('[name=username]').setValue("mesquite_manifest");
        await $('[name=password]').setValue("Mesquite123!");
        await this.submit_btn.click();
        await expect(browser).toHaveUrl("http://localhost:5002/load-manager");
        await browser.pause(2000);
    }
}



export default new LoginPage(); 