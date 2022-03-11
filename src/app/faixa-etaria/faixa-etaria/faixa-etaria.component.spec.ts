import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaixaEtariaComponent } from './faixa-etaria.component';

describe('FaixaEtariaComponent', () => {
  let component: FaixaEtariaComponent;
  let fixture: ComponentFixture<FaixaEtariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaixaEtariaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaixaEtariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
