import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Shift, Branch } from '../models/shift.model';

@Injectable({ providedIn: 'root' })
export class ShiftService {
  private apiUrl = 'https://localhost:7136/api/shift'; 
  private branchUrl = 'https://localhost:7136/api/branch';

  constructor(private http: HttpClient) { }

  getBranches(): Observable<Branch[]> {
    return this.http.get<Branch[]>(this.branchUrl);
  }

  getShifts(): Observable<Shift[]> {
    return this.http.get<Shift[]>(this.apiUrl);
  }

  registerShift(shift: Shift): Observable<Shift> {
    return this.http.post<Shift>(this.apiUrl, shift);
  }
}