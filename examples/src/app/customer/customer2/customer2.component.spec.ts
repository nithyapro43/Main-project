import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Customer2Component } from './customer2.component';

describe('Customer2Component', () => {
  let component: Customer2Component;
  let fixture: ComponentFixture<Customer2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Customer2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Customer2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
