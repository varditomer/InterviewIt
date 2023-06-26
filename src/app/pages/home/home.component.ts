import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  sections = [
    {
      title: 'Knowledge Questions',
      description: '',
      imgUrl: '',
      path: '/knowledge',
      svg: './'
    }
  ]

}
