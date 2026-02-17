import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShiftListComponent } from './shift-list.component';
import { ShiftService } from '../../services/shift.service';
import { of } from 'rxjs';

describe('ShiftListComponent', () => {
  let component: ShiftListComponent;
  let fixture: ComponentFixture<ShiftListComponent>;
  let shiftServiceSpy: any;

  beforeEach(async () => {
    shiftServiceSpy = jasmine.createSpyObj('ShiftService', ['getShifts']);
    
    await TestBed.configureTestingModule({
      imports: [ShiftListComponent],
      providers: [{ provide: ShiftService, useValue: shiftServiceSpy }]
    }).compileComponents();

    fixture = TestBed.createComponent(ShiftListComponent);
    component = fixture.componentInstance;
  });

  it('debe cargar los turnos al inicializar el componente', () => {
    const mockShifts = [{ id: 1, identificationNumber: '1010', status: 'Pending' }];
    shiftServiceSpy.getShifts.and.returnValue(of(mockShifts));

    fixture.detectChanges();

    expect(component.shifts.length).toBe(1);
    expect(component.shifts[0].identificationNumber).toBe('1010');
    expect(shiftServiceSpy.getShifts).toHaveBeenCalled();
  });
});