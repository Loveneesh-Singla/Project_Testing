import Mongo_DB from './Create_Connection_MongoDb'



class MongoDB_Data{


    async check_data_for_reservations(jumperNames,isweekend,payOption){
        const taxRate = 8;
        for(let i = 0 ;i<jumperNames.length;i++){
            
            let firstName = jumperNames[i][0].charAt(0)+jumperNames[i][0].slice(1,jumperNames[i][0].length).toLowerCase();
            let lastName = jumperNames[i][1].charAt(0)+jumperNames[i][1].slice(1,jumperNames[i][1].length).toLowerCase();
        
            const {tandemStudent,selectedTandemPack,selectedCalenderEvent,database} = await this.getDataFromDatabase(firstName,lastName);
            await browser.pause(1000);
            const deositAmount = await selectedCalenderEvent.depositAmount ? selectedCalenderEvent.depositAmount : 25
            let selectedVideo = await database.collection('items').findOne({item:tandemStudent.video});
            const selectedVideoPrice = tandemStudent.video!=="none" ? selectedVideo.videoPrice : 0;
            let SelectedTandemPackPrice = isweekend ? selectedTandemPack.weekendPrice : selectedTandemPack.price;
            SelectedTandemPackPrice = payOption !== "deposit" ? SelectedTandemPackPrice : deositAmount;
            let SelectedTandemPackTax = selectedTandemPack.isTaxable && payOption !== "deposit"  ? (taxRate * SelectedTandemPackPrice)/100 : 0;
            let selectedVideoTax = (tandemStudent.video!=="none" && selectedVideo?.isTaxable) ? (taxRate * selectedVideoPrice)/100 : 0;
            let totalPaid = payOption === "deposit" ? deositAmount+selectedVideoPrice : SelectedTandemPackPrice+selectedVideoPrice;
            let Total_Tax_Paid = SelectedTandemPackTax+selectedVideoTax;

            if(payOption === "noPay"){
                totalPaid = 0;
                SelectedTandemPackTax = undefined;
                SelectedTandemPackPrice = 0;
                Total_Tax_Paid =0 ;
                selectedVideoTax = undefined
            }
            let taxPaid = tandemStudent.totalTaxPaid.toString().split(".")[0];
            await expect(tandemStudent.firstname).toEqual(firstName);
            await expect(tandemStudent.lastname).toEqual(lastName);
            await expect(tandemStudent.totalPaid).toEqual(totalPaid);
            await expect((taxPaid)).toEqual(Total_Tax_Paid+"");
            await expect(tandemStudent.totalTandemPaid).toEqual(SelectedTandemPackPrice);
            await expect(tandemStudent.totalVideoPaid).toEqual(selectedVideoPrice);
            await expect((tandemStudent?.totalTandemTaxPaid?.toString()?.split(".")[0])+"").toEqual(SelectedTandemPackTax+"");
            await expect(tandemStudent.totalVideoTaxPaid).toEqual(selectedVideoTax);
        }
    }

    async getDataFromDatabase(firstName,lastName){
        const database = await Mongo_DB.createConnection();
        await browser.pause(3500);
        const tandemStudent = await database.collection('tandemstudents').findOne({firstname:firstName,lastname:lastName});
        await browser.pause(2500);
        const selectedTandemPack = await database.collection('items').findOne({item:tandemStudent.tandemPackage});
        await browser.pause(2500);
        const selectedCalenderEvent = await database.collection('calenderevents').findOne({eventName:selectedTandemPack.calenderEvent});
        await browser.pause(2500);

        return {tandemStudent,selectedTandemPack,selectedCalenderEvent,database};
    }
}

export default new MongoDB_Data();