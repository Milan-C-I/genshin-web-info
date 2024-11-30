import { MongoClient } from "mongodb";
// import { NextApiRequest, NextApiResponse } from "next";

let archon = ["Venti","Zhongli","Raiden Shogun","Nahida","Neuvillette"];

let client: MongoClient = new MongoClient(process.env.MONGO_URI!);
let connected = false;
await connect();
const db = client.db("genshin-web-info");
const collection = db.collection("characters");
async function connect(){
    try{
      if(!connected){
        connected = true;
        await client?.connect();
    }
    }catch(error){
      connected = false;
    }
}
export async function getCharactersByRegion(r?:string) {
    try {
        const characters = JSON.parse(JSON.stringify(await collection.find({region: r}).sort({name:1}).toArray()));
        return characters;
    } catch (error) {
        console.error("Error fetching characters:", error);
    }
}

export async function getCharacterByName(n?:string) {
    try {
        const character = await collection.findOne({name: n});
        return character;
    } catch (error) {
        console.error("Error fetching characters:", error);
    }
}
export async function getArchons() {
    try{
        const archons = JSON.parse(JSON.stringify(await collection.aggregate([
            {
              $match: {
                name: { $in: archon },
              },
            },
            {
              $addFields: {
                order: {
                  $indexOfArray: [archon, "$name"],
                },
              },
            },
            {
              $sort: { order: 1 },
            },
            {
              $project: {
                order: 0,
              },
            },
          ]).toArray()));
        return archons;
    }
    catch (error) {
        console.error("Error fetching archons:", error);
    }
}