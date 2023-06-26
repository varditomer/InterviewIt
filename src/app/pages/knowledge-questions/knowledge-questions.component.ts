import { Component } from '@angular/core';

@Component({
  selector: 'app-knowledge-questions',
  templateUrl: './knowledge-questions.component.html',
  styleUrls: ['./knowledge-questions.component.scss']
})
export class KnowledgeQuestionsComponent {
  quizTopics: string[] = ['Math', 'Science', 'History', 'Geography'];

}
