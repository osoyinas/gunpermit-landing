import { Question } from './Topic'

export interface Quiz {
    id: number;
    title: string;
    description: string;
}

export interface QuizAttempt extends Quiz {
    passed?: boolean;
    score?: number;
}

export interface CompleteQuiz extends QuizAttempt {
    questions: Question[];
}

export interface QuizAnswer {
    question: number;
    answer?: number;
}
export interface QuizResponse {
    answers: QuizAnswer[];
}