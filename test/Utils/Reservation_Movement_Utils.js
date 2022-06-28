
import Mongo_DB from './Create_Connection_MongoDb'


class Reservation_Movement_Utils{


    async get_reservation_id(jumperNames){
        await browser.pause(500);
        const database = await Mongo_DB.createConnection();
        await browser.pause(3500);
        const searchString1 = jumperNames[0][0][0].slice(0,1)+jumperNames[0][0][0].slice(1).toLowerCase();
        const searchString2 = jumperNames[0][0][1].slice(0,1)+jumperNames[0][0][1].slice(1).toLowerCase();
        const searchString3 = jumperNames[1];
        const finalSearchString = `${searchString1} ${searchString2} ${searchString3} 411111******1111`
        const reservation = await database.collection('reservations').findOne({searchString:finalSearchString})
        const reservationId = JSON.stringify(reservation._id);
        return reservationId.slice(1,-1)
    }
}


export default new Reservation_Movement_Utils();