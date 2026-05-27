const dotenv = require('dotenv')
dotenv.config()
const MongoClient = require('mongodb').MongoClient



let db;

const initDb = callback => {
    if (db) {
        console.log('Db is already initialized!')
        return callback(null, db)
    }

    MongoClient.connect(process.env.MONGODB_URL)
        .then(client => {
            db = client.db();
            callback(null, db)
        })
        .catch(err => {
            callback(err)
        });
};

const getDb = () => {
    if (!db) {
        throw Error('Db has not been initialized. Please called init first.')
    }
    return db;
};

module.exports = {
    initDb,
    getDb
}