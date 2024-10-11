import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserQuestionsPage } from './user-questions.page';

describe('UserQuestionsPage', () => {
  let component: UserQuestionsPage;
  let fixture: ComponentFixture<UserQuestionsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UserQuestionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
