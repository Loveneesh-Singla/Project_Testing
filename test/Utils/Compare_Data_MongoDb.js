import Mongo_DB from './Create_Connection_MongoDb'



class MongoDB_Data{


    async check_data_for_reservations(jumperNames,isweekend,payOption){
        const taxRate = 8;
        for(let i = 0 ;i<jumperNames.length;i++){
            
            let firstName = jumperNames[i][0].charAt(0)+jumperNames[i][0].slice(1,jumperNames[i][0].length).toLowerCase();
            let lastName = jumperNames[i][1].charAt(0)+jumperNames[i][1].slice(1,jumperNames[i][1].length).toLowerCase();
            const database = await Mongo_DB.createConnection();
            await browser.pause(1500);
            const tandemStudent = await database.collection('tandemstudents').findOne({firstname:firstName,lastname:lastName});
            await browser.pause(2500);
            const selectedTandemPack = await database.collection('items').findOne({item:tandemStudent.tandemPackage});
            await browser.pause(2500);
            const selectedCalenderEvent = await database.collection('calenderevents').findOne({eventName:selectedTandemPack.calenderEvent});
            await browser.pause(2500);
            const deositAmount = await selectedCalenderEvent.depositAmount ? selectedCalenderEvent.depositAmount : 25
            let selectedVideo = await database.collection('items').findOne({item:tandemStudent.video});
            const selectedVideoPrice = tandemStudent.video!=="none" ? selectedVideo.videoPrice : 0;
            let SelectedTandemPackPrice = isweekend ? selectedTandemPack.weekendPrice : selectedTandemPack.price;
            SelectedTandemPackPrice = payOption !== "deposit" ? SelectedTandemPackPrice : deositAmount;
            const SelectedTandemPackTax = selectedTandemPack.isTaxable && payOption !== "deposit"  ? (taxRate * SelectedTandemPackPrice)/100 : 0;
            const selectedVideoTax = (tandemStudent.video!=="none" && selectedVideo?.isTaxable) ? (taxRate * selectedVideoPrice)/100 : 0;
            const totalPaid = payOption === "deposit" ? deositAmount+selectedVideoPrice : SelectedTandemPackPrice+selectedVideoPrice;
            await expect(tandemStudent.firstname).toEqual(firstName);
            await expect(tandemStudent.lastname).toEqual(lastName);
            await expect(tandemStudent.totalPaid).toEqual(totalPaid);
            await expect(tandemStudent.totalTaxPaid).toEqual(SelectedTandemPackTax+selectedVideoTax);
            await expect(tandemStudent.totalTandemPaid).toEqual(SelectedTandemPackPrice);
            await expect(tandemStudent.totalVideoPaid).toEqual(selectedVideoPrice);
            await expect(tandemStudent.totalTandemTaxPaid).toEqual(SelectedTandemPackTax);
            await expect(tandemStudent.totalVideoTaxPaid).toEqual(selectedVideoTax);
        }
    }
}

export default new MongoDB_Data();