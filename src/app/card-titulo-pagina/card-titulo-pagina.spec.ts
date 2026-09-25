import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTituloPagina } from './card-titulo-pagina';

describe('CardTituloPagina', () => {
  let component: CardTituloPagina;
  let fixture: ComponentFixture<CardTituloPagina>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardTituloPagina],
    }).compileComponents();

    fixture = TestBed.createComponent(CardTituloPagina);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
