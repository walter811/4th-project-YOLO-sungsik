import { RequestHandler } from "express";
import { ErrorConstructor as error } from "../middlewares/errorConstructor.middleware";
import * as marketService from "../services/market.service";

const getAllProduct: RequestHandler = async (req, res) => {
  const sortBy: string = req.query.sortBy as string;
  const skip: string = req.query.skip as string;
  if (sortBy !== "createdAt") {
    if (sortBy !== "orderDeadline") {
      throw new error("KEY_ERROR", 400);
    }
  }
  const productList = await marketService.getAllProduct(sortBy, +skip);
  res.status(200).json({ productList });
};

const getProductByCategory: RequestHandler = async (req, res) => {
  const mainCategory: string | [] | undefined = req.query
    .mainCategory as string;
  const subCategory: string | [] | undefined = req.query.subCategory as string;
  const purchaseNation: string | [] | undefined = req.query
    .purchaseNation as string;
  const sortBy: string = req.query.sortBy as string;
  const skip: string = req.query.skip as string;
  if (!mainCategory && !subCategory && !purchaseNation) {
    throw new error("KEY_ERROR", 400);
  }
  if (!sortBy || !skip) {
    throw new error("KEY_ERROR", 400);
  }
  if (sortBy !== "createdAt") {
    if (sortBy !== "orderDeadline") {
      throw new error("KEY_ERROR", 400);
    }
  }
  const productList = await marketService.getProductByCategory(
    mainCategory,
    subCategory,
    purchaseNation,
    sortBy,
    +skip
  );
  res.status(200).json({ productList });
};

const searchProduct: RequestHandler = async (req, res) => {
  const search: string = req.query.search as string;
  const sortBy: string = req.query.sortBy as string;
  const skip: string = req.query.skip as string;
  if (sortBy !== "createdAt") {
    if (sortBy !== "orderDeadline") {
      throw new error("KEY_ERROR", 400);
    }
  }
  const productList = await marketService.searchProduct(search, sortBy, +skip);
  res.status(200).json({ productList });
};

const getProductDetail: RequestHandler = async (req, res) => {
  const { productId } = req.params;
  const productDetail = await marketService.getProductDetail(+productId);
  res.status(200).json({ productDetail });
};

export { getAllProduct, getProductByCategory, searchProduct, getProductDetail };
