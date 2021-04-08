interface ICramer {
  a11: number;
  a12: number;
  a13: number;
  a21: number;
  a22: number;
  a23: number;
  a31: number;
  a32: number;
  a33: number;
  b11: number;
  b12: number;
  b13: number;
}

interface IJacob {
  a11: number;
  a12: number;
  a13: number;
  a21: number;
  a22: number;
  a23: number;
  a31: number;
  a32: number;
  a33: number;
  b11: number;
  b12: number;
  b13: number;
  x1: number;
  x2: number;
  x3: number;
  err: number;
}

interface IConJ {
  a11: number;
  a12: number;
  a13: number;
  a21: number;
  a22: number;
  a23: number;
  a31: number;
  a32: number;
  a33: number;
  b11: number;
  b12: number;
  b13: number;
  x1: number;
  x2: number;
  x3: number;
}

export { ICramer, IJacob, IConJ };
