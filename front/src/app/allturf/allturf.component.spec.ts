import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllturfComponent } from './allturf.component';

describe('AllturfComponent', () => {
  let component: AllturfComponent;
  let fixture: ComponentFixture<AllturfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllturfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllturfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
