import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-validacion-doc',
  imports: [CommonModule, FormsModule],
  templateUrl: './validacion-doc.html',
})
export class ValidacionDoc {

  filtroTexto: string = '';
  filtroEstado: string = '';


  documentos = [
    { nombre: 'Juan Pérez', control: '2023001', documentos: 3, fecha: '2025-10-01', estado: 'pendiente' },
    { nombre: 'María López', control: '2023002', documentos: 2, fecha: '2025-10-05', estado: 'aprobado' },
    { nombre: 'Carlos Ruiz', control: '2023003', documentos: 1, fecha: '2025-10-08', estado: 'rechazado' }
  ];


  documentoSeleccionado: any = null;
  observaciones: string = '';


  get documentosFiltrados() {
    return this.documentos.filter(doc => {
      const coincideTexto =
        this.filtroTexto === '' ||
        doc.nombre.toLowerCase().includes(this.filtroTexto.toLowerCase()) ||
        doc.control.toLowerCase().includes(this.filtroTexto.toLowerCase());
      const coincideEstado =
        this.filtroEstado === '' || doc.estado === this.filtroEstado;
      return coincideTexto && coincideEstado;
    });
  }


  verDocumento(doc: any) {
    this.documentoSeleccionado = doc;
    this.observaciones = '';
  }

  cerrarModal() {
    this.documentoSeleccionado = null;
  }

  aprobar() {
    if (this.documentoSeleccionado) {
      this.documentoSeleccionado.estado = 'aprobado';
      this.cerrarModal();
    }
  }

  rechazar() {
    if (this.documentoSeleccionado) {
      this.documentoSeleccionado.estado = 'rechazado';
      this.cerrarModal();
    }
  }
}