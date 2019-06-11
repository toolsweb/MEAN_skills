import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionEditListComponent } from './question-edit-list.component';

describe('QuestionEditListComponent', () => {
  let component: QuestionEditListComponent;
  let fixture: ComponentFixture<QuestionEditListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionEditListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionEditListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
