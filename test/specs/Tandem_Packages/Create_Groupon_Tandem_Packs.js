import Login_Page from '../../pages/Login_Page';
import TandemPackagesPage from '../../pages/Tandem_Packages_Page';
import Tandem_Packages_Utils from '../../Utils/Tandem_Packages_Utils';

describe("Create GroupOn Tandem Packages", () =>{

    it("Login" , async ()=>{
        await Login_Page.doLogin();
    })

    it("Create GroupOn Tandem Packages", async()=>{
        await TandemPackagesPage.visit_tandem_packages_page();
        await Tandem_Packages_Utils.create_groupon_tandem_packages();
    })

})