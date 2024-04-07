import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnimalsDetectPage } from './animals-detect.page';

describe('AnimalsDetectPage', () => {
  let component: AnimalsDetectPage;
  let fixture: ComponentFixture<AnimalsDetectPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalsDetectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
