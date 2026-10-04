import React from 'react';

interface WaveDividerProps {
  type: 'cream-to-green' | 'green-to-cream';
}

export const WaveDivider: React.FC<WaveDividerProps> = ({ type }) => {
  if (type === 'cream-to-green') {
    return (
      <div style={{ width: '100%', overflow: 'hidden', lineHeight: 0, backgroundColor: 'var(--color-cream-bg)' }}>
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          style={{ position: 'relative', display: 'block', width: 'calc(100% + 1.3px)', height: '48px' }}
        >
          <path
            d="M0,0 C300,90 900,90 1200,0 L1200,120 L0,120 Z"
            fill="var(--color-emerald-deep)"
          />
        </svg>
      </div>
    );
  }

  return (
    <div style={{ width: '100%', overflow: 'hidden', lineHeight: 0, backgroundColor: 'var(--color-emerald-deep)' }}>
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        style={{ position: 'relative', display: 'block', width: 'calc(100% + 1.3px)', height: '48px' }}
      >
        <path
          d="M0,0 C300,90 900,90 1200,0 L1200,120 L0,120 Z"
          fill="var(--color-cream-bg)"
        />
      </svg>
    </div>
  );
};
