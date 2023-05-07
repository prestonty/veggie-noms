// imports all functions from connection.js
// const connection = require("./connection.js");
const {
  findItemsFromProtein,
  findItemsFromCarbs,
  findItemsFromFat,
  findItemFrom,
  listDatabases,
} = require("./connection.js");
const {
  getMeasurements,
} = require("./algorithms.js");
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
    const farr = getMeasurements(150,170,19,true,0); // assume andrew returns an array (protein, carb, fat) in gramss

    proteinAmount =farr[0];
    carbAmount =farr[1];
    fatAmount =farr[2];

    console.log(proteinAmount+" "+carbAmount+" "+fatAmount);
    // make sure to use connection object (declared at the very beginning, basically instantiated the class connection.js)



    foods = new Array(6);

    proteins = await findItemsFromProtein(client, (proteinAmount/3)*(0.2 + Math.random()*0.3));
    //console.log(proteins);
    foods[0] = proteins[Math.round(Math.random()*(proteins.length-1))];
    proteinAmount-=foods[0].protein;
    carbAmount-=foods[0].carbs;
    fatAmount-=foods[0].fat;
    if (proteinAmount<0){
      proteinAmount=0;
    }
    if (carbAmount<0){
      proteinAmount=0;
    }
    if (fatAmount<0){
      proteinAmount=0;
    }

    proteins = await findItemsFromProtein(client, (proteinAmount/3-foods[0].protein));
    foods[1] = proteins[Math.round(Math.random()*(proteins.length-1))];
    proteinAmount-=foods[1].protein;
    carbAmount-=foods[1].carbs;
    fatAmount-=foods[1].fat;
    if (proteinAmount<0){
      proteinAmount=0;
    }
    if (carbAmount<0){
      proteinAmount=0;
    }
    if (fatAmount<0){
      proteinAmount=0;
    }

    carbs = await findItemsFromCarbs(client, (carbAmount/2)*(0.2 + Math.random()*0.3));
    foods[2] = carbs[Math.round(Math.random()*(carbs.length-1))];
    proteinAmount-=foods[2].protein;
    carbAmount-=foods[2].carbs;
    fatAmount-=foods[2].fat;
    if (proteinAmount<0){
      proteinAmount=0;
    }
    if (carbAmount<0){
      proteinAmount=0;
    }
    if (fatAmount<0){
      proteinAmount=0;
    }

    carbs = await findItemsFromCarbs(client, (carbAmount/2-foods[2].carbs));
    foods[3] = carbs[Math.round(Math.random()*(carbs.length-1))];
    proteinAmount-=foods[3].protein;
    carbAmount-=foods[3].carbs;
    fatAmount-=foods[3].fat;
    if (proteinAmount<0){
      proteinAmount=0;
    }
    if (carbAmount<0){
      proteinAmount=0;
    }
    if (fatAmount<0){
      proteinAmount=0;
    }

    fats = await findItemsFromFat(client, (fatAmount)*(0.2 + Math.random()*0.3));
    foods[4] = fats[Math.round(Math.random()*(fats.length-1))];
    proteinAmount-=foods[4].protein;
    carbAmount-=foods[4].carbs;
    fatAmount-=foods[4].fat;
    if (proteinAmount<0){
      proteinAmount=0;
    }
    if (carbAmount<0){
      proteinAmount=0;
    }
    if (fatAmount<0){
      proteinAmount=0;
    }

    fats = await findItemsFromFat(client, (fatAmount-foods[4].carbs));
    foods[5] = fats[Math.round(Math.random()*(fats.length-1))];
    proteinAmount-=foods[5].protein;
    carbAmount-=foods[5].carbs;
    fatAmount-=foods[5].fat;
    if (proteinAmount<0){
      proteinAmount=0;
    }
    if (carbAmount<0){
      proteinAmount=0;
    }
    if (fatAmount<0){
      proteinAmount=0;
    }
    
    console.log(foods);
    
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

main().catch(console.error);
