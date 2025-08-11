interface ChartProps {
  data: any;
  options?: any;
  width?: string | number;
  height?: string | number;
  className?: string;
}

export const Chart: React.FC<ChartProps> = ({
  data,
  options,
  width = "100%",
  height = "400px",
  className = "",
}) => {
  return (
    <div
      className={`chart-container ${className}`}
      style={{ width, height }}
    ></div>
  );
};
