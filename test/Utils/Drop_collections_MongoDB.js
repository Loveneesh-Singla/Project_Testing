import Mongo_DB from './Create_Connection_MongoDb';

class  DropCollection{

    async drop_collection(collection){
        const database = await Mongo_DB.createConnection();
        await browser.pause(2500);
        await database.collection(collection).drop();
    }
}


export default new DropCollection();