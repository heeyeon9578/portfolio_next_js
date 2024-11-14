import React from 'react';

interface RectangleProps {
  startColor?: string;
  endColor?: string;
  width?: number;
  height?: number;
  id?: string; // 고유한 id 추가
}

const Rectangle: React.FC<RectangleProps> = ({
  startColor = '#E5B4C6',
  endColor = '#C49AA9',
  width = 31,
  height = 339,
  id = 'rectangle_gradient', // 기본 id 값
}) => (
  <svg
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width={width} height={height} fill={`url(#${id})`} />
    <defs>
      <linearGradient
        id={id} // 고유한 id 적용
        x1={width / 2}
        y1="0"
        x2={width / 2}
        y2={height}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor={startColor} />
        <stop offset="1" stopColor={endColor} />
      </linearGradient>
    </defs>
  </svg>
);

export default Rectangle;
