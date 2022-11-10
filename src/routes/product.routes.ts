import express from "express";
import * as productController from "../controllers/product.controller";
import { loginRequired } from "../middlewares/authorization.middleware";
import { asyncWrap } from "../middlewares/errorHandler.middlewares";

const productRouter = express.Router();

productRouter.post("", loginRequired, asyncWrap(productController.addProduct));
productRouter.patch(
  "",
  loginRequired,
  asyncWrap(productController.updateProduct)
);
productRouter.delete(
  "",
  loginRequired,
  asyncWrap(productController.deleteProduct)
);

export { productRouter };
