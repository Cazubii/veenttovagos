import React from 'react';

export function VeenttoLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 140 25"
      {...props}
    >
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="18"
        fontWeight="bold"
        letterSpacing="2"
        fill="currentColor"
      >
        VEENTTO
      </text>
    </svg>
  );
}
