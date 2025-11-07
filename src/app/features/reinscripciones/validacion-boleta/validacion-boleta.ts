import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-validacion-boleta',
  imports: [CommonModule, FormsModule],
  templateUrl: './validacion-boleta.html',
  styles: ``,
})
export class ValidacionBoleta {
  filtroNombre = '';
  filtroNivel = '';
  filtroEstado = '';

  alumnos = [
    {
      nombre: 'Carlos Hernández',
      matricula: 'A0012345',
      nivelAnterior: 'Básico 1',
      nivelSolicitado: 'Básico 2',
      promedio: 85.5,
      fechaRegistro: '01/11/2025',
      estado: 'Pendiente',
      archivo: 'Boleta_Basico1.pdf',
      archivoUrl: 'https://tuservidor.com/boletas/Boleta_Basico1.pdf',
      fechaEnvio: '2025-10-25',
      observaciones: ''
    },
    {
      nombre: 'Ana Martínez',
      matricula: 'A0012346',
      nivelAnterior: 'Intermedio 1',
      nivelSolicitado: 'Intermedio 2',
      promedio: 92.0,
      fechaRegistro: '30/10/2025',
      estado: 'Aprobado',
      archivo: 'Boleta_Intermedio1.pdf',
      archivoUrl: 'https://tuservidor.com/boletas/Boleta_Intermedio1.pdf',
      fechaEnvio: '2025-10-20',
      observaciones: ''
    }
  ];

  selectedAlumno: any = null;

  alumnosFiltrados() {
    return this.alumnos.filter(alumno =>
      alumno.nombre.toLowerCase().includes(this.filtroNombre.toLowerCase()) &&
      (this.filtroNivel === '' || alumno.nivelSolicitado === this.filtroNivel) &&
      (this.filtroEstado === '' || alumno.estado === this.filtroEstado)
    );
  }

  verBoleta(alumno: any) {
    this.selectedAlumno = { ...alumno };
  }

  aprobarAlumno(alumno: any) {
    alumno.estado = 'Aprobado';
  }

  rechazarAlumno(alumno: any) {
    alumno.estado = 'Rechazado';
  }
}
