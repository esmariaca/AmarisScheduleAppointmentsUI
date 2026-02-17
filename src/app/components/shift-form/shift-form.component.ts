import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ShiftService } from '../../services/shift.service';
import { Shift, Branch } from '../../models/shift.model';

@Component({
  selector: 'app-shift-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './shift-form.component.html',
  styleUrl: './shift-form.component.css'
})
export class ShiftFormComponent implements OnInit {
  branches: Branch[] = [];
  newShift: Shift = { identificationNumber: '', branchId: 0 };
  message: string = '';
  isError: boolean = false;

  constructor(private shiftService: ShiftService) {}

  ngOnInit(): void {
    this.shiftService.getBranches().subscribe({
      next: (data) => this.branches = data,
      error: (err) => console.error('Error cargando sucursales', err)
    });
  }

  onSubmit(): void {
    this.shiftService.registerShift(this.newShift).subscribe({
      next: (res) => {
        this.message = "Turno agendado con éxito. Tienes 15 minutos para llegar.";
        this.isError = false;
        this.newShift = { identificationNumber: '', branchId: 0 };
      },
      error: (err) => {
        this.message = err.error || "Error al agendar el turno";
        this.isError = true;
      }
    });
  }
}