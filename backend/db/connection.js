require('dotenv').config()
const { MongoClient } = require('mongodb');

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
}

async function createItem(client, newItem){
    const result = await client.db("primeCluster").collection("foodCollection").insertOne(newItem);
    console.log(`New Item created with id: ${result.insertedId}`);
}

async function createItems(client, newItems){
    const result = await client.db("primeCluster").collection("foodCollection").insertMany(newItems);
    console.log(`New Item created with id: ${result.insertedId}`);
}

async function findItemFrom(client, nameOfItem) {
    const result = await client.db("primeCluster").collection("foodCollection").findOne({ name: nameOfItem });

    if (result) {
        console.log(`Found a item in the collection with the name '${nameOfItem}':`);
        console.log(result);
    } else {
        console.log(`No item found with the name '${nameOfItem}'`);
    }
}

async function findItemsFromProtein(client, amountOfProtein){
    const finder = client.db("primeCluster").collection("foodCollection").find(
        {
            protein: { $gte: amountOfProtein-3},
            protein: { $lte: amountOfProtein+3},
        }
        ).sort({ last_review: -1})
        .limit(20);
    
    const results = await finder.toArray();

    if (results.length > 0) {
        console.log(`Found items with plus/minus 3g of ${amountOfProtein} protein:`);
        results.forEach((result, i) => {
            console.log();
            console.log(`${i + 1}. name: ${result.name}`);
            console.log(`   _id: ${result._id}`);
            console.log(`   protein: ${result.protein}`);
        });
    } else {
        console.log(`No items found with ${amountOfProtein} protein`);
    }
}

async function createUser(client, newUser){
    const result = await client.db("primeCluster").collection("userCollection").insertOne(newUser);
    console.log(`New Item created with id: ${result.insertedId}`);
}

async function findUser(client, username){
    const result = await client.db("primeCluster").collection("userCollection").findOne({ username: username });

    if (result) {
        console.log(`Found a user in the collection with the name '${username}':`);
        console.log(result);
    } else {
        console.log(`No user found with the name '${username}'`);
    }
}


async function main() {
    const uri = "mongodb+srv://heap:Dv8cVvNATO7XIR3j@primecluster.lh1k21c.mongodb.net/?retryWrites=true&w=majority ";
    const client = new MongoClient(uri);

    try {
        await client.connect();
        await listDatabases(client);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);