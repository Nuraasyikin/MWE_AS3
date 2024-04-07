import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnimalsDiaryPage } from './animals-diary.page';

describe('AnimalsDiaryPage', () => {
  let component: AnimalsDiaryPage;
  let fixture: ComponentFixture<AnimalsDiaryPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalsDiaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
