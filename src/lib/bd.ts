import { Low, JSONFile } from "lowdb";
import { resolve } from "path";

const file = resolve("bd.json");

const adapter = new JSONFile(file);

const db = new Low(adapter);

db.data ||= { posts: [] };



export default db;
