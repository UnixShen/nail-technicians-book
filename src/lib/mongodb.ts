import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI!;
const options = { maxPoolSize: 10 };

// Edge Runtime doesn't support global variables, so we initialize a new client for each request
const clientPromise: Promise<MongoClient> = new MongoClient(uri, options).connect();

export default clientPromise;