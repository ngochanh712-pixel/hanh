import React, { useState } from 'react';
import { QUESTIONS } from './constants';
import { GameState, QuizState } from './types';
import { WelcomeScreen } from './components/WelcomeScreen';
import { QuizCard } from './components/QuizCard';
import { ResultScreen } from './components/ResultScreen';

const App: React.FC = () => {
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestionIndex: 0,
    score: 0,
    gameState: GameState.WELCOME,
    answers: {},
  });

  const handleStart = () => {
    setQuizState({
      currentQuestionIndex: 0,
      score: 0,
      gameState: GameState.PLAYING,
      answers: {},
    });
  };

  const handleAnswer = (isCorrect: boolean) => {
    const nextIndex = quizState.currentQuestionIndex + 1;
    
    // Update score if correct
    const newScore = isCorrect ? quizState.score + 1 : quizState.score;

    if (nextIndex < QUESTIONS.length) {
      setQuizState(prev => ({
        ...prev,
        score: newScore,
        currentQuestionIndex: nextIndex,
      }));
    } else {
      setQuizState(prev => ({
        ...prev,
        score: newScore,
        gameState: GameState.FINISHED,
      }));
    }
  };

  const handleRestart = () => {
    handleStart();
  };

  return (
    <div className="min-h-screen bg-history-dark bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] font-sans text-history-paper selection:bg-history-red selection:text-white">
      <div className="mx-auto max-w-4xl">
        {quizState.gameState === GameState.WELCOME && (
          <WelcomeScreen onStart={handleStart} />
        )}

        {quizState.gameState === GameState.PLAYING && (
          <QuizCard
            question={QUESTIONS[quizState.currentQuestionIndex]}
            currentQuestionIndex={quizState.currentQuestionIndex}
            totalQuestions={QUESTIONS.length}
            onAnswer={handleAnswer}
          />
        )}

        {quizState.gameState === GameState.FINISHED && (
          <ResultScreen
            score={quizState.score}
            total={QUESTIONS.length}
            onRestart={handleRestart}
          />
        )}
      </div>
    </div>
  );
};

export default App;