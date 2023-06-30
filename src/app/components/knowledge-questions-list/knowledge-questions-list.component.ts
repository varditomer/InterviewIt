import { Component, Input } from '@angular/core';
import { KnowledgeQuestion, KnowledgeQuestionQuizParams } from 'src/app/models/knowledge-questions.interface';

@Component({
  selector: 'app-knowledge-questions-list',
  templateUrl: './knowledge-questions-list.component.html',
  styleUrls: ['./knowledge-questions-list.component.scss']
})
export class KnowledgeQuestionsListComponent {
  @Input() questions!: KnowledgeQuestion[]
  @Input() quizParams!: KnowledgeQuestionQuizParams

  selectedAnswers: number[] = []

  submitQuiz() {
    console.log(`this.selectedAnswers:`, this.selectedAnswers)
  }
}
