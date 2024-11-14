import React from 'react';

interface DeviderProps {
  startColor?: string;
  endColor?: string;
  width?: number;
  height?: number;
}

const Devider: React.FC<DeviderProps> = ({
  startColor = '#F2BED1',
  endColor = '#8C6E79',
  width = 972,
  height = 4,
}) => (
  <svg
    style={{ width: '100%' }} // width만 100%로 설정
    height={height} // height는 고정된 값 사용
    viewBox={`0 0 ${width} ${height}`}
    fill="none"
    preserveAspectRatio="none" // 비율 고정을 해제
    xmlns="http://www.w3.org/2000/svg"
  >
    <line
      y1={height / 2}
      x2={width - 1}
      y2={height / 2}
      stroke="url(#paint0_linear)"
      strokeWidth={height}
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="paint0_linear"
        x1="0"
        y1={height}
        x2={width}
        y2={height}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor={startColor} />
        <stop offset="1" stopColor={endColor} />
      </linearGradient>
    </defs>
  </svg>
);

export default Devider;
