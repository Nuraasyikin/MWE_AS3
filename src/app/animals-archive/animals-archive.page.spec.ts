import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnimalsArchivePage } from './animals-archive.page';

describe('AnimalsArchivePage', () => {
  let component: AnimalsArchivePage;
  let fixture: ComponentFixture<AnimalsArchivePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalsArchivePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
