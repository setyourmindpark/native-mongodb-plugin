import mongodb from 'mongodb';
import q from 'q';
const MongoClient = mongodb.MongoClient;

async function createModule( uri ){
    const deferred = q.defer();
    MongoClient.connect( uri, { useNewUrlParser: true }, ( err, client ) => {
        if ( err ) {
            deferred.reject( err );
            return;
        };
        const db = client.db( uri.split('/').pop() );
        deferred.resolve( db );
    });
    return deferred.promise;
}

export default {
    createModule
};