import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  sections = [
    {
      title: 'Knowledge Que.',
      description: '',
      imgUrl: '',
      path: '/knowledge',
      svg: './'
    },
    {
      title: 'Code Riddles',
      description: '',
      imgUrl: '',
      path: '/knowledge',
      svg: `<svg width="112" height="114" viewBox="0 0 112 114" fill="none" style="z-index: 5;" class="part1-card-img">
      <rect width="58" height="58" fill="var(--secondary)"></rect>
      <rect x="69" y="25" width="33" height="33" fill="var(--accent)" fill-opacity="0.6"></rect>
      <rect x="69" y="71" width="43" height="43" fill="var(--primary)" fill-opacity="0.2"></rect>
      <rect x="20" y="70" width="38" height="39" fill="var(--primary)"></rect>
      </svg>`
    },
    {
      title: 'Code Sessions',
      description: '',
      imgUrl: '',
      path: '/knowledge',
      svg: ''
    },
    {
      title: 'Statistics',
      description: '',
      imgUrl: '',
      path: '/knowledge',
      svg: ''
    },
    {
      title: 'Code Riddles',
      description: '',
      imgUrl: '',
      path: '/knowledge',
      svg: ''
    },
    {
      title: 'Code Riddles',
      description: '',
      imgUrl: '',
      path: '/knowledge',
      svg: ''
    },
    {
      title: 'Code Riddles',
      description: '',
      imgUrl: '',
      path: '/knowledge',
      svg: ''
    },
  ]

}
