const { MongoClient } = require("mongodb");
const csv = require("csv-parser");
const fs = require("fs");

// lists data bases
async function listDatabases(client) {
  databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach((db) => console.log(` - ${db.name}`));
}

// initialize database
async function main() {
  const uri =
    "mongodb+srv://heap:Dv8cVvNATO7XIR3j@primecluster.lh1k21c.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri);

  const data = {};
  const results = [];
  // connect to database
  try {
    await client.connect();
    await listDatabases(client);

    // Get a reference to the database and collection
    const db = client.db("primecluster");
    const foodCollection = db.collection("foodCollection");

    // start adding users to collection (RUN ONLY ONCE) --------------------------------------------------------------------------------

    // Read the CSV file
    fs.createReadStream("nutrients4.csv")
      .pipe(csv())
      .on("data", (data) => {
        results.push(data);
      })
      .on("end", () => {
        // Create a JSON object
        const data = {};

        // Populate the JSON object
        for (const row of results) {
          data[row.id] = {
            food: row.food,
            measure: row.measure,
            grams: parseInt(row.grams),
            calories: parseInt(row.calories),
            protein: parseInt(row.protein),
            fat: parseInt(row.fat),
            satFat: parseInt(row.satFat),
            fiber: parseInt(row.fiber),
            carbs: parseInt(row.carbs),
            category: row.category,
          };

          console.log(
            row.food,
            row.measure,
            row.grams,
            row.calories,
            row.protein,
            row.fat,
            row.satFat,
            row.fiber,
            row.carbs,
            row.category
          );
          addFood(
            row.food,
            row.measure,
            parseInt(row.grams),
            parseInt(row.calories),
            parseInt(row.protein),
            parseInt(row.fat),
            parseInt(row.satFat),
            parseInt(row.fiber),
            parseInt(row.carbs),
            row.category
          );
        }
      });
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }

  // Insert the document into the collection
  // const result = await userCollection.insertOne(user);
}

async function addFood(
  food,
  measure,
  grams,
  calories,
  protein,
  fat,
  satFat,
  fiber,
  carbs,
  category
) {
  const veggie = {
    food: food,
    measure: measure,
    grams: grams,
    calories: calories,
    protein: protein,
    fat: fat,
    satFat: satFat,
    fiber: fiber,
    carbs: carbs,
    category: category,
  };

  const uri =
    "mongodb+srv://heap:Dv8cVvNATO7XIR3j@primecluster.lh1k21c.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri);

  await client.connect();
  const db = client.db("primecluster");
  const foodCollection = db.collection("foodCollection");

  // Insert the document into the collection
  const result = await foodCollection.insertOne(veggie);
  await client.close();
}

main().catch(console.error);

// Searching for items

// lets say the uesr wants high protein

// 1 ounce = 28 grams
