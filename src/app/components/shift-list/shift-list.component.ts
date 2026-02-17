import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShiftService } from '../../services/shift.service';
import { Shift } from '../../models/shift.model';

@Component({
  selector: 'app-shift-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shift-list.component.html',
  styleUrl: './shift-list.component.css'
})
export class ShiftListComponent implements OnInit {
  shifts: Shift[] = [];

  constructor(private shiftService: ShiftService) {}

  ngOnInit(): void {
    this.loadShifts();
  }

  loadShifts(): void {
    this.shiftService.getShifts().subscribe({
      next: (data) => this.shifts = data,
      error: (err) => console.error('Error al cargar turnos', err)
    });
  }
}