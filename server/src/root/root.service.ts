import { Injectable } from '@nestjs/common';
import {
  IBisection,
  IFalsePosition,
  INewton,
  IOnePoint,
  ISecant,
} from './root.schema';
import { derivative, simplify, evaluate } from 'mathjs';
import { pow } from 'mathjs';

@Injectable()
export class RootService {
  bisection(data: IBisection) {
    let xl = data.xl;
    let xr = data.xr;
    let i = 0;
    let er = 1;
    let er1 = data.error;
    let xm, xmbefore, fxm, fxr;
    let result = [];
    while (er > er1) {
      //step1
      xm = (xl + xr) / 2;
      let fx = (x) => {
        let a = simplify(data.eq).toString();
        return evaluate(a, { x });
      };
      //step2
      let check = fx(xm) * fx(xr);
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
    let er = 1;
    let er1 = data.error;
    let x1, x1before, fxl, fxr;
    let result = [];
    let fx = (x) => {
      let a = simplify(data.eq).toString();
      return evaluate(a, { x });
    };
    while (er > er1) {
      x1 = (xl * fx(xr) - xr * fx(xl)) / (fx(xr) - fx(xl));
      //step3
      let check = x1 * fx(xr);
      if (check < 0) {
        if (i > 0) {
          er = parseFloat(Math.abs((x1 - x1before) / x1).toFixed(5));
        }
        xl = x1;
        x1before = x1;
      } else {
        if (i > 0) {
          er = parseFloat(Math.abs((x1 - x1before) / x1).toFixed(5));
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

  newton(data: INewton) {
    let result = [];
    let x = data.x0,
      i = 1,
      er = 1,
      er1 = data.error;
    let xi;
    let fx = (x) => {
      let a = simplify(data.eq).toString();
      return evaluate(data.eq, { x });
    };

    let diffx = (x) => {
      let dif = derivative(data.eq, 'x').toString();
      dif = simplify(dif).toString();
      return evaluate(dif, { x });
    };
    while (er > er1) {
      xi = x - parseFloat(fx(x)) / parseFloat(diffx(x));
      er = parseFloat(Math.abs((xi - x) / xi).toFixed(5));
      x = xi;
      result.push({
        iteration: i,
        xi,
        fx,
        diffx,
        er,
      });
      i++;
    }
    return { data: result };
  }

  secant(data: ISecant) {
    let result = [];
    let x0 = data.x0;
    let x1 = data.x1;
    let i = 1;
    let xi, fx0, fx1, deltax;
    let er = 1;
    let er1 = data.error;
    if (er1 == null || er1 <= 0) {
      er1 = 0.000001;
    }

    let fx = (x) => {
      let a = simplify(data.eq).toString();
      return evaluate(a, { x });
    };

    while (er >= er1) {
      if (i > 0) {
        deltax = parseFloat(
          ((fx(x1) * (x0 - x1)) / (fx(x0) - fx(x1))).toFixed(5),
        );
        xi = parseFloat((x1 - deltax).toFixed(5));
        er = parseFloat(Math.abs((xi - x1) / xi).toFixed(6));
        x0 = x1;
        x1 = xi;
        result.push({ iteration: i, x0, x1, fx0, fx1, deltax, xi, er });
      }
      i++;
    }
    return { data: result };
  }

  onepoint(data: IOnePoint) {
    let result = [];
    let x = data.x;
    let i = 0;
    let xi;
    let er = 1;
    let er1 = data.error;
    if (er1 == null || er1 <= 0) {
      er1 = 0.000001;
    }
    let fx = (x) => {
      let a = simplify(data.eq).toString();
      return evaluate(a, { x });
    };
    while (er >= er1) {
      if (i > 0) {
        xi = fx(x);
        er = parseFloat(Math.abs((xi - x) / xi).toFixed(5));
        x = xi;
        result.push({ iteration: i, x, xi, er });
      }
      i++;
    }
    return { data: result };
  }
}
