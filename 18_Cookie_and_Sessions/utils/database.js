
const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

const mongo_url = 'database url';

let _db ;

const mongoConnection = (callBack) => { 
    MongoClient.connect(mongo_url)
    .then(client => {
        console.log('Connected to MongoDB');
        callBack();
        _db = client.db();
        
    }).catch(err => {
        console.log('Failed to connect to MongoDB', err);
    }
    ); 
}

const getDb = () => {
    if(_db){
        return _db;
    }
    throw 'No database found';
}

exports.mongoConnection = mongoConnection;
exports.getDb = getDb;
 

