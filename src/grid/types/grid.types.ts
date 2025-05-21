// src/grid/types/grid.types.ts
export type GridConfig =
  typeof import("../config/breakpoints").GRID_BREAKPOINTS;
export type GridBreakpoint = keyof GridConfig;
