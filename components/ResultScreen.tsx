import React from 'react';
import { Award, RefreshCw } from 'lucide-react';
import { Button } from './Button';
import { QUESTIONS } from '../constants';

interface ResultScreenProps {
  score: number;
  total: number;
  onRestart: () => void;
}

export const ResultScreen: React.FC<ResultScreenProps> = ({ score, total, onRestart }) => {
  const percentage = (score / total) * 100;
  
  let message = "";
  let title = "";

  if (percentage === 100) {
    title = "Xuất Sắc!";
    message = "Bạn xứng đáng là con cháu Lạc Hồng, am hiểu lịch sử nước nhà!";
  } else if (percentage >= 50) {
    title = "Khá Tốt!";
    message = "Bạn đã nắm được những kiến thức cơ bản. Hãy cố gắng thêm nhé!";
  } else {
    title = "Cần Cố Gắng";
    message = "Hãy ôn lại lịch sử để hiểu thêm về cha ông ta.";
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 animate-fade-in">
      <div className="bg-history-paper text-history-dark rounded-xl p-8 max-w-md w-full shadow-2xl border-4 border-history-gold text-center">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-history-red rounded-full border-4 border-history-gold">
            <Award size={64} className="text-history-gold" />
          </div>
        </div>

        <h2 className="text-3xl font-serif font-bold text-history-red mb-2">{title}</h2>
        <p className="text-history-dark/80 mb-6 font-sans">{message}</p>

        <div className="text-6xl font-black text-history-dark mb-2">
          {score}<span className="text-3xl text-history-dark/50">/{total}</span>
        </div>
        <p className="uppercase tracking-widest text-sm font-bold mb-8">Câu trả lời đúng</p>

        <Button onClick={onRestart} variant="primary" fullWidth className="flex items-center justify-center gap-2">
          <RefreshCw size={20} />
          Chơi Lại
        </Button>
      </div>
    </div>
  );
};