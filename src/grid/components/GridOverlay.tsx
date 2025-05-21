// src/grid/components/GridOverlay.tsx
import React from "react";
import { useGrid } from "../hooks/useGrid";
import { GRID_BREAKPOINTS } from "../config/breakpoints";

// Rappel des couleurs pour l’overlay
const COLOR_COL = "rgba(21, 21, 21, 0.07)";
const COLOR_GUTTER = "rgba(141, 113, 130, 0.08)";
const COLOR_MARGIN = "rgba(255, 255, 0, 0.11)";
const BORDER_COL = "#14e7ff";
const BORDER_MARGIN = "#e5d92a";

export const GridOverlay: React.FC = () => {
  // 🆕 Hook de resize
  const [, setWin] = React.useState(window.innerWidth);
  React.useEffect(() => {
    const onResize = () => setWin(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const { isGridVisible, currentBreakpoint } = useGrid();
  if (!isGridVisible) return null;

  const { columns, gutter, margin } = GRID_BREAKPOINTS[currentBreakpoint];
  const colCount = columns;
  const gutterPx = gutter;
  const marginPx = margin;

  // Largeur totale de la fenêtre
  const totalWidth = window.innerWidth;

  // Largeur d'une colonne (hors gouttière)
  const colWidth =
    (totalWidth - 2 * marginPx - gutterPx * (colCount - 1)) / colCount;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-50"
      style={{
        display: "flex",
        width: "100vw",
        height: "100vh",
      }}
    >
      {/* MARGE GAUCHE */}
      <div
        style={{
          width: marginPx,
          background: COLOR_MARGIN,
          borderRight: `2px dashed ${BORDER_MARGIN}`,
          height: "100vh",
          transition: "all 0.2s",
        }}
      />

      {/* COLONNES + GOUTTIÈRES */}
      {[...Array(colCount)].map((_, i) => (
        <React.Fragment key={i}>
          {/* Colonne */}
          <div
            style={{
              width: colWidth,
              background: COLOR_COL,
              borderRight:
                i < colCount - 1 ? `none` : `2px dashed ${BORDER_COL}`,
              height: "100vh",
              transition: "all 0.2s",
            }}
          />
          {/* Gouttière (sauf après la dernière colonne) */}
          {i < colCount - 1 && (
            <div
              style={{
                width: gutterPx,
                background: COLOR_GUTTER,
                borderRight: `1px dotted ${BORDER_COL}`,
                height: "100vh",
              }}
            />
          )}
        </React.Fragment>
      ))}

      {/* MARGE DROITE */}
      <div
        style={{
          width: marginPx,
          background: COLOR_MARGIN,
          borderLeft: `2px dashed ${BORDER_MARGIN}`,
          height: "100vh",
        }}
      />
    </div>
  );
};
