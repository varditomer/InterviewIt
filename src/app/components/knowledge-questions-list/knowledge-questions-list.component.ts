import { Component, Input } from '@angular/core';
import { KnowledgeQuestion } from 'src/app/models/knowledge-questions.interface';

@Component({
  selector: 'app-knowledge-questions-list',
  templateUrl: './knowledge-questions-list.component.html',
  styleUrls: ['./knowledge-questions-list.component.scss']
})
export class KnowledgeQuestionsListComponent {
  @Input() questions!: KnowledgeQuestion[] | null

}
