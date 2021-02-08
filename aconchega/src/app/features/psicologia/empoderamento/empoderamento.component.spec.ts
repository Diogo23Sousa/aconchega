import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpoderamentoComponent } from './empoderamento.component';

describe('EmpoderamentoComponent', () => {
  let component: EmpoderamentoComponent;
  let fixture: ComponentFixture<EmpoderamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpoderamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpoderamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
