import { Injectable } from '@nestjs/common';
import { IBisection, IFalsePosition } from './root.schema';
import { pow } from 'mathjs';

@Injectable()
export class RootService {
  bisection(data: IBisection) {
    let xl = data.xl;
    let xr = data.xr;
    let i = 0;
    let er = data.error;
    let xm, xmbefore, fxm, fxr;
    let result = [];
    while (er > 0.0000001) {
      //step1
      xm = (xl + xr) / 2;
      fxm = Math.pow(xm, 4) - 13;
      fxr = Math.pow(xr, 4) - 13;
      //step2
      let check = fxm * fxr;
      //step3
      if (check < 0) {
        //step4
        if (i > 0) {
          er = parseFloat(Math.abs((xm - xmbefore) / xm).toFixed(6));
        }
        xl = xm;
        xmbefore = xm;
      } else {
        //step4
        if (i > 0) {
          er = parseFloat(Math.abs((xm - xmbefore) / xm).toFixed(6));
        }
        xr = xm;
        xmbefore = xm;
      }
      if (i > 0) {
        result.push({
          iteration: i,
          xl,
          xr,
          xm,
          er,
        });
      }
      i++;
    }
    return {
      data: result,
    };
  }

  falsePosition(data: IFalsePosition) {
    let xl = data.xl;
    let xr = data.xr;
    let i = 0;
    let er = data.error;
    let x1, x1before, fxl, fxr;
    let result = [];
    while (er > 0.0000001) {
      //step1
      fxl = pow(xl, 4) - 13;
      fxr = pow(xr, 4) - 13;
      //step2
      x1 = ((xl * fxr - xr * fxl) / (fxr - fxl)).toFixed(6);
      //step3
      let check = x1 * fxr;
      if (check < 0) {
        //step4
        if (i > 0) {
          er = parseFloat(Math.abs((x1 - x1before) / x1).toFixed(6));
        }
        xl = x1;
        x1before = x1;
      } else {
        //step4
        if (i > 0) {
          er = parseFloat(Math.abs((x1 - x1before) / x1).toFixed(6));
        }
        xr = x1;
        x1before = x1;
      }
      if (i > 0) {
        result.push({
          iteration: i,
          xl,
          xr,
          xm: x1,
          er,
        });
      }
      i++;
    }
    return { data: result };
  }
}
