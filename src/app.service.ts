import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! <br> I am Ho Thanh Binh';
  }
}
