interface IBisection {
  xl: number;
  xr: number;
  error: number;
}

interface IFalsePosition {
  xl: number;
  xr: number;
  error: number;
}

export { IBisection, IFalsePosition };
