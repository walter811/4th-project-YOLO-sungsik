export interface SignInDto {
  email: string;
  password: string;
}

export interface SignUpDto {
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  nationality: string;
}

export interface UpdateDto {
  name: string;
  password: string;
  phoneNumber: string;
  nationality: string;
}

export interface SellerDto {
  name: string;
  account: string;
}
