import { Component, Input, OnInit } from '@angular/core';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('javascript', javascript);

import { KnowledgeQuestion } from 'src/app/models/knowledge-questions.interface';

@Component({
  selector: 'app-knowledge-question-preview',
  templateUrl: './knowledge-question-preview.component.html',
  styleUrls: ['./knowledge-question-preview.component.scss'],
})
export class KnowledgeQuestionPreviewComponent implements OnInit {
  @Input() question!: KnowledgeQuestion

  highlightedCode: any

  ngOnInit() {
    if (this.question.code.content.length) {
      this.highlightedCode = hljs.highlight(this.question.code.content, { language: 'javascript', ignoreIllegals: true }).value;
    }
  }



}
