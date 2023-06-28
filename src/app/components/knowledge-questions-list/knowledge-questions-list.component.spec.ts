import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgeQuestionsListComponent } from './knowledge-questions-list.component';

describe('KnowledgeQuestionsListComponent', () => {
  let component: KnowledgeQuestionsListComponent;
  let fixture: ComponentFixture<KnowledgeQuestionsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnowledgeQuestionsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KnowledgeQuestionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
