import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Inject,
  LoggerService,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrderService } from './order.service';
import { UpdateOrderDto } from './dto/update-order.dto';
import { BannedUserGuard } from '../auth/bannedUser.guard';
import { Roles } from '../auth/roles-auth.decorator';
import { RolesGuard } from '../auth/roles.guard';

@UseGuards(BannedUserGuard)
@Controller('order')
export class OrderController {
  constructor(
    private readonly orderService: OrderService,
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,
  ) {}

  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Get()
  getAll() {
    try {
      this.logger.log('Getting all orders');
      return this.orderService.getAll();
    } catch (e) {
      this.logger.error('Error while getting all orders');
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: e,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Get(':id')
  getOne(@Param('id') id: number) {
    try {
      this.logger.log(`Getting order with id ${id}`);
      return this.orderService.getById(id);
    } catch (e) {
      this.logger.error(`Error while getting order with id ${id}`);
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: e,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() dto: CreateOrderDto) {
    try {
      this.logger.log('Creating new order ');
      return this.orderService.create(dto);
    } catch (e) {
      this.logger.error('Error while creating new order');
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: e,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    try {
      this.logger.log(`Deleting order with id ${id}`);
      return this.orderService.remove(id);
    } catch (e) {
      this.logger.error(`Error while deleting order with id ${id}`);
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: e,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Put(':id')
  update(@Body() dto: UpdateOrderDto, @Param('id') id: number) {
    try {
      this.logger.log(`Updating order with id ${id}`);
      return this.orderService.update(id, dto);
    } catch (e) {
      this.logger.error(`Error while updating order with id ${id}`);
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: e,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
