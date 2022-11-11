import { AddProductDto } from "../dto/product.dto";
import { ErrorConstructor as error } from "../middlewares/errorConstructor.middleware";
import Product from "../schemas/product.schema";

const getProductById = async (id: string) => {
  const product = await Product.findOne({ id: id });
  return product;
};

const addProduct = async (userId: string, data: AddProductDto) => {
  return await Product.create({
    name: data.name,
    purchaseNation: data.purchaseNation,
    description: data.description,
    shippingInfo: data.shippingInfo,
    seller: userId,
    option: data.option,
    image: data.image,
    category: data.category,
    orderDeadline: data.orderDeadline,
  });
};

const updateProduct = async (
  userId: string,
  productId: string,
  data: AddProductDto
) => {
  const product = await getProductById(productId);
  if (!product) {
    throw new error("INVALID_PRODUCT", 404);
  }
  return await Product.findOneAndUpdate(
    { id: productId, seller: userId, deletedAt: null },
    {
      $set: {
        name: data.name,
        purchaseNation: data.purchaseNation,
        description: data.description,
        shippingInfo: data.shippingInfo,
        seller: userId,
        option: data.option,
        image: data.image,
        category: data.category,
        orderDeadline: data.orderDeadline,
      },
    }
  );
};

const deleteProduct = async (productId: string) => {
  const product = await getProductById(productId);
  if (!product) {
    throw new error("INVALID_PRODUCT", 404);
  }
  const now = new Date();
  return await Product.findOneAndUpdate(
    { id: productId, deletedAt: null },
    { $set: { deletedAt: now } }
  );
};

export { addProduct, updateProduct, deleteProduct };
