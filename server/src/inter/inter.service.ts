import { Injectable } from '@nestjs/common';
import { INewtonD, ILagrange } from './inter.schema';

@Injectable()
export class InterService {
  newton(data: INewtonD) {
    var dex = [];
    var dey = [];
    var input = []; //input index
    for (const key in data.x) {
      dex.push(data.x[key]);
    }
    for (const key in data.y) {
      dey.push(data.y[key]);
    }
    var x = [],
      fx = [];
    var push = () => {
      (x = []), (fx = []);
      input = input.map((value) => value - 1);
      input.map((value) => {
        x.push(dex[value]);
        fx.push(dey[value]);
      });
    };

    var Equation = (i, j) => {
      if (i == j) {
        // console.log(fx[i])
        return fx[i];
      } else if (Math.abs(j - i) == 1) {
        // console.log((fx[j]-fx[i])/(x[j]-x[i]))
        return (fx[j] - fx[i]) / (x[j] - x[i]);
      } else {
        // console.log(((calc(i+1,j))-calc(i,j-1))/(x[j]-x[i]))
        return (Equation(i + 1, j) - Equation(i, j - 1)) / (x[j] - x[i]);
      }
    };

    var Result = (find) => {
      var sum = 0;
      for (let i = 0; i < x.length; i++) {
        let temp = Equation(0, i);
        for (let j = 0; j < i; j++) {
          temp *= find - x[j];
        }
        sum += temp;
      }
      return sum;
    };

    for (const key in data.order) {
      input.push(data.order[key]);
    }
    push();
    console.log({ data: Result(data.xw) });

    return { data: Result(data.xw) };
  }
  lagrange(data: ILagrange) {
    let x = [];
    let y = [];
    for (const key in data.x) {
      x.push(data.x[key]);
    }
    for (const key in data.y) {
      y.push(data.y[key]);
    }
    let xp = data.xw;
    let n = x.length;
    let yp = 0;
    let p;

    for (let i = 0; i < n; i++) {
      p = 1;
      for (let j = 0; j < n; j++) {
        if (i != j) {
          p = p * ((xp - x[j]) / (x[i] - x[j]));
        }
      }
      yp = yp + p * y[i];
    }
    return { data: parseFloat(yp.toFixed(5)) };
  }
}
