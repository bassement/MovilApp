import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomHabitsPage } from './custom-habits.page';

describe('CustomHabitsPage', () => {
  let component: CustomHabitsPage;
  let fixture: ComponentFixture<CustomHabitsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomHabitsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
