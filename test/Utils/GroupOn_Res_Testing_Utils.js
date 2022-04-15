import GroupOn_Res_Page from "../pages/GroupOn_Res_Page";


class GroupResTestingUtils {

    async set_groupOn_code(){
        await GroupOn_Res_Page.groupOnCodeInput.setValue('YMSUEFWJ');
    
    }

}


export default new GroupResTestingUtils();