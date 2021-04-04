import React from 'react'

export const Arrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    width="24"
    viewBox="0 0 24 24"
    className="Arrow"
  >
    <g
      strokeLinecap="square"
      strokeWidth="2"
      fill="none"
      stroke="#0D0D0D"
      strokeLinejoin="miter"
      className="nc-icon-wrapper"
      strokeMiterlimit="10"
    >
      <line
        data-cap="butt"
        x1="2"
        y1="12"
        x2="22"
        y2="12"
        strokeLinecap="butt"
        stroke="#0D0D0D"
      ></line>{' '}
      <polyline points="15,5 22,12 15,19 "></polyline>
    </g>
  </svg>
)
