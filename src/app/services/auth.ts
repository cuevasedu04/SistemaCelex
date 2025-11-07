import { Injectable } from '@angular/core';

export type userRole = 'alumno' | 'coordinacion' | 'direccion' | 'admin';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  
  // --- ESTA ES LA LÍNEA QUE SIMULA EL ROL ---
  // Cambia este valor para probar los diferentes roles: 'admin', 'coordinacion', 'alumno', 'direccion'
  // Más adelante, este valor vendrá de tu API de Login.
  private rolActual: userRole = 'admin'; 

  constructor() { }

  // Función que el sidebar usará para saber el rol
  getRole(): userRole {
    return this.rolActual;
    // En el futuro: return localStorage.getItem('userRole') as userRole || 'alumno';
  }

  // Función para cambiar el rol (solo para pruebas)
  setRole(role: userRole): void {
    this.rolActual = role;
    // En el futuro: localStorage.setItem('userRole', role);
  }

  // Simula el login (aquí conectarás con tu API y procedimientos almacenados)
  login(usuario: string, password: string): boolean {
    // Aquí irá tu lógica de conexión a MySQL
    console.log('Login attempt:', usuario, password);
    
    // Simulación: asigna un rol según el usuario
    if (usuario === 'admin') this.setRole('admin');
    else if (usuario === 'coord') this.setRole('coordinacion');
    else if (usuario === 'alumno') this.setRole('alumno');
    else if (usuario === 'director') this.setRole('direccion');
    
    return true; // Simula login exitoso
  }

  // Cierra sesión
  logout(): void {
    this.rolActual = 'alumno';
    // localStorage.removeItem('userRole');
  }
  
}
