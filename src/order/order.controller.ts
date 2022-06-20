import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrderService } from './order.service';
import { UpdateOrderDto } from './dto/update-order.dto';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get()
  getAll() {
    return this.orderService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.orderService.getById(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() dto: CreateOrderDto) {
    return this.orderService.create(dto);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.orderService.remove(id);
  }

  @Put(':id')
  update(@Body() dto: UpdateOrderDto, @Param('id') id: number) {
    return this.orderService.update(id, dto);
  }
}