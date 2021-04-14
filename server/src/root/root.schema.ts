interface IBisection {
  eq: string;
  xl: number;
  xr: number;
  error?: number;
}

interface IFalsePosition {
  eq: string;
  xl: number;
  xr: number;
  error?: number;
}

interface INewton {
  eq: string;
  x0: number;
  error?: number;
}

interface ISecant {
  eq: string;
  x0: number;
  x1: number;
  error?: number;
}

interface IOnePoint {
  eq: string;
  x: number;
  error?: number;
}

export { IBisection, IFalsePosition, INewton, ISecant, IOnePoint };
