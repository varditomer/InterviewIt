
export interface KnowledgeQuestionQuiz extends KnowledgeQuestionQuizParams {
  questions: KnowledgeQuestion[]
  created_at?: Date,
}
export interface KnowledgeQuestionQuizParams {
  subject: string
  length: number,
}

export interface KnowledgeQuestion {
    id?: string,
    text: string,
    code: {
      language: string,
      content: string
    },
    options: string[],
    answer: string,
    ansIdx: number
}