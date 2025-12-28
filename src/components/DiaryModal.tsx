import { X } from 'lucide-react';

interface DiaryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DiaryModal = ({ isOpen, onClose }: DiaryModalProps) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/20 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="animate-book-open relative mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Diary/Book */}
        <div className="relative bg-gradient-to-br from-pink-200 via-pink-100 to-pink-50 rounded-lg shadow-2xl p-1 max-w-sm">
          {/* Book binding */}
          <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-pink-400 to-pink-300 rounded-l-lg" />
          
          {/* Book spine dots */}
          <div className="absolute left-1.5 top-4 bottom-4 flex flex-col justify-evenly">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-1 h-1 rounded-full bg-pink-600/50" />
            ))}
          </div>
          
          {/* Page content */}
          <div className="ml-6 bg-gradient-to-br from-pink-50 to-white rounded-r-lg p-6 min-h-[280px] flex flex-col items-center justify-center relative overflow-hidden">
            {/* Close button */}
            <button 
              onClick={onClose}
              className="absolute top-2 right-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X size={20} />
            </button>
            
            {/* Page lines */}
            <div className="absolute inset-0 flex flex-col justify-evenly opacity-10 pointer-events-none px-6">
              {[...Array(10)].map((_, i) => (
                <div key={i} className="h-px bg-pink-400 ml-4" />
              ))}
            </div>
            
            {/* Content */}
            <div className="relative z-10 text-center space-y-4">
              <p className="font-display text-xl text-foreground/80">
                Ab ye kyun dekh rhi hai? 🙄
              </p>
              
              <div className="py-4">
                <p className="font-display text-3xl text-primary">
                  Happy Birthday
                </p>
                <p className="font-display text-2xl text-primary mt-1">
                  likhdiya vahi
                </p>
                <p className="font-display text-xl text-primary mt-1">
                  bahut hai 😝
                </p>
              </div>
              
              {/* Decorative hearts */}
              <div className="flex justify-center gap-2 pt-2">
                <span className="text-heart">♥</span>
                <span className="text-heart">♥</span>
                <span className="text-heart">♥</span>
              </div>
            </div>
            
            {/* Corner decoration */}
            <div className="absolute bottom-2 right-2 text-primary/30 font-display text-xs">
              ~ with love
            </div>
          </div>
        </div>
        
        {/* Shadow under book */}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-4 bg-foreground/10 blur-lg rounded-full" />
      </div>
    </div>
  );
};

export default DiaryModal;
