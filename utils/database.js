const mongoose = require('mongoose');
const url = `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@ds215633.mlab.com:15633/portfolio`;

let _db;
let mongooseInstance;

module.exports = {

    connectToServer: async () => {
        try {
            mongooseInstance = await mongoose.connect(url, { useNewUrlParser: true,  useUnifiedTopology: true, });
            _db = mongoose.connection;
            return _db;
        } catch (err) {
            return err;
        }
    },

    getDb: () => {
        return _db;
    },
    getMongoose: () => {
        return mongoose;
    }
};
