export interface Supermarket {
  id: string;
  name: string;
  logo: string;
  rating: number;
  totalRating: number;
  isOpen: boolean;
  minimumOrder: number;
  // deliveryTime: string;
  featured: boolean;
}

export interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  promoPrice?: number;
  unit: string;
  category: string;
  subcategory: string;
  supermarketId: string;
}

export interface Subcategory {
  id: string;
  name: string;
  icon?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Address {
  id: string;
  street: string;
  number: string;
  neighborhood: string;
  reference?: string;
  isDefault: boolean;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  phone: string;
  photo?: string;
  addresses: Address[];
}

export type OrderStatus =
  | "enviado"
  | "aceito"
  | "preparo"
  | "saiu"
  | "entregue"
  | "cancelado";

export type PaymentMethod = "dinheiro" | "pix" | "cartao";

export interface Order {
  id: string;
  supermarket: Supermarket;
  items: CartItem[];
  total: number;
  status: OrderStatus;
  paymentMethod: PaymentMethod;
  createdAt: Date;
  address: Address;
}
