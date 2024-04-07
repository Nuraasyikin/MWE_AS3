import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnimalsCalendarPage } from './animals-calendar.page';

describe('AnimalsCalendarPage', () => {
  let component: AnimalsCalendarPage;
  let fixture: ComponentFixture<AnimalsCalendarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalsCalendarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
