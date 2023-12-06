import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '<h1>Hello Sumit!<h1><p>Try /coffees for coffee list, /coffee/flavours for flavours</p>';
  }
}
