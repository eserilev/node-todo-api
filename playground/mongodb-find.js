const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID()

console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');

	db.collection('Users').insertOne({
		name: 'Maya',
		age: '55',
		location: 'Torrance'
	}).then((result)=>{
		console.log('insert my promise');
	}, (err) => {
		console.log('error');
	})

	db.collection('Users').find({location: 'Torrance'}).toArray().then((docs) => {
		console.log(JSON.stringify(docs, undefined, 2));
	}, (err) => {
		console.log('fuck');
	})
	db.collection('Users').find().count().then((count) => {
		console.log(`promise: ${count}`);
	}, (err) => {
		console.log('error');
	});

	/*
	db.collection('Users').find(/*{
		key: value,
		_id: new ObjectId('id#')
	}).toArray().then((docs) => {
		console.log('');
		console.log(JSON.stringify(docs, undefined, 2));
	}, (err) => {
		console.log('Unable to fetch Users', err);
	});
	db.collection('Todos').insertOne({
		text: 'Something to do',
		completed: false
	}, (err, result) => {

		if (err) {
			return console.log('Unable to insert ToDo', err);
		}
		console.log(JSON.stringify(result.ops, undefined, 2));
	});
	*//*
	db.collection('Users').insertOne({
		name: 'Eitan',
		age: '25',
		location: 'Torrance'
	}, (err, result) => {
		if (err) {
			return console.log('Unable to insert to User', err);
		}
		console.log(JSON.stringify(result.ops, undefined, 2));
	})
	*/
	db.close();
});

