export interface AnswerOption {
  id: string;
  text: string;
}

export interface Question {
  id: number;
  text: string;
  options: AnswerOption[];
  correctAnswerId: string;
  explanation?: string; // Optional static explanation
}

export enum GameState {
  WELCOME = 'WELCOME',
  PLAYING = 'PLAYING',
  FINISHED = 'FINISHED',
}

export interface QuizState {
  currentQuestionIndex: number;
  score: number;
  gameState: GameState;
  answers: Record<number, string>; // map question ID to selected answer ID
}