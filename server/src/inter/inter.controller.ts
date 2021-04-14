import { Body, Controller, Post } from '@nestjs/common';
import { ILagrange, INewtonD, ISpline } from './inter.schema';
import { InterService } from './inter.service';

@Controller('inter')
export class InterController {
  constructor(private readonly interService: InterService) {}

  @Post('/newton')
  newton(@Body() data: INewtonD) {
    return this.interService.newton(data);
  }
  @Post('/lagrange')
  lagrange(@Body() data: ILagrange) {
    return this.interService.lagrange(data);
  }

  @Post('/spline')
  spline(@Body() data: ISpline) {
    return this.interService.spline(data);
  }
}
