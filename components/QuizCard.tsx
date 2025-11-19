import React, { useState, useEffect } from 'react';
import { Question } from '../types';
import { Button } from './Button';
import { CheckCircle, XCircle, BookOpen, ArrowRight } from 'lucide-react';
import { getHistoricalContext } from '../services/geminiService';

interface QuizCardProps {
  question: Question;
  currentQuestionIndex: number;
  totalQuestions: number;
  onAnswer: (isCorrect: boolean) => void;
}

export const QuizCard: React.FC<QuizCardProps> = ({
  question,
  currentQuestionIndex,
  totalQuestions,
  onAnswer
}) => {
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [aiContext, setAiContext] = useState<string | null>(null);
  const [isLoadingAi, setIsLoadingAi] = useState(false);

  // Reset state when question changes
  useEffect(() => {
    setSelectedOptionId(null);
    setIsSubmitted(false);
    setAiContext(null);
    setIsLoadingAi(false);
  }, [question.id]);

  const handleOptionClick = (id: string) => {
    if (isSubmitted) return;
    setSelectedOptionId(id);
  };

  const handleSubmit = () => {
    if (!selectedOptionId || isSubmitted) return;
    setIsSubmitted(true);
  };

  const handleNext = () => {
    const isCorrect = selectedOptionId === question.correctAnswerId;
    onAnswer(isCorrect);
  };

  const handleAskAI = async () => {
    if (isLoadingAi || aiContext) return;
    setIsLoadingAi(true);
    
    const correctOption = question.options.find(o => o.id === question.correctAnswerId);
    if (correctOption) {
        const context = await getHistoricalContext(question.text, correctOption.text);
        setAiContext(context);
    }
    setIsLoadingAi(false);
  };

  const isCorrect = selectedOptionId === question.correctAnswerId;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 w-full max-w-3xl mx-auto">
      {/* Progress Bar */}
      <div className="w-full mb-6 flex items-center gap-4">
        <div className="flex-grow h-2 bg-history-paper/20 rounded-full overflow-hidden">
            <div 
                className="h-full bg-history-gold transition-all duration-500"
                style={{ width: `${((currentQuestionIndex) / totalQuestions) * 100}%` }}
            />
        </div>
        <span className="text-history-gold font-mono font-bold">
            {currentQuestionIndex + 1}/{totalQuestions}
        </span>
      </div>

      <div className="bg-history-paper w-full rounded-xl shadow-2xl border-2 border-history-gold overflow-hidden">
        {/* Question Header */}
        <div className="bg-history-red p-6 border-b-4 border-history-gold">
          <h3 className="text-xl md:text-2xl font-serif font-bold text-history-paper text-center leading-relaxed">
            {question.text}
          </h3>
        </div>

        {/* Options */}
        <div className="p-6 space-y-3">
          {question.options.map((option) => {
            let buttonStyle = "bg-white hover:bg-gray-50 border-gray-200 text-gray-800";
            const isSelected = selectedOptionId === option.id;
            const isCorrectAnswer = option.id === question.correctAnswerId;

            if (isSubmitted) {
              if (isCorrectAnswer) {
                buttonStyle = "bg-green-100 border-green-500 text-green-800";
              } else if (isSelected && !isCorrectAnswer) {
                buttonStyle = "bg-red-100 border-red-500 text-red-800";
              } else {
                buttonStyle = "opacity-50 bg-gray-100 border-gray-200";
              }
            } else if (isSelected) {
              buttonStyle = "bg-history-gold/20 border-history-gold text-history-dark font-bold";
            }

            return (
              <button
                key={option.id}
                onClick={() => handleOptionClick(option.id)}
                disabled={isSubmitted}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 flex justify-between items-center ${buttonStyle}`}
              >
                <span className="text-lg"><span className="font-bold mr-2">{option.id}.</span> {option.text}</span>
                {isSubmitted && isCorrectAnswer && <CheckCircle className="text-green-600" />}
                {isSubmitted && isSelected && !isCorrectAnswer && <XCircle className="text-red-600" />}
              </button>
            );
          })}
        </div>

        {/* Footer Actions */}
        <div className="p-6 bg-history-dark/5 border-t border-history-dark/10 flex flex-col md:flex-row justify-between items-center gap-4">
          {!isSubmitted ? (
            <Button 
                onClick={handleSubmit} 
                disabled={!selectedOptionId} 
                fullWidth
                className="md:w-auto ml-auto"
            >
              Trả Lời
            </Button>
          ) : (
            <div className="w-full flex flex-col md:flex-row gap-3 justify-between animate-fade-in">
                 <Button 
                    variant="secondary"
                    onClick={handleAskAI}
                    disabled={isLoadingAi}
                    className="flex items-center justify-center gap-2"
                 >
                    <BookOpen size={18} />
                    {isLoadingAi ? "Đang hỏi Sử quan..." : "Giải thích (AI)"}
                 </Button>
                 
                 <Button 
                    onClick={handleNext}
                    className="flex items-center justify-center gap-2"
                 >
                    Câu Tiếp Theo <ArrowRight size={18} />
                 </Button>
            </div>
          )}
        </div>
        
        {/* AI Explanation Box */}
        {aiContext && (
            <div className="p-6 bg-yellow-50 border-t-2 border-history-gold/30 text-history-dark animate-fade-in">
                <h4 className="font-bold font-serif mb-2 flex items-center gap-2 text-history-red">
                    <BookOpen size={16} /> Lời Bình Của Sử Quan AI:
                </h4>
                <p className="italic text-sm leading-relaxed">
                    {aiContext}
                </p>
            </div>
        )}
      </div>
    </div>
  );
};