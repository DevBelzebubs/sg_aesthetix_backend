import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getStatus() {
    return {
      name: 'sg_aesthetix_backend',
      status: 'ok',
    };
  }
}
