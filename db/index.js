const mongoose = require('mongoose');
const url = process.env.MONGO_URI;
mongoose.set("debug", (collectionName, method, query, doc) => {
  console.log(`${collectionName}.${method}`, JSON.stringify(query), doc);
});

module.exports = class MongooseConnection {
  constructor() {
    // iniciar conexion al momento de llamar a la clase desde el archivo server.js
    this.client = this.init_connect();
  }

  init_connect() {
    // configurar mongo antes de iniciar la conexion
    mongoose.connect(url,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    mongoose.connection.on('connected', function(){
      console.log(`Mongoose default connection is open to, ${url}`);
    });

    mongoose.connection.on('error', function(err){
        console.log(`Mongoose default connection has occured ${err} error`);
    });
  }

  disconnected(){
    mongoose.connection.close('disconnected', function(){
      console.log('Mongoose default connection is disconnected');
    });

    process.on('SIGINT', function(){
      mongoose.connection.close(function(){
        console.log('Mongoose default connection is disconnected due to application termination');
        process.exit(0)
      });
    });
  }
};