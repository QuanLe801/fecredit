import React, { ReactNode } from 'react';
import './styles.css';
import useWindowSize from '@/app/hooks/useWindowSize';

export default function CountdownCircle({
  children,
  isAnimation,
  hasBackGround,
  onClick,
}: {
  children: ReactNode;
  isAnimation: boolean;
  hasBackGround: boolean;
  onClick?: () => void;
}) {
  const { width } = useWindowSize();
  const isMobile = width < 768;
  return (
    <div
      id="countdown"
      className="-rotate-90 cursor-pointer"
      style={{
        width: !isMobile ? '3.75rem' : '1.5rem',
        height: !isMobile ? '3.75rem' : '1.5rem',
      }}
    >
      <div
        style={{
          width: !isMobile ? '3.75rem' : '1.5rem',
          height: !isMobile ? '3.75rem' : '1.5rem',
          lineHeight: !isMobile ? '3.75rem' : '1.5rem',
        }}
        id="countdown-number"
        className="rotate-90 border-0 rounded-[50%] font-svn500 text-[0.35rem] leading-[0.7rem] md:text-[1.25rem] md:leading-[1.75rem]"
        onClick={onClick}
      >
        {children}
      </div>
      <div>
        <svg
          style={{
            width: !isMobile ? '3.75rem' : '1.5rem',
            height: !isMobile ? '3.75rem' : '1.5rem',
          }}
        >
          <circle
            style={{
              animation: isAnimation ? `countdown 10s linear forwards` : 'none',
              fill: hasBackGround ? '#B1FF83' : 'white',
              stroke: hasBackGround ? '#B1FF83' : 'white',
            }}
            r={!isMobile ? '1.7rem' : '0.5rem'}
            cx={!isMobile ? '1.894rem' : '0.75rem'}
            cy={!isMobile ? '1.894rem' : '0.75rem'}
          />
        </svg>
      </div>
    </div>
  );
}
