import React from 'react';

interface BotanicalLeafProps {
  className?: string;
  style?: React.CSSProperties;
  color?: string;
}

export const BotanicalLeaf: React.FC<BotanicalLeafProps> = ({
  className = '',
  style = {},
  color = '#c5a059',
}) => {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      {/* Delicate olive branch illustration */}
      <path
        d="M10 90 C 30 75, 55 50, 85 15"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      {/* Leaf pairs */}
      <path
        d="M30 73 C 20 60, 25 50, 36 60 C 45 68, 38 78, 30 73 Z"
        fill={color}
        fillOpacity="0.85"
      />
      <path
        d="M38 67 C 48 55, 58 58, 48 70 C 40 76, 32 72, 38 67 Z"
        fill={color}
        fillOpacity="0.8"
      />
      <path
        d="M52 50 C 42 38, 48 28, 58 37 C 66 45, 60 55, 52 50 Z"
        fill={color}
        fillOpacity="0.85"
      />
      <path
        d="M60 44 C 70 32, 80 36, 70 48 C 62 54, 54 50, 60 44 Z"
        fill={color}
        fillOpacity="0.8"
      />
      <path
        d="M72 28 C 64 16, 70 8, 79 17 C 86 24, 80 32, 72 28 Z"
        fill={color}
        fillOpacity="0.85"
      />
      <circle cx="45" cy="58" r="3.5" fill={color} fillOpacity="0.9" />
      <circle cx="66" cy="38" r="3" fill={color} fillOpacity="0.9" />
    </svg>
  );
};

export const ActiveLeafOrnament: React.FC = () => {
  return (
    <div className="active-nav-ornament">
      <span className="ornament-line" />
      <svg
        className="ornament-icon"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 2C8 6 6 10 6 14C6 17.3 8.7 20 12 20C15.3 20 18 17.3 18 14C18 10 16 6 12 2ZM12 18C10.3 18 9 16.7 9 15C9 13.5 10 11.2 12 8.5C14 11.2 15 13.5 15 15C15 16.7 13.7 18 12 18Z" />
      </svg>
      <span className="ornament-line" />
    </div>
  );
};
