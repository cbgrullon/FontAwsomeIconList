const {MongoClient,Db,Collection} =require('mongodb');
const Database =require('../config');
let client,db;
async function connect(){
    client = new MongoClient(Database.connectionString,Database.options);
    await client.connect()
    db = client.db(Database.dbName);
}
function getDatabase(){
    return db;
}
async function dispose(){
    await client.close();
}
async function getIcons(){
    let collection = db.collection('icons');
    let icons =await collection.find({}).toArray();
    return icons;
}
async function getIconsBytTagName(likeTag){
    let collection = db.collection('icons');
    let icons =await collection.find({tags:{tagName:`/.*${likeTag}/.*`}}).toArray();
    return icons;
}
module.exports = exports = {connect,getDatabase,dispose,getIcons,getIconsBytTagName}