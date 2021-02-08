import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeditacaoComponent } from './meditacao.component';

describe('MeditacaoComponent', () => {
  let component: MeditacaoComponent;
  let fixture: ComponentFixture<MeditacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeditacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeditacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
