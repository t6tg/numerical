import { Body, Controller, Post } from '@nestjs/common';
import { IConJ, ICramer, IJacob } from './linear.schema';
import { LinearService } from './linear.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Linear Algebraic Equations')
@Controller('linear')
export class LinearController {
  constructor(private readonly linearService: LinearService) {}

  @Post('/cramer')
  cramer(@Body() data: ICramer) {
    return this.linearService.cramer(data);
  }

  @Post('/gauss-e')
  gaussE(@Body() data: ICramer) {
    return this.linearService.gaussE(data);
  }

  @Post('/gauss-j')
  gaussJ(@Body() data: ICramer) {
    return this.linearService.gaussJ(data);
  }

  @Post('/lu')
  LU(@Body() data: ICramer) {
    return this.linearService.LU(data);
  }

  @Post('/jacob')
  Jacob(@Body() data: IJacob) {
    return this.linearService.Jacob(data);
  }

  @Post('/gauss-s')
  gaussS(@Body() data: IJacob) {
    return this.linearService.gaussS(data);
  }

  @Post('/conj')
  conj(@Body() data: IConJ) {
    return this.linearService.conj(data);
  }
}
