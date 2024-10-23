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
