/* eslint-disable react-refresh/only-export-components */
// src/grid/context/GridProvider.tsx
import React, { createContext, useContext, useState, useEffect } from "react";
import { GRID_BREAKPOINTS } from "../config/breakpoints";
import type { GridBreakpoint } from "../config/breakpoints";

interface GridContextType {
  currentBreakpoint: GridBreakpoint;
  isGridVisible: boolean;
  toggleGrid: () => void;
}

const GridContext = createContext<GridContextType | undefined>(undefined);

export const GridProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isGridVisible, setGridVisible] = useState(false);
  const [currentBreakpoint, setCurrentBreakpoint] =
    useState<GridBreakpoint>("desktop");

  // Responsive breakpoint logic
  useEffect(() => {
    const getBreakpoint = () => {
      const width = window.innerWidth;
      if (width >= GRID_BREAKPOINTS.desktop.minWidth) return "desktop";
      if (width >= GRID_BREAKPOINTS.tablet.minWidth) return "tablet";
      return "mobile";
    };

    const handleResize = () => setCurrentBreakpoint(getBreakpoint());
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Raccourci clavier Alt+G pour toggle la grid
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.altKey && e.key.toLowerCase() === "g") setGridVisible((v) => !v);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <GridContext.Provider
      value={{
        currentBreakpoint,
        isGridVisible,
        toggleGrid: () => setGridVisible((v) => !v),
      }}
    >
      {children}
    </GridContext.Provider>
  );
};

export const useGridContext = () => {
  const ctx = useContext(GridContext);
  if (!ctx) throw new Error("useGridContext must be used within GridProvider");
  return ctx;
};
