import { Injectable } from '@nestjs/common';
import { ILinear, IMulti, IPoly } from './regression.schema';
const regressions = require('regression');
const { regression } = require('multiregress');

@Injectable()
export class RegressionService {
  linear(data: ILinear) {
    let x = [];
    let y = [];
    let datas = [];
    for (const key in data.x) {
      x.push(data.x[key]);
    }
    for (const key in data.y) {
      y.push(data.y[key]);
    }
    x.map((r, i) => {
      datas.push([x[i], y[i]]);
    });
    const linear = regressions.linear(datas);
    return { data: linear, ans: linear.predict(data.prediction) };
  }

  poly(data: IPoly) {
    let x = [];
    let y = [];
    let datas = [];
    for (const key in data.x) {
      x.push(data.x[key]);
    }
    for (const key in data.y) {
      y.push(data.y[key]);
    }
    x.map((r, i) => {
      datas.push([x[i], y[i]]);
    });
    const poly = regressions.polynomial(datas, { order: data.order });
    console.log(poly);

    return { data: poly };
  }

  multi(data: IMulti) {
    let x1 = [];
    let x2 = [];
    let x3 = [];
    let y = [];
    let datas = [];

    for (const key in data.x1) {
      x1.push(data.x1[key]);
    }
    for (const key in data.x2) {
      x2.push(data.x2[key]);
    }
    for (const key in data.x3) {
      x3.push(data.x3[key]);
    }
    for (const key in data.y) {
      y.push(data.y[key]);
    }
    x1.map((r, i) => {
      datas.push([x1[i], x2[i], x3[i], y[i]]);
    });
    console.log(datas);
    const poly = regression(datas);
    console.log(poly);
    return { data: poly };
  }
}
