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
export class KnowledgeQuestionsComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private knowledgeQuestionService: KnowledgeQuestionService
  ) { }

  quizSubjects: string[] = ['rest-api', 'reactjs', 'javascript']
  questions: KnowledgeQuestion[] = []
  quizSubject = ''
  quizParams: KnowledgeQuestionQuizParams = {
    subject: 'reactjs',
    length: 5
  }

  // async onGenerateQuiz(generateQuizForm: NgForm) {
  //   this.quizParams = generateQuizForm.value
  //   this.questions = await this.knowledgeQuestionService.generateQuiz(this.quizParams)
  // }

  async ngOnInit() {
    this.questions = await this.knowledgeQuestionService.generateQuiz(this.quizParams)
  }

}
