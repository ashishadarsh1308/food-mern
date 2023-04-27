const mongoose = require('mongoose');

//const uri = 'mongodb+srv://dodelivery:Papag1301@cluster0.ra0f01o.mongodb.net/dodelivery?retryWrites=true&w=majority';
const uri = 'mongodb://dodelivery:Papag1301@ac-olkswnr-shard-00-00.ra0f01o.mongodb.net:27017,ac-olkswnr-shard-00-01.ra0f01o.mongodb.net:27017,ac-olkswnr-shard-00-02.ra0f01o.mongodb.net:27017/dodelivery?ssl=true&replicaSet=atlas-1xtvun-shard-0&authSource=admin&retryWrites=true&w=majority'

const mongoDB = async () => {
  try {
    await mongoose.connect(uri, { useNewUrlParser: true });
    console.log("Connected to MongoDB Atlas");

    mongoose.connection.on("connected", function() {
      const fetched_data = mongoose.connection.collection("foods");
      fetched_data.find({}).toArray(function(err, data){
        if(err) console.log(err);
        else console.log(data);
      });
    });

  } catch (err) {
    console.log("Error connecting to MongoDB Atlas:", err);
  }
};

module.exports = mongoDB;


// const mongoDB = () => {
//   await mongoose.connect(uri,{useNewUrlParser: true}).then(data => console.log(`Connected to DB`)).catch(err => console.log(err));
//   mongoose.connect(uri, { useNewUrlParser: true })
//     .then(() => {
//       console.log('Connected to DB');
//       const fetch_data = mongoose.connection.db.collection("food_items")
//       fetch_data.find({}).toArray(function (data) {
//         console.log(data)
//       })
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }

// module.exports = mongoDB;

// mongoose.connect(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

// const db = mongoose.connection;

// db.on("error", console.error.bind(console, "connection error "));
// db.once("open", () => {
//   console.log("Successfully connected to DB");
// })

// module.exports = db; 