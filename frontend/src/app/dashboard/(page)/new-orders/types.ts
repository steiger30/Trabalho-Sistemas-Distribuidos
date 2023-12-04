export type Option = {
  value: string,
  label: string,
  description: string,
  price: number,
}

export type Producto = {
  id: string,
  name: string,
  description: string,
  price: number,

}

export type OrderSelect = {
  productId: string;
  description: string;
  name: string;
  price: number;
  quantity: number;
  totalPrice: number;
}

