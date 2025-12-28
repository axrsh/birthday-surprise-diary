const Bunting = () => {
  const flags = Array.from({ length: 12 }, (_, i) => i);
  
  return (
    <div className="absolute top-0 left-0 right-0 h-20 overflow-hidden">
      <svg 
        viewBox="0 0 1200 100" 
        className="w-full h-full"
        preserveAspectRatio="none"
      >
        {/* String */}
        <path 
          d="M 0 30 Q 200 60, 400 30 Q 600 60, 800 30 Q 1000 60, 1200 30" 
          stroke="hsl(var(--foreground))" 
          strokeWidth="2" 
          fill="none"
          className="opacity-40"
        />
        
        {/* Flags */}
        {flags.map((_, i) => {
          const x = 50 + i * 100;
          const yOffset = Math.sin((i / 12) * Math.PI * 2) * 15;
          const isEven = i % 2 === 0;
          
          return (
            <polygon
              key={i}
              points={`${x - 15},${30 + yOffset} ${x + 15},${30 + yOffset} ${x},${65 + yOffset}`}
              className={isEven ? 'fill-primary' : 'fill-bunting'}
              style={{
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
              }}
            />
          );
        })}
      </svg>
    </div>
  );
};

export default Bunting;
