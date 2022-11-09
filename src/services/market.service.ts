import Product from "../schemas/product.schema";

const getAllProduct = async (sortBy: string, skip: number) => {
  return await Product.find({})
    .populate("seller")
    .populate("category")
    .sort({ [sortBy]: sortBy === "createdAt" ? -1 : 1 })
    .limit(60)
    .skip(skip);
};

const getProductByCategory = async (
  category: string,
  subCategory: string | undefined,
  sortBy: string,
  skip: number
) => {
  if (!subCategory) {
    return await Product.find({ category: { mainCategory: category } })
      .populate("seller")
      .populate("category")
      .sort({ [sortBy]: sortBy === "createdAt" ? -1 : 1 })
      .limit(60)
      .skip(skip);
  } else {
    return await Product.find({
      category: { mainCategory: category, subCategory: subCategory },
    })
      .populate("seller")
      .populate("category")
      .sort({ [sortBy]: sortBy === "createdAt" ? -1 : 1 })
      .limit(60)
      .skip(skip);
  }
};

const getProductByNationality = async (
  nationality: string,
  sortBy: string,
  skip: number
) => {
  return await Product.find({ seller: { nationality: nationality } })
    .populate("seller")
    .populate("category")
    .sort({ [sortBy]: sortBy === "createdAt" ? -1 : 1 })
    .limit(60)
    .skip(skip);
};

const searchProduct = async (search: string, sortBy: string, skip: number) => {
  return await Product.find({
    $or: [
      { name: { $regex: search, $options: "i" } },
      { seller: { nationality: { $regex: search, $options: "i" } } },
      { category: { mainCategory: { $regex: search, $options: "i" } } },
      { category: { subCategory: { $regex: search, $options: "i" } } },
    ],
  })
    .populate("seller")
    .populate("category")
    .sort({ [sortBy]: sortBy === "createdAt" ? -1 : 1 })
    .limit(60)
    .skip(skip);
};

const getProductDetail = async (productId: number) => {
  return await Product.find({ _id: productId })
    .populate("seller")
    .populate("category");
};

export {
  getAllProduct,
  getProductByCategory,
  getProductByNationality,
  searchProduct,
  getProductDetail,
};
