import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRelatorio } from './card-relatorio';

describe('CardRelatorio', () => {
  let component: CardRelatorio;
  let fixture: ComponentFixture<CardRelatorio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardRelatorio],
    }).compileComponents();

    fixture = TestBed.createComponent(CardRelatorio);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
