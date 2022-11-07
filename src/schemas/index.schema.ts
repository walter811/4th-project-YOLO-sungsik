import * as dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

const connect = () => {
  mongoose.connect(
    `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@127.0.0.1:27017/admin`,
    { dbName: process.env.DB_NAME },
    (error) => {
      if (error) {
        console.log("mongoDB connection error");
      } else {
        console.log("mongoDB connection success");
      }
    }
  );
};

mongoose.connection.on("error", (error) => {
  console.error("mongoDB connection error", error);
});
mongoose.connection.on("disconnected", () => {
  console.error("reconnecting...");
  connect();
});

export { connect };
