import { useState, useEffect, useRef } from "react";

const CELL_PX = 32;          // smaller blocks (raise for bigger blocks)
const OPACITY_CENTER = 0.95; // brightness of the active cell
const TRANSITION_MS = 350;   // slower fade between cells

export default function BackgroundGrid() {
  const [hovered, setHovered] = useState({ row: null, col: null });
  const [gridSize, setGridSize] = useState({ rows: 10, cols: 10 });
  const ref = useRef(null);

  // compute rows/cols from container size
  useEffect(() => {
    const update = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      setGridSize({
        rows: Math.max(4, Math.floor(rect.height / CELL_PX)),
        cols: Math.max(4, Math.floor(rect.width / CELL_PX)),
      });
    };

    let ro;
    if (typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(update);
      ro.observe(ref.current);
    } else {
      window.addEventListener("resize", update);
    }
    update();

    return () => {
      if (ro) ro.disconnect();
      else window.removeEventListener("resize", update);
    };
  }, []);

  // mouse → active cell
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;

    const onMove = (e) => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const cw = rect.width / gridSize.cols;
        const ch = rect.height / gridSize.rows;
        const col = Math.floor((e.clientX - rect.left) / cw);
        const row = Math.floor((e.clientY - rect.top) / ch);
        setHovered({ row, col });
      });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [gridSize]);

  const { rows, cols } = gridSize;

  return (
    <div
      ref={ref}
      className="absolute inset-0 z-0 grid pointer-events-none"
      style={{
        gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
        gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
      }}
    >
      {Array.from({ length: rows * cols }).map((_, i) => {
        const r = Math.floor(i / cols);
        const c = i % cols;

        const isActive =
          hovered.row !== null &&
          hovered.col !== null &&
          r === hovered.row &&
          c === hovered.col;

        return (
          <div
            key={i}
            className="bg-gray-500"
            style={{
              opacity: isActive ? OPACITY_CENTER : 0,
              transition: `opacity ${TRANSITION_MS}ms ease-out`,
              willChange: "opacity",
            }}
          />
        );
      })}
    </div>
  );
}
