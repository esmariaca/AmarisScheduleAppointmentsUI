import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShiftFormComponent } from './shift-form.component';
import { ShiftService } from '../../services/shift.service';
import { of } from 'rxjs';
import { FormsModule } from '@angular/forms';

describe('ShiftFormComponent', () => {
  let component: ShiftFormComponent;
  let fixture: ComponentFixture<ShiftFormComponent>;
  let shiftServiceSpy: any;

  beforeEach(async () => {
    shiftServiceSpy = jasmine.createSpyObj('ShiftService', ['getBranches', 'registerShift']);
    
    await TestBed.configureTestingModule({
      imports: [ShiftFormComponent, FormsModule],
      providers: [{ provide: ShiftService, useValue: shiftServiceSpy }]
    }).compileComponents();

    shiftServiceSpy.getBranches.and.returnValue(of([]));
    fixture = TestBed.createComponent(ShiftFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debe limpiar el formulario después de un registro exitoso', () => {
    const mockResponse = { id: 1, identificationNumber: '123', branchId: 1 };
    shiftServiceSpy.registerShift.and.returnValue(of(mockResponse));

    component.newShift = { identificationNumber: '123', branchId: 1 };
    component.onSubmit();

    expect(component.newShift.identificationNumber).toBe('');
    expect(component.message).toContain('Turno agendado con éxito');
  });
});