import React from 'react';

interface SunIconProps {
  className?: string;
  size?: number;
}

export const SunIcon: React.FC<SunIconProps> = ({ className = '', size = 24 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block ${className}`}
    >
      <circle cx="12" cy="12" r="4" fill="currentColor" />
      <path
        d="M12 2V5M12 19V22M2 12H5M19 12H22M4.93 4.93L7.05 7.05M16.95 16.95L19.07 19.07M4.93 19.07L7.05 16.95M16.95 7.05L19.07 4.93"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export const SunRaysGraphic: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <svg
      viewBox="0 0 200 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-auto ${className}`}
    >
      <circle cx="100" cy="100" r="30" stroke="currentColor" strokeWidth="2" fill="none" />
      <line x1="100" y1="10" x2="100" y2="60" stroke="currentColor" strokeWidth="2" />
      <line x1="30" y1="100" x2="60" y2="100" stroke="currentColor" strokeWidth="2" />
      <line x1="140" y1="100" x2="170" y2="100" stroke="currentColor" strokeWidth="2" />
      <line x1="50" y1="50" x2="75" y2="75" stroke="currentColor" strokeWidth="2" />
      <line x1="150" y1="50" x2="125" y2="75" stroke="currentColor" strokeWidth="2" />
      <line x1="20" y1="70" x2="55" y2="85" stroke="currentColor" strokeWidth="1.5" />
      <line x1="180" y1="70" x2="145" y2="85" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
};
