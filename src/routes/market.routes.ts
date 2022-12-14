import express from "express";
import * as marketController from "../controllers/market.controller";
import { asyncWrap } from "../middlewares/errorHandler.middlewares";

const marketRouter = express.Router();

marketRouter.get("", asyncWrap(marketController.getAllProduct));
marketRouter.get("/category", asyncWrap(marketController.getProductByCategory));
marketRouter.get("/search", asyncWrap(marketController.searchProduct));
marketRouter.get("/:productId", asyncWrap(marketController.getProductDetail));

export { marketRouter };
