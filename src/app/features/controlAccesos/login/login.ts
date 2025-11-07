import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Auth, userRole } from '../../../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  usuario: string = '';
  password: string = '';
  errorMessage: string = '';
  successMessage: string = '';
  isRegisterMode: boolean = false;

  registerData = {
    nombre: '',
    email: '',
    usuario: '',
    password: '',
    confirmPassword: ''
  };

  constructor(
    private authService: Auth,
    private router: Router
  ) {}

  onLogin(): void {
    this.errorMessage = '';
    this.successMessage = '';

    // Validar que los campos no estén vacíos
    if (!this.usuario || !this.password) {
      this.errorMessage = 'Por favor ingresa usuario y contraseña';
      return;
    }

    // Validar que la contraseña sea "demo"
    if (this.password !== 'demo') {
      this.errorMessage = 'Contraseña incorrecta. Usa "demo"';
      return;
    }

    // Determinar el rol según el usuario ingresado
    let rol: userRole;
    const usuarioLower = this.usuario.toLowerCase();

    if (usuarioLower.includes('admin')) {
      rol = 'admin';
    } else if (usuarioLower.includes('coordinacion') || usuarioLower.includes('coord')) {
      rol = 'coordinacion';
    } else if (usuarioLower.includes('direccion') || usuarioLower.includes('director')) {
      rol = 'direccion';
    } else if (usuarioLower.includes('alumno')) {
      rol = 'alumno';
    } else {
      this.errorMessage = 'Usuario no válido. Usa: admin, coordinacion, direccion o alumno';
      return;
    }

    // Establecer el rol en el servicio
    this.authService.setRole(rol);

    // Redirigir al dashboard
    this.router.navigate(['/dashboard']);
  }

  onRegister(): void {
    this.errorMessage = '';
    this.successMessage = '';

    // Validar que todos los campos estén llenos
    if (!this.registerData.nombre || !this.registerData.email || 
        !this.registerData.usuario || !this.registerData.password || 
        !this.registerData.confirmPassword) {
      this.errorMessage = 'Por favor completa todos los campos';
      return;
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.registerData.email)) {
      this.errorMessage = 'Por favor ingresa un correo electrónico válido';
      return;
    }

    // Validar que las contraseñas coincidan
    if (this.registerData.password !== this.registerData.confirmPassword) {
      this.errorMessage = 'Las contraseñas no coinciden';
      return;
    }

    // Validar longitud de contraseña
    if (this.registerData.password.length < 6) {
      this.errorMessage = 'La contraseña debe tener al menos 6 caracteres';
      return;
    }

    // Validar longitud de usuario
    if (this.registerData.usuario.length < 4) {
      this.errorMessage = 'El nombre de usuario debe tener al menos 4 caracteres';
      return;
    }

    // Simular registro exitoso
    this.successMessage = '¡Registro exitoso! Puedes iniciar sesión ahora';
    
    // Limpiar formulario
    this.registerData = {
      nombre: '',
      email: '',
      usuario: '',
      password: '',
      confirmPassword: ''
    };

    // Cambiar a modo login después de 2 segundos
    setTimeout(() => {
      this.isRegisterMode = false;
      this.successMessage = '';
    }, 2000);
  }
}