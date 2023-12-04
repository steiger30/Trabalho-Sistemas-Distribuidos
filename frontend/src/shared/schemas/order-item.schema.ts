import * as yup from 'yup';

export const OrderItemSchema = yup.object().shape({
  descriptionProduct: yup.string(),
  nameProduct: yup.string(),
  quantity: yup.number(),
  productId: yup.string(),
  price: yup.number().required(),
});