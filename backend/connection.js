require("dotenv").config();
const { MongoClient } = require("mongodb");

async function listDatabases(client) {
  databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach((db) => console.log(` - ${db.name}`));
}

async function createItem(client, newItem) {
  const result = await client
    .db("primecluster") // database cluster MUST ALL BE LOWERCASE SO STUPID
    .collection("foodCollection") // THIS IS CASE SENSITIVE, DO NOT MAKE LOWERCASE. I HATE MONGODB
    .insertOne(newItem);
  console.log(`New Item created with id: ${result.insertedId}`);
}

async function createItems(client, newItems) {
  const result = await client
    .db("primecluster")
    .collection("foodCollection")
    .insertMany(newItems);
  console.log(`New Item created with id: ${result.insertedId}`);
}

async function findItemFrom(client, nameOfItem) {
  const result = await client
    .db("primecluster")
    .collection("foodCollection")
    .findOne({ food: nameOfItem });

  if (result) {
    console.log(
      `Found a item in the collection with the name '${nameOfItem}':`
    );
    console.log(result);
    return result;
  } else {
    console.log(`No item found with the name '${nameOfItem}'`);
  }
}

// FIND BY PROTEIN
async function findItemsFromProtein(client, amountOfProtein) {
  const finder = client
    .db("primecluster")
    .collection("foodCollection")
    .find({
      protein: { $gte: amountOfProtein - 3, $lte: amountOfProtein + 3 },
    })
    .sort({ last_review: -1 })
    .limit(20);

  const results = await finder.toArray();

  if (results.length > 0) {
    // console.log(
    //   `Found items with plus/minus 3g of ${amountOfProtein} protein:`
    // );
    // results.forEach((result, i) => {
    //   console.log();
    //   console.log(`${i + 1}. name: ${result.food}`);
    //   console.log(`   _id: ${result._id}`);
    //   console.log(`   protein: ${result.protein}`);
    // });
    return results;
  } else {
    console.log(`No items found with ${amountOfProtein} protein`);
  }
}

// FIND BY CARBS
async function findItemsFromCarbs(client, amountOfCarbs) {
  const finder = client
    .db("primecluster")
    .collection("foodCollection")
    .find({
      carbs: { $gte: amountOfCarbs - 3, $lte: amountOfCarbs + 3 },
    })
    .sort({ last_review: -1 })
    .limit(20);

  const results = await finder.toArray();

  if (results.length > 0) {
    // console.log(`Found items with plus/minus 3g of ${amountOfCarbs} carbs:`);
    // results.forEach((result, i) => {
    //   console.log();
    //   console.log(`${i + 1}. name: ${result.food}`);
    //   console.log(`   _id: ${result._id}`);
    //   console.log(`   carbs: ${result.carbs}`);
    // });
    return results;
  } else {
    console.log(`No items found with ${amountOfCarbs} carbs`);
  }
}

// FIND BY Fat
async function findItemsFromFat(client, amountOfFat) {
  const finder = client
    .db("primecluster")
    .collection("foodCollection")
    .find({
      fat: { $gte: amountOfFat - 3, $lte: amountOfFat + 3 },
    })
    .sort({ last_review: -1 })
    .limit(20);

  const results = await finder.toArray();

  if (results.length > 0) {
    // console.log(`Found items with plus/minus 3g of ${amountOfFat} fat:`);
    // results.forEach((result, i) => {
    //   console.log();
    //   console.log(`${i + 1}. name: ${result.food}`);
    //   console.log(`   _id: ${result._id}`);
    //   console.log(`   fat: ${result.fat}`);
    // });
    return results;
  } else {
    console.log(`No items found with ${amountOfFat} fat`);
  }
}

async function createUser(client, newUser) {
  const result = await client
    .db("primecluster")
    .collection("userCollection")
    .insertOne(newUser);
  console.log(`New Item created with id: ${result.insertedId}`);
}

async function findUser(client, username) {
  const result = await client
    .db("primecluster")
    .collection("userCollection")
    .findOne({ username: username });

  if (result) {
    console.log(`Found a user in the collection with the name '${username}':`);
    console.log(result);
    return result;
  } else {
    console.log(`No user found with the name '${username}'`);
  }
}

async function main() {
  const uri =
    "mongodb+srv://heap:Dv8cVvNATO7XIR3j@primecluster.lh1k21c.mongodb.net/?retryWrites=true&w=majority ";
  const client = new MongoClient(uri);
  try {
    await client.connect();
    // put code here
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

main().catch(console.error);

module.exports = {
  findItemsFromProtein,
  findItemsFromCarbs,
  findItemsFromFat,
  findItemFrom,
  listDatabases,
};
