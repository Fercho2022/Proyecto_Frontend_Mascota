import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEditarMascotasComponent } from './agregar-editar-mascotas.component';

describe('AgregarEditarMascotasComponent', () => {
  let component: AgregarEditarMascotasComponent;
  let fixture: ComponentFixture<AgregarEditarMascotasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarEditarMascotasComponent]
    });
    fixture = TestBed.createComponent(AgregarEditarMascotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
