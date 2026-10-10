import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioFinanceiro } from './relatorio-financeiro';

describe('RelatorioFinanceiro', () => {
  let component: RelatorioFinanceiro;
  let fixture: ComponentFixture<RelatorioFinanceiro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelatorioFinanceiro],
    }).compileComponents();

    fixture = TestBed.createComponent(RelatorioFinanceiro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
