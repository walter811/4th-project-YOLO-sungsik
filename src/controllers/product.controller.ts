import { RequestHandler } from "express";
import { AddProductDto } from "../dto/product.dto";
import { ErrorConstructor as error } from "../middlewares/errorConstructor.middleware";
import * as productService from "../services/product.service";

const addProduct: RequestHandler = async (req, res) => {
  const userId = req.user?.id as string;
  const seller = req.user?.seller;
  const data: AddProductDto = req.body;
  if (!seller) {
    throw new error("NEED_SELLER_REGISTRATION", 400);
  }
  if (!data) {
    throw new error("KEY_ERROR", 400);
  }
  await productService.addProduct(userId, data);
  res.status(201).json({ message: "Product registered" });
};

const updateProduct: RequestHandler = async (req, res) => {
  const userId = req.user?.id as string;
  const productId: string = req.query.productId as string;
  const data: AddProductDto = req.body;
  if (!data) {
    throw new error("KEY_ERROR", 400);
  }
  await productService.updateProduct(userId, productId, data);
  res.status(204).send();
};

const deleteProduct: RequestHandler = async (req, res) => {
  const productId: string = req.query.productId as string;
  await productService.deleteProduct(productId);
  res.status(204).send();
};

export { addProduct, updateProduct, deleteProduct };
