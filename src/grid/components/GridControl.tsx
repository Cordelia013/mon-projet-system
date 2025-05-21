// src/grid/components/GridControl.tsx
import React from "react";
import { useGrid } from "../hooks/useGrid";

export const GridControl: React.FC = () => {
  const { isGridVisible, toggleGrid, currentBreakpoint } = useGrid();
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={toggleGrid}
        className="px-3 py-1 bg-blue-600 text-white rounded shadow hover:bg-blue-700"
      >
        {isGridVisible ? "Masquer" : "Afficher"} la grille ({currentBreakpoint})
      </button>
    </div>
  );
};
