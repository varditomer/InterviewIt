import { TestBed } from '@angular/core/testing';

import { KnowledgeQuestionService } from './knowledge-question.service';

describe('KnowledgeQuestionService', () => {
  let service: KnowledgeQuestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KnowledgeQuestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
