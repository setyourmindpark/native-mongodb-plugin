## NATIVE-MONGODB-PLUGIN

### DEPENDENCIES
- mongodb
- q

### INSTALL
set config in your package.json
``` 
...
"dependencies": {
    ...
    "native-mongodb-plugin": "git+https://github.com/setyourmindpark/native-mongodb-plugin.git"
    ...
  }
...
```

### EXAMPLE
``` javascript
import mongodbPlugin from 'native-mongodb-plugin';

( async () => {
    const db = await mongodbPlugin.createModule('mongodb://localhost:27017/example');
    const collection = db.collection('hello');
    const insertOne = await collection.insertOne({
        name: 'jaehunpark'
    });
    // {
    //     result: { n: 1, ok: 1 },
    //     ...
    //     insertedCount: 1,
    //     insertedId: 5b80f7a3a93fda51c1cee7ea
    // }    
    // you can handle other databases
    const db2 = await mongodbPlugin.createModule('mongodb://localhost2:27017/example'); 
    const collection2 = db2.collection('hello');
    const insertOne2 = await collection2.insertOne({
        name: 'jaehunpark2'
    }); 
})()
```
