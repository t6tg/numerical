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

export { IBisection, IFalsePosition, INewton };
