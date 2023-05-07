// imports all functions from connection.js
// const connection = require("./connection.js");
const {
  findItemsFromProtein,
  findItemsFromCarbs,
  findItemsFromFat,
  findItemFrom,
  listDatabases,
} = require("./connection.js");
require("dotenv").config();
const { MongoClient } = require("mongodb");

async function main() {
  const uri =
    "mongodb+srv://heap:Dv8cVvNATO7XIR3j@primecluster.lh1k21c.mongodb.net/?retryWrites=true&w=majority ";
  const client = new MongoClient(uri);
  try {
    await client.connect();
    // put code here

    // today's nutrients
    const nutrients = [50, 30, 20]; // assume andrew returns an array (protein, carb, fat) in gramss
    const proteinAmount = nutrients[0] / 3;
    const carbAmount = nutrients[1] / 3;
    const fatAmount = nutrients[2] / 3;

    // make sure to use connection object (declared at the very beginning, basically instantiated the class connection.js)
    await findItemsFromProtein(client, proteinAmount);
    await findItemsFromCarbs(client, carbAmount);
    await findItemsFromFat(client, fatAmount);
    await findItemFrom(client, "Beef");
    await listDatabases(client);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

main().catch(console.error);
