import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AlgorithmDetailComponent } from './algorithm-detail.component';

describe('AlgorithmDetailComponent', () => {
  let component: AlgorithmDetailComponent;
  let fixture: ComponentFixture<AlgorithmDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AlgorithmDetailComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgorithmDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
