//  ----------------------------------------------------- IMPORTS
import { MongoClient } from "mongodb";

//  ----------------------------------------------------- ENV VARIABLES
const URI = process.env.MONGO_URI;
const DB = process.env.MONGO_DB;

//  ----------------------------------------------------- NEW CLIENT
const client = new MongoClient(URI);
let db;

//  ----------------------------------------------------- DB CONNECT
export const getDb = async () => {
  if (db) return db;
  else {
    await client.connect();
    db = client.db(DB);
    return db;
  }
};

//  ----------------------------------------------------- DB FUNCTIONS (CRUD)

//  ----------------------------------------------------- ENV VARIABLE
const COL = process.env.COLLECTION;

//  ----------------------------------------------------- GET FRIENDS
export const getFriends = async (req, res) => {
  const db = await getDb();
  const result = await db.collection(COL).find({}).toArray();
  if (result) return res.status(200).json(result);
  else {
    return res.status(500).end();
  }
};

//  ----------------------------------------------------- ADD FRIEND
export const addFriend = async (req, res) => {
  const db = await getDb();
  const result = await db.collection(COL).find({}).toArray();
  if (result) return res.status(200).json(result);
  else {
    return res.status(500).end();
  }
};
