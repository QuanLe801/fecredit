import React, { ReactNode } from 'react';
import './styles.css';
import useWindowSize from '@/app/hooks/useWindowSize';

export default function CountdownCircle({
  children,
  isAnimation,
  hasBackGround,
  onClick,
  small = false,
}: {
  children: ReactNode;
  isAnimation: boolean;
  hasBackGround: boolean;
  onClick?: () => void;
  small?: boolean;
}) {
  const { width } = useWindowSize();
  const isMobile = width < 768;
  const size = !small ? '3.75rem' : '2rem';
  const sizeMobile = !small ? '1.5rem' : '0.5rem';
  const circle = {
    pc: {
      circleR: !small ? '1.7rem' : '0.8rem',
      circleC: !small ? '1.894rem' : '1rem',
    },
    mobile: {
      circleR: !small ? '0.5rem' : '0.2rem',
      circleC: !small ? '0.75rem' : '0.5rem',
    },
  };
  return (
    <div
      id="countdown"
      className="-rotate-90 cursor-pointer"
      style={{
        width: !isMobile ? size : sizeMobile,
        height: !isMobile ? size : sizeMobile,
      }}
    >
      <div
        style={{
          width: !isMobile ? size : sizeMobile,
          height: !isMobile ? size : sizeMobile,
          lineHeight: !isMobile ? size : sizeMobile,
        }}
        id="countdown-number"
        className={`rotate-90 border-0 rounded-[50%] font-svn500 text-[0.35rem] leading-[0.7rem] ${
          !small
            ? 'md:text-[1.25rem] md:leading-[1.75rem]'
            : 'md:text-[0.75rem] md:leading-[1rem]'
        }`}
        onClick={onClick}
      >
        {children}
      </div>
      <div>
        <svg
          style={{
            width: !isMobile ? size : sizeMobile,
            height: !isMobile ? size : sizeMobile,
          }}
        >
          <circle
            style={{
              animation: isAnimation ? `countdown 10s linear forwards` : 'none',
              fill: hasBackGround ? '#B1FF83' : 'white',
              stroke: hasBackGround ? '#B1FF83' : 'white',
            }}
            r={!isMobile ? circle.pc.circleR : circle.mobile.circleR}
            cx={!isMobile ? circle.pc.circleC : circle.mobile.circleC}
            cy={!isMobile ? circle.pc.circleC : circle.mobile.circleC}
          />
        </svg>
      </div>
    </div>
  );
}
