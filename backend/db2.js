const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://dodelivery:Papag1301@cluster0.ra0f01o.mongodb.net/dodelivery?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Connected to MongoDB Atlas');

    // Fetch data from a collection
    const myCollection = db.collection('food_items');
    myCollection.find({}).toArray(function (err, docs) {
        if (err) throw err;
        console.log(docs);
        db.close();
    });
});

module.exports = db