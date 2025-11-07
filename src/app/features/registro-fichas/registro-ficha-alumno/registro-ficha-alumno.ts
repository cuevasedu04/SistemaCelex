import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-registro-ficha-alumno',
  imports: [CommonModule, FormsModule],
  templateUrl: './registro-ficha-alumno.html',
  styleUrls: ['./registro-ficha-alumno.css']
})

export class RegistroFichaAlumno {
  tieneFamiliar: string = "no";
  tienePadecimiento: string = 'no';
  
  medicamento: string = '';

  constructor() {}

  // 1. Variables para guardar los nombres
  curpFileName: string = 'No seleccionado';
  ineFileName: string = 'No seleccionado';

  // Variables para guardar los archivos REALES
  private curpFile: File | null = null;
  private ineFile: File | null = null;

  // 2. Función que maneja el cambio (ACTUALIZADA)
  onFileChange(event: Event, fileType: 'curp' | 'ine') {
    // Obtenemos el input que cambió
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      const file = input.files[0];     // Obtenemos el archivo
      const fileName = file.name;  // Obtenemos el nombre
      
      // 3. Actualizamos la variable correcta
      if (fileType === 'curp') {
        this.curpFileName = fileName;
        this.curpFile = file;
      } else if (fileType === 'ine') {
        this.ineFileName = fileName;
        this.ineFile = file;
      }
    } else {
      // Si el usuario cancela, reseteamos ambos
      if (fileType === 'curp') {
        this.curpFileName = 'No seleccionado';
        this.curpFile = null; // <-- Reseteamos el archivo
      } else if (fileType === 'ine') {
        this.ineFileName = 'No seleccionado';
        this.ineFile = null; // <-- Reseteamos el archivo
      }
    }
  }

  onSubmit() {
    // Primero, validamos que el usuario haya seleccionado ambos archivos
    if (!this.curpFile || !this.ineFile) {
      alert('Error: Debes seleccionar el archivo CURP y el archivo INE.');
      return; // Detenemos la función aquí
    }

    // ---
    // Aquí iría tu lógica real para enviar los archivos a un servidor
    // (usando HttpClient, por ejemplo)
    // ---

    // Por ahora, solo simulamos la subida y mostramos la alerta
    console.log('Subiendo CURP:', this.curpFile.name);
    console.log('Subiendo INE:', this.ineFile.name);
    
    alert('Documentos y ficha subidos exitosamente. Espera a que validen tus documentos');
  }
}
