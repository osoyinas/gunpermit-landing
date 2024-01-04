/* eslint-disable no-use-before-define */
export interface Topic {
    id: number;
    name: string;
    subtopics: Subtopic[];
    questions: Question[];
}

export interface Question {
    id: number;
    topic: number;
    subtopic: number;
    question: string;
    answers: Answer[];
}

export interface Answer {
    answer: string;
    is_true: boolean;
}

export interface Subtopic {
    id: number;
    name: string;
    questions: number;
    topic: number;
}
export interface PdfType {
    id: number;
    name: string;
    created_at: string;
    topic: Topic;
}
