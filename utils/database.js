const MongoClient = require( 'mongodb' ).MongoClient;
const url = `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@ds215633.mlab.com:15633/portfolio`;

let _db;

module.exports = {

    connectToServer: function( callback ) {
        MongoClient.connect( url, function( err, client ) {
            _db  = client.db('portfolio');
            return callback( err, _db );
        } );
    },

    getDb: function() {
        return _db;
    }
};
