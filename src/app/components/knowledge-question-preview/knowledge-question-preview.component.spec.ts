import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgeQuestionPreviewComponent } from './knowledge-question-preview.component';

describe('KnowledgeQuestionPreviewComponent', () => {
  let component: KnowledgeQuestionPreviewComponent;
  let fixture: ComponentFixture<KnowledgeQuestionPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnowledgeQuestionPreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KnowledgeQuestionPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
