import { Sparkles } from 'lucide-react';

interface SparkleProps {
  className?: string;
  style?: React.CSSProperties;
  size?: number;
}

const Sparkle = ({ className = '', style, size = 16 }: SparkleProps) => {
  return (
    <Sparkles 
      size={size} 
      className={`text-foreground/40 animate-sparkle ${className}`}
      style={style}
    />
  );
};

export default Sparkle;
