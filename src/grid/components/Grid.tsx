import React from "react";
import { useGrid } from "../hooks/useGrid";
import { GRID_BREAKPOINTS } from "../config/breakpoints";

const GRID_COLS_CLASSES: Record<number, string> = {
  4: "grid-cols-4",
  8: "grid-cols-8",
  12: "grid-cols-12",
};

const GAP_CLASSES: Record<string, string> = {
  mobile: "gap-x-4",
  tablet: "gap-x-6",
  desktop: "gap-x-8",
};

const MARGIN_CLASSES: Record<string, string> = {
  mobile: "mx-4",
  tablet: "mx-8",
  desktop: "mx-16",
};

export const Grid: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { currentBreakpoint } = useGrid();
  const cols = GRID_BREAKPOINTS[currentBreakpoint].columns;
  const colsClass = GRID_COLS_CLASSES[cols] || "grid-cols-4";
  const gapClass = GAP_CLASSES[currentBreakpoint] || "gap-x-4";
  const marginClass = MARGIN_CLASSES[currentBreakpoint] || "mx-4";

  return (
    <div className={`grid ${colsClass} ${gapClass} ${marginClass}`}>
      {children}
    </div>
  );
};
