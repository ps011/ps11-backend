const MongoClient = require( 'mongodb' ).MongoClient;
const url = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@ds215633.mlab.com:15633/portfolio`;

let _db;

module.exports = {

    connectToServer: function( callback ) {
        MongoClient.connect( url, function( err, client ) {
            _db  = client.db('test_db');
            return callback( err );
        } );
    },

    getDb: function() {
        return _db;
    }
};
