import { Injectable } from '@nestjs/common';
import { IConJ, ICramer, IJacob } from './linear.schema';
import {
  lusolve,
  det,
  round,
  add,
  subtract,
  multiply,
  transpose,
  i,
} from 'mathjs';
import rref = require('rref');
const linSystem = require('linear-equation-system');

@Injectable()
export class LinearService {
  cramer(data: ICramer) {
    let result = [];
    const m = [
      [data.a11, data.a12, data.a13],
      [data.a21, data.a22, data.a23],
      [data.a31, data.a32, data.a33],
    ];
    const b = [data.b11, data.b12, data.b13];

    const cal = (i, j) => {
      const a1 = [
        [data.a11, data.a12, data.a13],
        [data.a21, data.a22, data.a23],
        [data.a31, data.a32, data.a33],
      ];
      while (i < b.length) {
        a1[i][j] = b[i];
        i++;
      }
      return det(a1) / det(m);
    };

    for (let i = 0; i < m.length; i++) {
      result.push({ x: i + 1, temp: round(cal(0, i)) });
    }
    return { data: result };
  }
  gaussE(data: ICramer) {
    let result = [];
    const x = rref([
      [data.a11, data.a12, data.a13, data.b11],
      [data.a21, data.a22, data.a23, data.b12],
      [data.a31, data.a32, data.a33, data.b13],
    ]);
    for (let i = 0; i < x.length; i++) {
      result.push({ m: i + 1, temp: round(x[i][x.length]) });
    }
    return { data: result };
  }
  gaussJ(data: ICramer) {
    let result = [];
    const m = [
      [data.a11, data.a12, data.a13],
      [data.a21, data.a22, data.a23],
      [data.a31, data.a32, data.a33],
    ];
    const b = [data.b11, data.b12, data.b13];
    result.push(
      round(linSystem.solve(m, b)).map((r, index) => ({
        x: index + 1,
        temp: r,
      })),
    );
    return { data: result[0] };
  }
  LU(data: ICramer) {
    let result = [];
    const a = [
      [data.a11, data.a12, data.a13],
      [data.a21, data.a22, data.a23],
      [data.a31, data.a32, data.a33],
    ];
    const b = [data.b11, data.b12, data.b13];
    const ans = round(lusolve(a, b));
    for (let i = 0; i < ans.length; i++) {
      result.push({ x: i + 1, temp: ans[i][0] });
    }
    return { data: result };
  }
  Jacob(data: IJacob) {
    let result = [];
    let x1 = data.x1;
    let x2 = data.x2;
    let x3 = data.x3;
    let A = [
      [data.a11, data.a12, data.a13],
      [data.a21, data.a22, data.a23],
      [data.a31, data.a32, data.a33],
    ];
    let b = [data.b11, data.b12, data.b13];
    let t1 = 1;
    let t2 = 1;
    let t3 = 1;
    let i = 1;
    while (t1 > data.err && t2 > data.err && t3 > data.err) {
      let xk1 = (b[0] - A[0][1] * x2 - A[0][2] * x3) / A[0][0];
      let xk2 = (b[1] - A[1][0] * x1 - A[1][2] * x3) / A[1][1];
      let xk3 = (b[2] - A[2][0] * x1 - A[2][1] * x2) / A[2][2];
      t1 = parseFloat(Math.abs((xk1 - x1) / xk1).toFixed(6));
      t2 = parseFloat(Math.abs((xk2 - x2) / xk2).toFixed(6));
      t3 = parseFloat(Math.abs((xk3 - x3) / xk3).toFixed(6));
      x1 = xk1;
      x2 = xk2;
      x3 = xk3;
      result.push({ i, x1, x2, x3 });
      i++;
    }

    return { data: result };
  }
  gaussS(data: IJacob) {
    let result = [];
    let A = [
      [data.a11, data.a12, data.a13],
      [data.a21, data.a22, data.a23],
      [data.a31, data.a32, data.a33],
    ];
    let B = [data.b11, data.b12, data.b13];
    var x1 = 1,
      o1 = data.x1;
    var x2 = 1,
      o2 = data.x2;
    var x3 = 100,
      o3 = data.x3;
    var er1 = 1,
      er2 = 1,
      er3 = 1;
    var i = 1;
    while (er1 > data.err && er2 > data.err && er3 > data.err) {
      x1 = (B[0] - A[0][1] * o2 - A[0][2] * o3) / A[0][0];
      x2 = (B[1] - A[1][0] * x1 - A[1][2] * o3) / A[1][1];
      x3 = (B[2] - A[2][0] * x1 - A[2][1] * x2) / A[2][2];
      er1 = Math.abs((x1 - o1) / x1);
      er2 = Math.abs((x2 - o2) / x2);
      er3 = Math.abs((x3 - o3) / x3);
      o1 = x1;
      o2 = x2;
      o3 = x3;
      result.push({ i, x1, x2, x3 });
      i++;
    }
    return { data: result };
  }
  conj(data: IConJ) {
    let result = [];
    const A = [
      [data.a11, data.a12, data.a13],
      [data.a21, data.a22, data.a23],
      [data.a31, data.a32, data.a33],
    ];
    let x = [data.x1, data.x2, data.x3];
    const B = [data.b11, data.b12, data.b13];
    var R = subtract(multiply(A, x), B);
    var D = multiply(R, -1);
    let err = 1;
    let iter = 1;
    while (err > 0.000001) {
      var l =
        multiply(multiply(transpose(D), R), -1) /
        multiply(multiply(transpose(D), A), D);
      x = add(x, multiply(l, D));
      R = subtract(multiply(A, x), B);
      err = parseFloat(Math.sqrt(multiply(transpose(R), R)).toFixed(8));
      var a1 =
        multiply(multiply(transpose(R), A), D) /
        multiply(transpose(D), multiply(A, D)).toFixed(8);
      D = add(multiply(R, -1), multiply(a1, D));
      result.push({
        i: iter,
        l,
        x1: x[0],
        x2: x[1],
        x3: x[2],
        r1: R[0],
        r2: R[1],
        r3: R[2],
        err,
        a1,
        d1: D[0],
        d2: D[1],
        d3: D[2],
      });
      iter++;
    }
    return { data: result };
  }
}
