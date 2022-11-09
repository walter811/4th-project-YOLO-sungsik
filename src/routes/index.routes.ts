import express from "express";
import { marketRouter } from "./market.routes";
import { userRouter } from "./user.routes";
import { productRouter } from "./product.routes";

const router = express.Router();

router.use("/api/user", userRouter);
router.use("/api/market", marketRouter);
router.use("/api/product", productRouter);

export { router };
