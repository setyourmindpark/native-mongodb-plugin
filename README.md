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
    "mysql-queryhelper": "git+https://github.com/setyourmindpark/native-mongodb-plugin.git"
    ...
  }
...
```

### EXAMPLE
``` javascript
import mongodb from 'native-mongodb-plugin';

( async () => {
    const db = await mongodb.createModule('mongodb://localhost:27017/example');
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
})()
```