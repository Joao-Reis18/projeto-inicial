import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPadraoResumoFin } from './card-padrao-resumo-fin';

describe('CardPadraoResumoFin', () => {
  let component: CardPadraoResumoFin;
  let fixture: ComponentFixture<CardPadraoResumoFin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPadraoResumoFin],
    }).compileComponents();

    fixture = TestBed.createComponent(CardPadraoResumoFin);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
