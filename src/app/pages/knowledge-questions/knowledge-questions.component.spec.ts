import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgeQuestionsComponent } from './knowledge-questions.component';

describe('KnowledgeQuestionsComponent', () => {
  let component: KnowledgeQuestionsComponent;
  let fixture: ComponentFixture<KnowledgeQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnowledgeQuestionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KnowledgeQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
