import { MongoClient } from "mongodb";
// import { NextApiRequest, NextApiResponse } from "next";

let client: MongoClient;

async function connect() {
    if (!client) {  
        client = new MongoClient(process.env.MONGO_URI!);
        await client.connect();
    }
    return client;
}
export async function getCharacters(){
    try{
        const client = await connect();
        const db = client.db("genshin-web-info");
        const collection = db.collection("characters");
        // const characters = await collection.find({region: "Liyue"}).toArray();
        // return characters.map((char) => ({
        //     ...char,
        //     _id: char._id.toString(),
        // }));
        const characters = JSON.parse(JSON.stringify(await collection.find({region: "Liyue"}).toArray()));
        return characters
    }catch(error){
        console.error("Error fetching characters:", error);
    }
}