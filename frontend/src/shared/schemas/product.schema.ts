import * as yup from 'yup';

export const ProductSchema = yup.object().shape({
  name: yup.string().required('Nome do produto é obrigatório.'),
  price: yup.number() 
  .typeError('O preço deve ser um número')
  .max(1000, 'O preço deve ser no máximo 1000')
  .positive('O preço deve ser um número positivo')
  .required('O preço é obrigatório'),
  description: yup.string().max(120, 'A descrição deve ter no máximo 120 caracteres.'),
});