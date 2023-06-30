import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { KnowledgeQuestion, KnowledgeQuestionQuiz, KnowledgeQuestionQuizParams } from '../models/knowledge-questions.interface';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KnowledgeQuestionService {

  constructor(
    private http: HttpClient
  ) { }

  public generateQuiz = async (quizParams: KnowledgeQuestionQuizParams) => {
    const newQuiz: KnowledgeQuestionQuiz = {
      subject: quizParams.subject,
      length: quizParams.length,
      questions: await this._getQuizQuestions(quizParams.subject, quizParams.length)
    }
    return newQuiz.questions
  }

  private async _getQuizQuestions(subject: string, length: number): Promise<KnowledgeQuestion[]> {
    const fileUrl = `https://raw.githubusercontent.com/Ebazhanov/linkedin-skill-assessments-quizzes/main/${subject}/${subject}-quiz.md`;

    try {
      const markdownContent = await firstValueFrom(this.http.get(fileUrl, { responseType: 'text' }));
      const questions = this._extractQuestionsFromMarkdown(markdownContent, length);
      return questions;
    } catch (error) {
      console.error('Error fetching Markdown file:', error)
      return [] as KnowledgeQuestion[]
    }
  }

  private _extractQuestionsFromMarkdown(markdownContent: string, length: number) {
    const questions: KnowledgeQuestion[] = []

    // Split the Markdown content by lines
    const lines = markdownContent.split('\n');

    for (let i = 0; i < lines.length; i++) {
      if (questions.length === length) return questions
      const line = lines[i];

      // Identify lines that indicate the start of a question text(based on Markdown structure)
      if (line.startsWith('#### Q')) {
        // building question obj that contains each part of the Q & A
        const question: KnowledgeQuestion = {
          text: line.replace('#### ', '').trim(),
          code: {
            language: 'javascript',
            content: ''
          },
          options: [],
          answer: '',
          ansIdx: -1
        }

        let currAnsIdx = 0
        // Extract options for the question
        for (let j = i + 1; j < lines.length; j++) {
          const optionLine = lines[j]

          // Identify lines that indicate an option (customize this based on your Markdown structure)
          if (optionLine.startsWith('- [ ]')) {
            const option: string = optionLine.replace('- [ ]', '').replace('`', '').replace('`', '').trim(); // Explicitly declare the type as string
            question.options.push(option);
            currAnsIdx++
            continue
          }

          // Identify the line that indicates the correct answer (customize this based on your Markdown structure)
          if (optionLine.startsWith('- [x]')) {
            const option: string = optionLine.replace('- [x]', '').replace('`', '').replace('`', '').trim(); // Explicitly declare the type as string
            question.options.push(option)
            question.answer = optionLine.replace('- [x]', '').replace('`', '').replace('`', '').trim()
            question.ansIdx = currAnsIdx
            continue
          }

          if (optionLine.startsWith('```j')) {
            for (let k = j + 1; k < lines.length; k++) {
              const codeLine = lines[k]
              if (codeLine.startsWith('```')) break
              j++
              question.code.content += codeLine + '\n'
            }
          }
          if (optionLine.startsWith('#### Q')) break
          i++
        }
        questions.push(question)
      }

    }
    return questions

  }

}
