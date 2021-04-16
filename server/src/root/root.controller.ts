import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import {
  IBisection,
  IFalsePosition,
  INewton,
  IOnePoint,
  ISecant,
} from './root.schema';
import { RootService } from './root.service';

@ApiTags('Root of Equation')
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

  @Post('/secant')
  secant(@Body() data: ISecant) {
    return this.rootService.secant(data);
  }

  @Post('/onepoint')
  onepoint(@Body() data: IOnePoint) {
    return this.rootService.onepoint(data);
  }
}
