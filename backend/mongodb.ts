import { MongoClient } from "mongodb";
// import { NextApiRequest, NextApiResponse } from "next";

let client: MongoClient = new MongoClient(process.env.MONGO_URI!);
let connected = false;
await connect();
const db = client.db("genshin-web-info");
const collection = db.collection("characters");
// let clientPromise: MongoClient | null = null;

// if (!clientPromise) {
//     client = new MongoClient(process.env.MONGO_URI!);
//     clientPromise = await client.connect();
// }

// async function connect() {
//     if (!clientPromise) {
//         throw new Error("MongoDB connection is not initialized.");
//     }
//     return clientPromise;
// }
async function connect(){
    if(!connected){
        await client?.connect();
        connected = true;
    }
    // return client;
}
export async function getCharacters() {
    try {
        // const client = await connect();

        //  await connect();

        // const db = client.db("genshin-web-info");
        // const collection = db.collection("characters");

        // const characters = JSON.parse(JSON.stringify(await collection.find({region: "Liyue"}).toArray()));
        // return characters;
        return null;
    } catch (error) {
        console.error("Error fetching characters:", error);
    }
}
export async function getCharactersByMondstadt(){
    try{
        // const client = await connect();
        // const db = client.db("genshin-web-info");
        // const collection = db.collection("characters");
        await connect();
        const characters = JSON.parse(JSON.stringify(await collection.find({region: "Mondstadt"}).toArray()));
        return characters
    }catch(error){
        console.error("Error fetching characters:", error);
    }
}
export async function getCharactersByLiyue(){
    try{
        // const client = await connect();
        // const db = client.db("genshin-web-info");
        // const collection = db.collection("characters");
        await connect();
        const characters = JSON.parse(JSON.stringify(await collection.find({region: "Liyue"}).toArray()));
        return characters
    }catch(error){
        console.error("Error fetching characters:", error);
    }
}
export async function getCharactersByInazuma(){
    try{
        // const client = await connect();
        // const db = client.db("genshin-web-info");
        // const collection = db.collection("characters");
        await connect();
        const characters = JSON.parse(JSON.stringify(await collection.find({region: "Inazuma"}).toArray()));
        return characters
    }catch(error){
        console.error("Error fetching characters:", error);
    }
}
export async function getCharactersBySumeru(){
    try{
        // const client = await connect();
        // const db = client.db("genshin-web-info");
        // const collection = db.collection("characters");
        await connect();
        const characters = JSON.parse(JSON.stringify(await collection.find({region: "Sumeru"}).toArray()));
        return characters
    }catch(error){
        console.error("Error fetching characters:", error);
    }
}
export async function getCharactersByFontaine(){
    try{
        // const client = await connect();
        // const db = client.db("genshin-web-info");
        // const collection = db.collection("characters");
        await connect();
        const characters = JSON.parse(JSON.stringify(await collection.find({region: "Fontaine"}).toArray()));
        return characters
    }catch(error){
        console.error("Error fetching characters:", error);
    }
}
export async function getCharactersByNatlan(){
    try{
        // const client = await connect();
        // const db = client.db("genshin-web-info");
        // const collection = db.collection("characters");
        await connect();
        const characters = JSON.parse(JSON.stringify(await collection.find({region: "Natlan"}).toArray()));
        return characters
    }catch(error){
        console.error("Error fetching characters:", error);
    }
}