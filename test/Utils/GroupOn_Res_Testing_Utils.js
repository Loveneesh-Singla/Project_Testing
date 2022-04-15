import GroupOn_Res_Page from "../pages/GroupOn_Res_Page";


class GroupResTestingUtils {

    async set_groupOn_code(codes){
        let i = 0;
        while(true){
            await GroupOn_Res_Page.groupOnCodeInput.setValue(codes[i])
            const isValid =  await GroupOn_Res_Page.groupon_pack_header.isExisting();
            if( isValid || i > 200 ) break;
            i++;
        }
        
        
    
    }

}


export default new GroupResTestingUtils();