interface ILogoProps {
  width?: string | number;
  height?: string | number;
  color?: string;
}

export default function CrossIcon({
  width = 14,
  height = 14,
  color = "none",
}: ILogoProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 1L13 13M13 1L1 13" stroke="black" />
    </svg>
  );
}
