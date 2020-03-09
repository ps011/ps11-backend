const mongoose = require('mongoose');
const url = `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@ds215633.mlab.com:15633/portfolio`;

module.exports = {

    connectToServer: async () => {
        try {
             return Promise.resolve(mongoose.connect(url, { useNewUrlParser: true,  useUnifiedTopology: true }));
        } catch (err) {
            return Promise.reject(err);
        }
    },
    getMongoose: () => {
        return mongoose;
    }
};
