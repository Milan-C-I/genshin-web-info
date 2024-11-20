import { MongoClient } from "mongodb";
// import { NextApiRequest, NextApiResponse } from "next";

let client: MongoClient;

async function connect() {
    if (!client) {  
        client = new MongoClient(process.env.MONGO_URI as string);
        await client.connect();
    }
    return client;
}
export async function getCharacters(){
    try{
        const client = await connect();
        const db = client.db("genshin-web-info");
        const collection = db.collection("characters");
        const characters = await collection.find({region: "Liyue"}).toArray();
        return characters.map((char) => ({
            ...char,
            _id: char._id.toString(), // Convert ObjectId to string
        }));
    }catch(error){
        console.error("Error fetching characters:", error);
    }
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