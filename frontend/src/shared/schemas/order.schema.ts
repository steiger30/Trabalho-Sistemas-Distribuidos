import * as yup from 'yup';

export const OrderSchema = yup.object().shape({
  nameCustomer: yup.string().required("obrigatorio"),
  description: yup.string(),
  
});