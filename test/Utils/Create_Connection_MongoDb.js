import  { MongoClient }  from 'mongodb';

class Mongo_DB{
async createConnection(connection) {
    return new Promise((resolve, reject) => {
        MongoClient.connect('mongodb://localhost:27017/dizio_kpow_dev', async function (err, client) {
            if (err) {
                reject(err);
            }

            const database = await client.db('dizio_kpow_dev')
            resolve(database);
            });
        });
    }
}


export default new Mongo_DB();