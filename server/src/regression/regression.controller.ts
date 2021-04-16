import { Body, Controller, Post } from '@nestjs/common';
import { ILinear, IMulti, IPoly } from './regression.schema';
import { RegressionService } from './regression.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Least Squares Regression')
@Controller('regression')
export class RegressionController {
  constructor(private readonly regressionService: RegressionService) {}

  @Post('/linear')
  linear(@Body() data: ILinear) {
    return this.regressionService.linear(data);
  }

  @Post('/poly')
  poly(@Body() data: IPoly) {
    return this.regressionService.poly(data);
  }

  @Post('/multi')
  multi(@Body() data: IMulti) {
    return this.regressionService.multi(data);
  }
}
