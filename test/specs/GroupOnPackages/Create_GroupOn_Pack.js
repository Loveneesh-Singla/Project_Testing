import Login_Page from '../../pages/Login_Page';
import GroupOnPackages_Page from '../../pages/GroupOnPackages_Page';
import Groupon_Pack_Utils from '../../Utils/Groupon_Pack_Utils';


describe("Create GroupOn Packages", () =>{

    it("Login" , async ()=>{
        await Login_Page.doLogin();
    })

    it("Create GroupOn Packages", async()=>{
        await GroupOnPackages_Page.visit_groupon_packages_page();
        // await Groupon_Pack_Utils.create_groupon_packages();
    })

})