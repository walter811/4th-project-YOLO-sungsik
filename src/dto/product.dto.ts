interface OptionDto {
  name: string;
  price: number;
  quantity: number;
}

interface AddProductDto {
  name: string;
  purchaseNation: string;
  description: string;
  shippingInfo: string;
  option: OptionDto[];
  image: string;
  category: string;
  orderDeadline: Date;
}

export { OptionDto, AddProductDto };
