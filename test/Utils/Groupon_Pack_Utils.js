import GroupOnPackages_Page from "../pages/GroupOnPackages_Page";
import Drop_collections_MongoDB from "./Drop_collections_MongoDB";




class Groupon_Pack_Utils{

    async create_groupon_packages(){
        await GroupOnPackages_Page.add_groupon_btn.click();
        await browser.pause(500);
        await Drop_collections_MongoDB.drop_collection("groupons");
        await browser.pause(5000);
    }
}


export default new Groupon_Pack_Utils();