import GroupOnPackages_Page from "../pages/GroupOnPackages_Page";
import path from 'path';



class Groupon_Pack_Utils{

    async create_groupon_packages(file,tandemPack,numTickets){
        await GroupOnPackages_Page.add_groupon_btn.click();
        const filePath = path.join(__dirname,file);
        const remoteFilePath = await browser.uploadFile(filePath);
        await browser.execute("document.querySelector('.react-file-reader-input').style.cssText = 'width:100px;opacity:5'");
        await GroupOnPackages_Page.upload_file_input_sel.setValue(remoteFilePath)
        await GroupOnPackages_Page.num_tickets_input_sel.setValue(numTickets);
        await browser.pause(2000);
        await GroupOnPackages_Page.tandem_pack_sel.selectByVisibleText(tandemPack);
        await browser.pause(2000);
        await GroupOnPackages_Page.submit_btn.click();
    }
}


export default new Groupon_Pack_Utils();