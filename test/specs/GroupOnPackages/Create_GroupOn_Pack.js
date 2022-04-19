import Login_Page from '../../pages/Login_Page';
import GroupOnPackages_Page from '../../pages/GroupOnPackages_Page';
import Groupon_Pack_Utils from '../../Utils/Groupon_Pack_Utils';
import Drop_collections_MongoDB from '../../Utils/Drop_collections_MongoDB';


describe("Create GroupOn Packages", () =>{

    it("Login" , async ()=>{
        await Login_Page.doLogin();
    })

    it("Create GroupOn Packages", async()=>{
        await GroupOnPackages_Page.visit_groupon_packages_page();
        await Drop_collections_MongoDB.drop_collection("groupons");
        await browser.pause(500);
        let numTickets = 1;
        let file = '../Data/1 Jump Florida Skydiving(Tandem Skydive for One)$120.csv';
        let tandemPack = 'Tandem_GP_1_TA'
        await Groupon_Pack_Utils.create_groupon_packages(file,tandemPack,numTickets);
        file = '../Data/2 Jump Florida Skydiving(Tandem Skydive for Two)$239.csv';
        tandemPack = 'Tandem_GP_2_NT';
        numTickets = 2;
        await Groupon_Pack_Utils.create_groupon_packages(file,tandemPack,numTickets);
    })

})