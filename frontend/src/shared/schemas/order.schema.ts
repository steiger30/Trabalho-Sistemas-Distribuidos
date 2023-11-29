import * as yup from 'yup';

export const OrderSchema = yup.object().shape({
  name: yup.string(),
  description: yup.string(),
  quantity: yup.number(),
  productId: yup.string(),
});