import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Options1Component } from './options1.component';

describe('Options1Component', () => {
  let component: Options1Component;
  let fixture: ComponentFixture<Options1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Options1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Options1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
