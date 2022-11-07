import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import morgan from "morgan";
import { router } from "./routes/index.routes";
import { connect } from "./schemas/index.schema";

connect();
const app = express();
app.use(express.json());
app.use(cors());
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);
app.use(router);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Listening to request on 127.0.0.1:${port}`);
});
