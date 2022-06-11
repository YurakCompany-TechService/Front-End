import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkActiveComponent } from './work-active.component';

describe('WorkActiveComponent', () => {
  let component: WorkActiveComponent;
  let fixture: ComponentFixture<WorkActiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkActiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
