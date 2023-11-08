import { MongoClient } from "mongodb";

const uri = "mongodb+srv://niranjandhg:Niranjan2002@cluster0.axwzr7k.mongodb.net/";

const client = new MongoClient(uri);

async function connectToMongoDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (e) {
    console.error(e);
  }
}

connectToMongoDB().catch(console.error);
export const db = client.db("Marketplace");
