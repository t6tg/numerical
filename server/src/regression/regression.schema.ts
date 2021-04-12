interface ILinear {
  x: Object;
  y: Object;
  prediction: number;
}

interface IPoly {
  x: Object;
  y: Object;
  order: number;
}
interface IMulti {
  x1: Object;
  x2: Object;
  x3: Object;
  y: Object;
}

export { ILinear, IPoly, IMulti };
