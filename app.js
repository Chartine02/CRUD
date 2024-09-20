import express from "express";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import route from "./routes/routes.js";

const app = express();

app.use(express.json());
app.use("/items", route);

const db_connection_string = process.env.MONGODB_URI;
const port = process.env.PORT || 3000;

mongoose
  .connect(db_connection_string)
  .then(() => {
    console.log("connected to DB💃💃...");
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((err) => console.log(err));
