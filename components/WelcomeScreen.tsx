import React from 'react';
import { Scroll, Sword } from 'lucide-react';
import { Button } from './Button';

interface WelcomeScreenProps {
  onStart: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center space-y-8 animate-fade-in">
      <div className="relative p-8 border-4 border-history-gold rounded-xl bg-history-dark/50 backdrop-blur-sm shadow-2xl max-w-2xl w-full">
        <div className="absolute -top-6 -left-6 text-history-gold">
          <Scroll size={48} />
        </div>
        <div className="absolute -bottom-6 -right-6 text-history-gold">
          <Sword size={48} />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-serif font-black text-history-gold mb-4 tracking-wide uppercase drop-shadow-lg">
          Đại Việt Sử Ký
        </h1>
        <h2 className="text-xl md:text-2xl text-history-paper/90 font-serif mb-8 italic">
          Hào khí Đông A - Danh tướng Trần Hưng Đạo
        </h2>
        
        <p className="text-lg text-history-paper/80 mb-8 leading-relaxed font-sans">
          Chào mừng bạn đến với thử thách lịch sử. Hãy cùng ôn lại những trang sử hào hùng của dân tộc qua 6 câu hỏi về Hưng Đạo Đại Vương và chiến thắng Bạch Đằng oanh liệt.
        </p>

        <Button onClick={onStart} className="text-xl px-12 py-4">
          Bắt Đầu Thử Thách
        </Button>
      </div>
      
      <footer className="text-history-gold/40 text-sm font-serif mt-8">
        "Sông Đằng một dải dài ghê - Sóng hồng cuồn cuộn tuôn về bể Đông"
      </footer>
    </div>
  );
};