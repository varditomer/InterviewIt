export interface Question {
    id?: string,
    text: string,
    code: {
      language: string,
      content: string
    },
    options: string[],
    answer: string,
}