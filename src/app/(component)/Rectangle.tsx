import React from 'react';

interface RectangleProps {
  startColor?: string;
  endColor?: string;
  width?: number;
  height?: number;
  id?: string; // 고유한 id 추가
  className?: string; // CSS 클래스 추가
}

const Rectangle: React.FC<RectangleProps> = ({
  startColor = 'var(--secondary-color)',
  endColor = 'var(--forth-color)',
  width = 100,
  height = 100,
  id = 'rectangle_gradient',
  className = '',
}) => (
  <svg
    className={className} // 스타일 클래스 적용
    viewBox={`0 0 ${width} ${height}`}
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width={width} height={height} fill={`url(#${id})`} />
    <defs>
      <linearGradient id={id} x1={width / 2} y1="0" x2={width / 2} y2={height} gradientUnits="userSpaceOnUse">
        <stop stopColor={startColor} />
        <stop offset="1" stopColor={endColor} />
      </linearGradient>
    </defs>
  </svg>
);

export default Rectangle;
