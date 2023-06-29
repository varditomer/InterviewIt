import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { KnowledgeQuestion, KnowledgeQuestionQuizParams } from 'src/app/models/knowledge-questions.interface';
import { NgForm, NgModel } from '@angular/forms';
import { KnowledgeQuestionService } from 'src/app/service/knowledge-question.service';


@Component({
  selector: 'app-knowledge-questions',
  templateUrl: './knowledge-questions.component.html',
  styleUrls: ['./knowledge-questions.component.scss']
})
export class KnowledgeQuestionsComponent {
  constructor(
    private http: HttpClient,
    private knowledgeQuestionService: KnowledgeQuestionService
  ) { }

  quizSubjects: string[] = ['rest-api', 'reactjs', 'javascript']
  questions: KnowledgeQuestion[] = []
  quizSubject = ''

  async onGenerateQuiz(generateQuizForm: NgForm) {
    const quizParams: KnowledgeQuestionQuizParams = generateQuizForm.value
    this.questions = await this.knowledgeQuestionService.generateQuiz(quizParams)
  }

}
