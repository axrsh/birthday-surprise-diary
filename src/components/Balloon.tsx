interface BalloonProps {
  className?: string;
  color?: 'pink' | 'coral';
  style?: React.CSSProperties;
}

const Balloon = ({ className = '', color = 'pink', style }: BalloonProps) => {
  const balloonColor = color === 'pink' ? 'fill-balloon-pink' : 'fill-balloon-coral';
  
  return (
    <div className={`${className}`} style={style}>
      <svg 
        width="60" 
        height="80" 
        viewBox="0 0 60 80" 
        className="drop-shadow-lg"
      >
        <ellipse 
          cx="30" 
          cy="28" 
          rx="25" 
          ry="28" 
          className={balloonColor}
        />
        <ellipse 
          cx="22" 
          cy="18" 
          rx="6" 
          ry="8" 
          className="fill-white/30"
        />
        <polygon 
          points="30,56 25,62 35,62" 
          className={balloonColor}
        />
        <path 
          d="M30 62 Q 32 70, 30 80" 
          stroke="hsl(var(--foreground))" 
          strokeWidth="1.5" 
          fill="none"
          className="opacity-60"
        />
      </svg>
    </div>
  );
};

export default Balloon;
