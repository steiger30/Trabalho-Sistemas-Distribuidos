import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrderRepository } from './repositories/order.repository';
import { OrderItemRepository } from './repositories/order-item.ropository';
import { ProductRepository } from 'src/product/repositories/product.repository';
import { CreateOrderItemDto } from './dto/create-order-item.dto';

@Injectable()
export class OrderService {
  constructor(
    private readonly orderRepository: OrderRepository,
    private readonly orderItemRepository: OrderItemRepository,
    private readonly productRepository: ProductRepository
  ) { }

  async create(createOrderDto: CreateOrderDto): Promise<string> {
    try {
      const { nameCustomer, discription, items } = createOrderDto;
      const productInItems = [];

      for (const orderItem of items) {
        const { quantity, productId } = orderItem;
        const product = await this.getProduct(productId);
        productInItems.push(quantity * product.price);
      }

      const priceOrder = productInItems.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      }, 0);

      const order = await this.orderRepository.create({ nameCustomer, discription, price: priceOrder });

      if (!order) {
        throw new Error('Failed to create order');
      }

      for (const customer of items) {    
        this.createOrder({ quantity: customer.quantity, productId: customer.productId, orderId: order.id })
      }

      return 'Order placed successfully';
    } catch (error) {
      console.error('Error creating order:', error);
      throw new Error('Failed to create order');
    }
  }
  async createOrder(createOrderDto: CreateOrderItemDto): Promise<CreateOrderItemDto> {
    const listOrder = await this.orderItemRepository.create(createOrderDto);

    if (!listOrder) {
      throw new Error('Failed to create order item');
    }
    return listOrder
  }

  remove(id: string) {
    return this.orderRepository.remove(id);
  }
  getProduct(productIdid: string) {
    return this.productRepository.findOne(productIdid)
  }
}
