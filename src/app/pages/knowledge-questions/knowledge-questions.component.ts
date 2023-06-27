import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-knowledge-questions',
  templateUrl: './knowledge-questions.component.html',
  styleUrls: ['./knowledge-questions.component.scss']
})
export class KnowledgeQuestionsComponent implements OnInit {
  constructor(private http: HttpClient) { }

  quizTopics: string[] = ['Math', 'Science', 'History', 'Geography']

  ngOnInit() {
    const fileUrl = 'https://raw.githubusercontent.com/Ebazhanov/linkedin-skill-assessments-quizzes/main/reactjs/reactjs-quiz.md';

    this.http.get(fileUrl, { responseType: 'text' })
      .subscribe((response) => {
        const markdownContent = response
        // Process the array of questions as needed
        const questions = this.extractQuestionsFromMarkdown(markdownContent)
        console.log(`questions:`, questions)
        // console.log(`question txt`, questions[0].text)
        // questions[0].options.forEach((option: string, idx: number) => {
        //   console.log(`option ${idx + 1}:`, option)
        // });
        // console.log(`questions answer`, questions[0].answer)
      }, (error) => {
        console.error('Error fetching Markdown file:', error)
      });
  }

  extractQuestionsFromMarkdown(markdownContent: string): any[] {
    const questions: any[] = [];
    console.log(`markdownContent:`, markdownContent)

    // Split the Markdown content by lines
    const lines = markdownContent.split('\n');

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      // Identify lines that indicate the start of a question text(based on Markdown structure)
      if (line.startsWith('#### Q')) {
        // building question obj that contains each part of the Q & A
        const question = {
          text: line.replace('#### ', '').trim(),
          code: {
            language: 'javascript',
            content: ''
          },
          options: [] as string[],
          answer: '',
        }

        // Extract options for the question
        for (let j = i + 1; j < lines.length; j++) {
          const optionLine = lines[j];

          // Identify lines that indicate an option (customize this based on your Markdown structure)
          if (optionLine.startsWith('- [ ]')) {
            const option: string = optionLine.replace('- [ ]', '').replace('`', '').replace('`', '').trim(); // Explicitly declare the type as string
            question.options.push(option);
            continue
          }

          // Identify the line that indicates the correct answer (customize this based on your Markdown structure)
          if (optionLine.startsWith('- [x]')) {
            const option: string = optionLine.replace('- [x]', '').replace('`', '').replace('`', '').trim(); // Explicitly declare the type as string
            question.options.push(option)
            question.answer = optionLine.replace('- [x]', '').replace('`', '').replace('`', '').trim();
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

    return questions;
  }
}
