import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('products')

// eslint-disable-next-line import/prefer-default-export
export class ProductsController {
  @Get()
  getAll(): string {
		return 'getAll';
  }

  @Get(':id')
  getOne(@Param('id') id: string): string {
    return `getOne${id}`;
  }

  @Post()
  create() {}

  @Delete()
  delete() {}

  @Put()
  put() {}
}
