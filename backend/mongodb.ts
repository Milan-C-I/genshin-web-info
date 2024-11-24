import { MongoClient } from "mongodb";
// import { NextApiRequest, NextApiResponse } from "next";

let archon = ["Venti","Zhongli","Raiden Shogun","Nahida","Neuvillette"];

let client: MongoClient = new MongoClient(process.env.MONGO_URI!);
let connected = false;
await connect();
const db = client.db("genshin-web-info");
const collection = db.collection("characters");
async function connect(){
    if(!connected){
        await client?.connect();
        connected = true;
    }
}
export async function getCharacters(r?:string) {
    try {
        const characters = JSON.parse(JSON.stringify(await collection.find({region: r}).sort({character_name:1}).toArray()));
        return characters;
    } catch (error) {
        console.error("Error fetching characters:", error);
    }
}

export async function getArchons() {
    try{
        const archons = JSON.parse(JSON.stringify(await collection.aggregate([
            {
              $match: {
                character_name: { $in: archon },
              },
            },
            {
              $addFields: {
                order: {
                  $indexOfArray: [archon, "$character_name"],
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