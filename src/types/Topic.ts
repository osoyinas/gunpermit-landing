/* eslint-disable no-use-before-define */
export interface Topic {
    id: number;
    title: string;
    description: string;
}

export interface Question {
    id: number;
    topic: number;
    question: string;
    answers: Answer[];
}

export interface Answer {
    answer: string;
    is_true: boolean;
}

export interface PdfType {
    id: number;
    name: string;
    created_at: string;
    topic: Topic;
}
