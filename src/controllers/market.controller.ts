import { RequestHandler } from "express";
import { ErrorConstructor as error } from "../middlewares/errorConstructor.middleware";
import * as marketService from "../services/market.service";

const getAllProduct: RequestHandler = async (req, res) => {
  const sortBy: string = req.query.sortBy as string;
  const skip: string = req.query.skip as string;
  if (sortBy !== "createdAt" || "orderDeadline") {
    throw new error("KEY_ERROR", 400);
  }
  const productList = await marketService.getAllProduct(sortBy, +skip);
  res.status(200).json({ productList });
};

const getProductByCategory: RequestHandler = async (req, res) => {
  const category: string = req.query.category as string;
  const subCategory: string = req.query.category as string;
  const sortBy: string = req.query.sortBy as string;
  const skip: string = req.query.skip as string;
  if (sortBy !== "createdAt" || "orderDeadline") {
    throw new error("KEY_ERROR", 400);
  }
  const productList = await marketService.getProductByCategory(
    category,
    subCategory,
    sortBy,
    +skip
  );
  res.status(200).json({ productList });
};

const getProductByNationality: RequestHandler = async (req, res) => {
  const nationality: string = req.query.nationality as string;
  const sortBy: string = req.query.sortBy as string;
  const skip: string = req.query.skip as string;
  if (sortBy !== "createdAt" || "orderDeadline") {
    throw new error("KEY_ERROR", 400);
  }
  const productList = await marketService.getProductByNationality(
    nationality,
    sortBy,
    +skip
  );
  res.status(200).json({ productList });
};

const searchProduct: RequestHandler = async (req, res) => {
  const search: string = req.query.search as string;
  const sortBy: string = req.query.sortBy as string;
  const skip: string = req.query.skip as string;
  if (sortBy !== "createdAt" || "orderDeadline") {
    throw new error("KEY_ERROR", 400);
  }
  const productList = await marketService.searchProduct(search, sortBy, +skip);
  res.status(200).json({ productList });
};

const getProductDetail: RequestHandler = async (req, res) => {
  const { productId } = req.params;
  const productDetail = await marketService.getProductDetail(+productId);
  res.status(200).json({ productDetail });
};

export {
  getAllProduct,
  getProductByCategory,
  getProductByNationality,
  searchProduct,
  getProductDetail,
};
