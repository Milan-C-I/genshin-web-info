import { MongoClient } from "mongodb";
// import { NextApiRequest, NextApiResponse } from "next";

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
        const characters = JSON.parse(JSON.stringify(await collection.find({region: r}).toArray()));
        return characters;
    } catch (error) {
        console.error("Error fetching characters:", error);
    }
}
