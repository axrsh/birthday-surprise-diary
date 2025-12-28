import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

interface HeartData {
  id: number;
  left: number;
  delay: number;
  size: number;
  duration: number;
}

const FloatingHeart = () => {
  const [hearts, setHearts] = useState<HeartData[]>([]);

  useEffect(() => {
    const createHeart = () => {
      const newHeart: HeartData = {
        id: Date.now() + Math.random(),
        left: Math.random() * 100,
        delay: 0,
        size: Math.random() * 16 + 12,
        duration: Math.random() * 2 + 3,
      };
      
      setHearts(prev => [...prev, newHeart]);
      
      setTimeout(() => {
        setHearts(prev => prev.filter(h => h.id !== newHeart.id));
      }, newHeart.duration * 1000);
    };

    const interval = setInterval(createHeart, 800);
    
    // Create initial hearts
    for (let i = 0; i < 5; i++) {
      setTimeout(createHeart, i * 200);
    }

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {hearts.map(heart => (
        <div
          key={heart.id}
          className="absolute bottom-0 animate-float-up"
          style={{
            left: `${heart.left}%`,
            animationDuration: `${heart.duration}s`,
            animationDelay: `${heart.delay}s`,
          }}
        >
          <Heart 
            size={heart.size} 
            className="text-heart fill-heart opacity-70"
          />
        </div>
      ))}
    </div>
  );
};

export default FloatingHeart;
