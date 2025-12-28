import { useState, useRef } from 'react';
import { Mail, Volume2 } from 'lucide-react';
import Balloon from '@/components/Balloon';
import FloatingHeart from '@/components/FloatingHeart';
import Bunting from '@/components/Bunting';
import Sparkle from '@/components/Sparkle';
import DiaryModal from '@/components/DiaryModal';
import chhaviAvatar from '@/assets/chhavi-avatar.png';

const Index = () => {
  const [isDiaryOpen, setIsDiaryOpen] = useState(false);
  const [musicStarted, setMusicStarted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePageClick = () => {
    if (!musicStarted && audioRef.current) {
      audioRef.current.play();
      setMusicStarted(true);
    }
  };

  return (
    <div 
      className="min-h-screen bg-background grid-bg relative overflow-hidden cursor-pointer"
      onClick={handlePageClick}
    >
      {/* Background Music */}
      <audio 
        ref={audioRef} 
        loop 
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
      />
      
      {/* Music indicator */}
      {!musicStarted && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-primary/90 text-primary-foreground px-4 py-2 rounded-full font-body text-sm flex items-center gap-2 animate-bounce-soft shadow-lg">
          <Volume2 size={16} />
          Click anywhere to play music
        </div>
      )}
      {/* Floating Hearts */}
      <FloatingHeart />
      
      {/* Bunting decoration */}
      <Bunting />
      
      {/* Sparkles scattered */}
      <Sparkle className="absolute top-32 left-20" style={{ animationDelay: '0s' }} />
      <Sparkle className="absolute top-40 right-32" style={{ animationDelay: '0.5s' }} />
      <Sparkle className="absolute top-60 left-1/4" style={{ animationDelay: '1s' }} />
      <Sparkle className="absolute bottom-40 right-20" style={{ animationDelay: '1.5s' }} />
      <Sparkle className="absolute bottom-60 left-16" style={{ animationDelay: '0.3s' }} />
      <Sparkle className="absolute top-1/2 right-1/4" style={{ animationDelay: '0.8s' }} />
      
      {/* Balloons - Left side */}
      <Balloon 
        className="absolute top-20 left-8 animate-balloon-sway" 
        color="pink"
        style={{ animationDelay: '0s' }}
      />
      <Balloon 
        className="absolute top-32 left-24 animate-balloon-sway-alt" 
        color="coral"
        style={{ animationDelay: '0.5s' }}
      />
      <Balloon 
        className="absolute bottom-32 left-12 animate-balloon-sway" 
        color="coral"
        style={{ animationDelay: '1s' }}
      />
      
      {/* Balloons - Right side */}
      <Balloon 
        className="absolute top-24 right-16 animate-balloon-sway-alt" 
        color="coral"
        style={{ animationDelay: '0.3s' }}
      />
      <Balloon 
        className="absolute top-40 right-32 animate-balloon-sway" 
        color="pink"
        style={{ animationDelay: '0.8s' }}
      />
      <Balloon 
        className="absolute bottom-40 right-8 animate-balloon-sway-alt" 
        color="pink"
        style={{ animationDelay: '1.2s' }}
      />
      
      {/* Main content */}
      <div className="relative z-20 flex flex-col md:flex-row items-center justify-center min-h-screen px-4 py-20 gap-8 md:gap-16">
        {/* Left side - Happy Birthday */}
        <div className="flex flex-col items-center">
          {/* Party hat decoration */}
          <div className="relative mb-4">
            <svg width="50" height="60" viewBox="0 0 50 60">
              <polygon points="25,0 0,55 50,55" className="fill-primary" />
              <circle cx="25" cy="0" r="6" className="fill-accent" />
              <ellipse cx="10" cy="45" rx="4" ry="3" className="fill-secondary" />
              <ellipse cx="40" cy="35" rx="3" ry="2" className="fill-secondary" />
              <ellipse cx="25" cy="25" rx="3" ry="2" className="fill-secondary" />
            </svg>
          </div>
          
          {/* Happy Birthday Text */}
          <div className="text-center mb-6">
            <h1 className="font-display text-5xl md:text-7xl text-primary drop-shadow-lg">
              Happy
            </h1>
            <h2 className="font-display text-4xl md:text-6xl text-primary drop-shadow-lg -mt-2">
              Birthday
            </h2>
          </div>
          
          {/* Click Here Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsDiaryOpen(true);
            }}
            className="group bg-secondary hover:bg-primary text-secondary-foreground hover:text-primary-foreground px-8 py-4 rounded-full font-body font-semibold text-lg shadow-lg transition-all duration-300 hover:scale-105 flex items-center gap-3 animate-bounce-soft"
          >
            Click Here Chhavi
            <Mail className="w-5 h-5 group-hover:animate-pulse" />
          </button>
          
          {/* Smiley decoration */}
          <div className="mt-8 w-14 h-14 rounded-full border-4 border-foreground/30 flex items-center justify-center">
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="absolute top-3 left-3 w-2 h-2 rounded-full bg-foreground/50" />
              <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-foreground/50" />
              <svg className="absolute bottom-2" width="20" height="10" viewBox="0 0 24 12">
                <path 
                  d="M 2 2 Q 12 14, 22 2" 
                  stroke="hsl(var(--foreground))" 
                  strokeWidth="2" 
                  fill="none"
                  className="opacity-50"
                />
              </svg>
            </div>
          </div>
        </div>
        
        {/* Right side - Photo */}
        <div className="flex flex-col items-center">
          {/* Circular photo frame */}
          <div className="relative">
            {/* Outer ring */}
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-foreground/20 p-2 bg-gradient-to-br from-primary/20 to-accent/20 shadow-2xl">
              <img 
                src={chhaviAvatar} 
                alt="Chhavi" 
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            
            {/* Decorative balloons around photo */}
            <Balloon 
              className="absolute -top-4 -right-4 animate-balloon-sway scale-75" 
              color="pink"
            />
            <Balloon 
              className="absolute -top-2 -left-6 animate-balloon-sway-alt scale-75" 
              color="coral"
            />
          </div>
          
          {/* Name badge below photo */}
          <div className="mt-4 bg-gradient-to-r from-primary via-accent to-primary text-primary-foreground px-8 py-2 rounded-full font-display text-xl shadow-lg">
            Dear Chhavi
          </div>
        </div>
      </div>
      
      {/* Corner decorations */}
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/30 rounded-tr-full" />
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-primary/20 rounded-tl-full" />
      
      {/* Diary Modal */}
      <DiaryModal isOpen={isDiaryOpen} onClose={() => setIsDiaryOpen(false)} />
    </div>
  );
};

export default Index;
