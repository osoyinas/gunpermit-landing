import { Question } from './Topic'

export interface Quiz {
    id: number;
    title: string;
    description: string;
    number: number;
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

export interface QuizResult {
    quiz: string,
    correct_answers: number,
    score: number,
    passed: number,
    total_questions: number,
}

export interface QuizCategory {
    id: number
    title: string
    description: string
    tag: string
    total_quizzes: number
    failed_quizzes: number
    passed_quizzes: number
}
