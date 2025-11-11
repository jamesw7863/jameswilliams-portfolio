import * as React from "react";

type Props = React.SVGProps<SVGSVGElement>;

export default function ComputerIcon({ width = 120, height = 120, ...rest }: Props) {
  const stroke = "currentColor";
  return (
    <svg
      viewBox="0 0 256 256"
      width={width}
      height={height}
      fill="none"
      stroke={stroke}
      strokeWidth={8}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      {/* outer monitor */}
      <rect x="24" y="40" width="208" height="152" rx="24" />
      {/* inner bezel */}
      <rect x="56" y="72" width="144" height="104" rx="18" />
      {/* stand */}
      <path d="M96 216h64" />
      <path d="M112 192l-8 24" />
      <path d="M152 192l8 24" />
      {/* center left empty on purpose */}
    </svg>
  );
}
