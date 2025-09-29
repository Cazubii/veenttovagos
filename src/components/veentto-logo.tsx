import React from 'react';

export function VeenttoLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 70"
      {...props}
      className={`fill-current ${props.className || ''}`}
    >
      <g>
        <path d="M40,35c0,16.5-13.5,30-30,30S-20,51.5-20,35S-6.5,5,10,5S40,18.5,40,35z M10,10c-13.8,0-25,11.2-25,25 s11.2,25,25,25s25-11.2,25-25S23.8,10,10,10z" transform="translate(90 5) scale(0.9)" />
        <path d="M10.1,19.2l-10,15l-10-15H-10l10,15l10-15H10.1z M-0.2,40.8l-4-6h8L-0.2,40.8z M10.1,30.8h-20l-4,6h28L10.1,30.8z" transform="translate(90 5) scale(0.9)" />

        <text x="90" y="65" textAnchor="middle" fontSize="14" fontWeight="bold" letterSpacing="1">
          VEENTTO
        </text>

        <path d="M45,25 h25 l-10,5 h-25 l10,-5 z" transform="translate(10, 0) scale(0.9)" />
        <path d="M48,35 h30 l-10,5 h-30 l10,-5 z" transform="translate(10, 0) scale(0.9)" />
        <path d="M51,45 h35 l-10,5 h-35 l10,-5 z" transform="translate(10, 0) scale(0.9)" />

        <g transform="translate(200, 0) scale(-1, 1)">
          <path d="M45,25 h25 l-10,5 h-25 l10,-5 z" transform="translate(10, 0) scale(0.9)" />
          <path d="M48,35 h30 l-10,5 h-30 l10,-5 z" transform="translate(10, 0) scale(0.9)" />
          <path d="M51,45 h35 l-10,5 h-35 l10,-5 z" transform="translate(10, 0) scale(0.9)" />
        </g>
      </g>
    </svg>
  );
}
