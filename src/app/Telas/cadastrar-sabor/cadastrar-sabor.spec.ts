import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarSabor } from './cadastrar-sabor';

describe('CadastrarSabor', () => {
  let component: CadastrarSabor;
  let fixture: ComponentFixture<CadastrarSabor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastrarSabor],
    }).compileComponents();

    fixture = TestBed.createComponent(CadastrarSabor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
