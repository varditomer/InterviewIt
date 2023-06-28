import { Component, Input } from '@angular/core';
import { Question } from 'src/app/models/QuestionInterface';

@Component({
  selector: 'app-knowledge-questions-list',
  templateUrl: './knowledge-questions-list.component.html',
  styleUrls: ['./knowledge-questions-list.component.scss']
})
export class KnowledgeQuestionsListComponent {
  @Input() questions!: Question[] | null

}
