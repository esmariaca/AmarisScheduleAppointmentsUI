import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ShiftService } from './shift.service';

describe('ShiftService', () => {
  let service: ShiftService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ShiftService]
    });
    service = TestBed.inject(ShiftService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('debe obtener la lista de sucursales (GET)', () => {
    const mockBranches = [{ id: 1, name: 'Norte', address: 'Calle 1' }];

    service.getBranches().subscribe(branches => {
      expect(branches.length).toBe(1);
      expect(branches).toEqual(mockBranches);
    });

    const req = httpMock.expectOne('https://localhost:7136/api/branch');
    expect(req.request.method).toBe('GET');
    req.flush(mockBranches);
  });

  it('debe registrar un nuevo turno (POST)', () => {
    const newShift = { identificationNumber: '123', branchId: 1 };

    service.registerShift(newShift as any).subscribe(res => {
      expect(res).toEqual(newShift as any);
    });

    const req = httpMock.expectOne('https://localhost:7136/api/shift');
    expect(req.request.method).toBe('POST');
    req.flush(newShift);
  });
});