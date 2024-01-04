export interface SubtopicType {
    id: number;
    name: string;
    questions: number;
    topic: number;
}
export interface TopicType {
    id: number;
    name: string;
    subtopics: SubtopicType[];
    questions: number;
}
export interface PdfType {
    id: number;
    name: string;
    created_at: string;
    topic: TopicType;
}
