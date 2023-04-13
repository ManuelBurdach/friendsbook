//  ----------------------------------------------------- IMPORTS
import express from "express";
import cors from "cors";
import "./util/dotenvConfig.js";
import morgan from "morgan";
import { getFriends, addFriend } from "./util/dbConfig.js";

//  ----------------------------------------------------- CONST
const PORT = process.env.PORT || 9001;
const API_VERSION = process.env.API_VERSION || "/api/v2/";
const FRONTEND = process.env.FRONTEND || "http://localhost:5173";

//  ----------------------------------------------------- EXPRESS SERVER
const app = express();

// ----------------------------------------------------- Middleware (Morgan-Log)
app.use(morgan("dev"));
// ----------------------------------------------------- Middleware (PARSER)
app.use(express.json());
// ----------------------------------------------------- Middleware(CORS-access-control-allow-origin)
app.use(cors({ origin: FRONTEND }));

// ----------------------------------------------------- Routes GET
app.get(API_VERSION + "friends", getFriends);

// ----------------------------------------------------- Routes POST
app.post(API_VERSION + "friends", addFriend);

// ----------------------------------------------------- ServerPORT listen
app.listen(PORT, () => console.log("Server listen on port:", PORT));
