import { MongoClient } from "mongodb";
// import { NextApiRequest, NextApiResponse } from "next";

let client: MongoClient;

async function connect() {
    if (!client) {
        client = new MongoClient("mongodb://localhost:27017");
        await client.connect();
    }
    return client;
}

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//     try {
//         const client = await connect();
//         const db = client.db("genshin-web-info");
//         const collection = db.collection("characters");
//         const characters = await collection.find({}).toArray();
//         res.status(200).json(characters);
//     } catch (error) {
//         console.error("Error fetching characters:", error);
//         res.status(500).json({ message: "Internal Server Error" });
//     }
// }
export async function getCharacters(){
    try{
        const client = await connect();
        const db = client.db("genshin-web-info");
        const collection = db.collection("characters");
        const characters = await collection.find({}).toArray();
        return characters;
    }catch(error){
        console.error("Error fetching characters:", error);
    }
}