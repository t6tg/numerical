import { Body, Controller, Post } from '@nestjs/common';
import { IBisection, IFalsePosition, INewton } from './root.schema';
import { RootService } from './root.service';

@Controller('root')
export class RootController {
  constructor(private readonly rootService: RootService) {}

  @Post('/bisection')
  bisection(@Body() data: IBisection) {
    return this.rootService.bisection(data);
  }

  @Post('/falsePosition')
  falsePosition(@Body() data: IFalsePosition) {
    return this.rootService.falsePosition(data);
  }

  @Post('/newton')
  newton(@Body() data: INewton) {
    return this.rootService.newton(data);
  }
}
