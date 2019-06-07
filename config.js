const DataBase ={
    connectionString:process.env.dbcstring||'mongodb://appuser:Hey123456@ds263876.mlab.com:63876/virtualstore',
    dbName: 'virtualstore',
    options : {
        useNewUrlParser: true,
        reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
        reconnectInterval: 500, // Reconnect every 500ms
        poolSize: 10, // Maintain up to 10 socket connections
        // If not connected, return errors immediately rather than waiting for reconnect
        bufferMaxEntries: 0,
        connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
        socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
        family: 4 // Use IPv4, skip trying IPv6
      }
}
module.exports= exports = DataBase;