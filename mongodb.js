//CRUD create read update delete

const mongodb = require('mongodb')
const MongoCient = mongodb.MongoClient
const ObjectID = mongodb.ObjectID
// const { MongoCient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const database =  'task-manager'

// const id = new ObjectID()
// console.log(id.getTimestamp())

MongoCient.connect(connectionURL, { useNewUrlParser: true}, (error,client) => {
    if (error) {
        return console.log('Unable to connect to database')
    }

    const db  = client.db(database)

    // db.collection('users').find({age:23}).toArray((error,users)=>{
    //     console.log(users)
    // })
    // db.collection('users').find({age:23}).count((error,count)=>{
    //     console.log(count)
    // })

    // db.collection('tasks').find({completed:false}).toArray((error,task)=>{
    //     console.log(task)
    // })
    // 5d03e2f8c7a327fd40c39e90
    // const promise = db.collection('users').update({
    //     _id: new ObjectID('5d03e2f8c7a327fd40c39e90')
    // },{
    //     $inc:{
    //         age: 10
    //     }
    // }).then( (result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })

    // const promise = db.collection('tasks').updateMany({
    //     completed: false
    // },{
    //     $set:{
    //         completed:true
    //     }
    // }).then((result)=>{
    //     console.log(result)
    // }).then((error)=>{
    //     console.log(error)
    // })
    
    // const promise = db.collection('users').deleteMany({
    //     age:23
    // }).then((result)=>{
    //     console.log(result)
    // }).then((error)=>{
    //     console.log(error)
    // })

    const promise = db.collection('tasks').deleteOne({
        completed:true
    }).then((result)=>{
        console.log(result)
    }).then((error)=>{
        console.log(error)
    })
//     db.collection('users').insertOne({
//         _id:id,
//         name:'Jyoti',
//         age:42
//     },(error, result) => {
//         if (error){
//             return console.log("Unable to insert user")
//         }
//         console.log(result.ops)
//     })
// })
//     db.collection('tasks').insertMany([
//         {
//             desc: 'Email John',
//             completed: true
//         },
//         {
//             desc: 'Take test',
//             completed: false
//         },
//         {
//             desc: 'Call Dad',
//             completed: true
//         }
//     ],(error,result)  => {
//         if(error){
//             return console.log('Unable to add')
//         }
//         console.log(result.ops)
//     })
// })
//     db.collection('users').insertMany([
//         {
//             name: 'Itish',
//             age: 22
//         },{
//             name: 'Manish',
//             age:45
//         }
//     ],(error,result) => {
//         if (error){
//             return console.log('Unable to insert docs')
//         }
//         console.log(result.ops)
    })
