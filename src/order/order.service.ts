import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from '../users/users.model';
import { Order } from './order.model';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel(Order)
    private orderRepository: typeof Order,
  ) {}

  async getAll(): Promise<Order[]> {
    return this.orderRepository.findAll({ include: { all: true } });
  }

  async getById(id: number): Promise<Order> {
    return this.orderRepository.findByPk(id);
  }

  async create(dto: CreateOrderDto) {
    const newOrder = await this.orderRepository.create(dto);
    return newOrder;
  }

  async remove(id: number): Promise<void> {
    const order = await this.getById(id);
    await order.destroy();
  }

  async update(id: number, dto: UpdateOrderDto) {
    const user = await this.getById(id);
    return user.update(dto);
  }
}
