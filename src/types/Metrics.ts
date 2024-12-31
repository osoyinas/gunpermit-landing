export interface QuizAttemptResult {
    id: number
    date: string
    score: string // ex: 3/4
    mark: number // ex  75
    passed: boolean
}

export interface TopicPerformance {
    topic: string
    mark: number
    full_mark: number
}

export interface TopicData {
    answered: number
    total: number
    correct: number
    incorrect: number
}

export interface UserQuestionAttemptsResponse {
    topics: { [key: string]: TopicData }
    answered: number
    correct: number
    incorrect: number
    total: number
}
