import React from "react";
import { Column, Bar } from "@ant-design/charts";
import "./chart.scss";

export interface ChartProps {
  data?: any;
  options?: any;
  width?: string | number;
  height?: string | number;
  className?: string;
  orientation?: "vertical" | "horizontal";
  color?: string;
}

export const ChartComponent: React.FC<ChartProps> = ({
  data,
  options = {},
  width = "100%",
  height = 300,
  className = "chart-component",
  orientation = "vertical",
  color = "#1677ff",
}) => {
  const defaultConfig = {
    data,
    xField: orientation === "vertical" ? "x" : "y",
    yField: orientation === "vertical" ? "y" : "x",
    color: color,
    label: {
      position: orientation === "vertical" ? "top" : "right",
      style: { fill: "#fff" },
    },
    columnStyle:
      orientation === "vertical"
        ? { radius: [4, 4, 0, 0] }
        : { radius: [0, 4, 4, 0] },
  };
  const finalConfig = { ...defaultConfig, ...options };

  return (
    <div
      style={{
        width: typeof width === "number" ? `${width}px` : width,
        height: typeof height === "number" ? `${height}px` : height,
      }}
      className={className}
    >
      {orientation === "vertical" ? (
        <Column {...finalConfig} class={`${className}_column'`} />
      ) : (
        <Bar {...finalConfig} />
      )}
    </div>
  );
};
