import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadraoCard } from './padrao-card';

describe('PadraoCard', () => {
  let component: PadraoCard;
  let fixture: ComponentFixture<PadraoCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PadraoCard],
    }).compileComponents();

    fixture = TestBed.createComponent(PadraoCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
