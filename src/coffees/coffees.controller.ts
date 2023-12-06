import { Controller, Get } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll() {
    return 'This is to return all coffees.';
  }
  @Get('flavours')
  findFlavours() {
    return 'Espresso, Latte, etc.';
  }
}
