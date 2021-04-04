interface IBisection {
  xl: number;
  xr: number;
  error?: number;
}

interface IFalsePosition {
  xl: number;
  xr: number;
  error?: number;
}

interface INewton {
  x0: number;
  error?: number;
}

interface ISecant {
  x0: number;
  x1: number;
  error?: number;
}

interface IOnePoint {
  x: number;
  error?: number;
}

export { IBisection, IFalsePosition, INewton, ISecant, IOnePoint };
