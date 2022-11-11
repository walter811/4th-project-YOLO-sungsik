import Product from "../schemas/product.schema";
import Market from "../schemas/market.schema";

//Schema hasn't been registered for model "Market" 에러 해결을 위해 선언
const market = Market;

const getAllProduct = async (sortBy: string, skip: number) => {
  return await Product.find({})
    .populate("seller")
    .populate("category")
    .sort({ [sortBy]: sortBy === "createdAt" ? -1 : 1 })
    .limit(60)
    .skip(skip);
};

const getProductByCategory = async (
  mainCategory: string | [] | undefined,
  subCategory: string | [] | undefined,
  purchaseNation: string | [] | undefined,
  sortBy: string,
  skip: number
) => {
  if (!purchaseNation) {
    const rawData = await Product.find({ deletedAt: null })
      .populate({
        path: "category",
        match: {
          $or: [
            { mainCategory: { $in: mainCategory } },
            { subCategory: { $in: subCategory } },
          ],
        },
      })
      .populate("seller")
      .sort({ [sortBy]: sortBy === "createdAt" ? -1 : 1 })
      .limit(60)
      .skip(skip);
    let result = [];
    for (let i in rawData) {
      if (rawData[i].category !== null) {
        result.push(rawData[i]);
      }
    }
    return result;
  } else {
    if (!mainCategory && !subCategory) {
      const result = await Product.find({
        purchaseNation: { $in: purchaseNation },
        deletedAt: null,
      })
        .populate("category")
        .populate("seller")
        .sort({ [sortBy]: sortBy === "createdAt" ? -1 : 1 })
        .limit(60)
        .skip(skip);
      return result;
    } else {
      const rawData = await Product.find({
        purchaseNation: { $in: purchaseNation },
        deletedAt: null,
      })
        .populate({
          path: "category",
          match: {
            $or: [
              { mainCategory: { $in: mainCategory } },
              { subCategory: { $in: subCategory } },
            ],
          },
        })
        .populate("seller")
        .sort({ [sortBy]: sortBy === "createdAt" ? -1 : 1 })
        .limit(60)
        .skip(skip);
      console.log(rawData);
      let result = [];
      for (let i in rawData) {
        if (rawData[i].category !== null) {
          result.push(rawData[i]);
        }
      }
      return result;
    }
  }
};

const searchProduct = async (search: string, sortBy: string, skip: number) => {
  return await Product.find({ name: { $regex: search, $options: "i" } })
    .populate("seller")
    .populate("category")
    .sort({ [sortBy]: sortBy === "createdAt" ? -1 : 1 })
    .limit(60)
    .skip(skip);
};

const getProductDetail = async (productId: number) => {
  return await Product.find({ id: productId })
    .populate("seller")
    .populate("category");
};

export { getAllProduct, getProductByCategory, searchProduct, getProductDetail };
