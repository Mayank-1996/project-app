interface ILogoProps {
  width: string | number;
  height: string | number;
}

export default function Logo({ width, height }: ILogoProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.09472 13.7645L1.33227 44.0572L32.7281 56.2265M9.09472 13.7645L37.1283 26.9834M9.09472 13.7645L35.8434 1.00598L65.0571 13.662M32.7281 56.2265L37.1283 26.9834M32.7281 56.2265L59.8701 43.2804L65.0571 13.662M37.1283 26.9834L65.0571 13.662"
        stroke="#F2EAEA"
      />
    </svg>
  );
}
