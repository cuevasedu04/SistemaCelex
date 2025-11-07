import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-recuperar-contra',
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  templateUrl: './recuperar-contra.html',
  styleUrl: '../login/login.css'
})
export class RecuperarContra {
  email: string = '';
  successMessage: string = '';
  errorMessage: string = '';

  onRecovery(): void {
    this.successMessage = '';
    this.errorMessage = '';

    // Validar que el campo no esté vacío
    if (!this.email) {
      this.errorMessage = 'Por favor ingresa tu correo electrónico';
      return;
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.email)) {
      this.errorMessage = 'Por favor ingresa un correo electrónico válido';
      return;
    }

    // Simular envío exitoso
    this.successMessage = '¡Enlace enviado! Revisa tu correo electrónico';
    
    // Limpiar el campo
    this.email = '';
  }
}
