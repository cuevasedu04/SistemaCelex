import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Auth, userRole } from '../../../services/auth';

@Component({
  standalone: true,
  selector: 'app-sidebar',
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.html',
  styles: `
    .sidebar {
      width: 250px;
      position: fixed;
      top: 0;
      left: 0;
      height: 100vh;
      overflow-y: auto;
      box-shadow: 2px 0 5px rgba(0,0,0,0.1);
    }
    
    .nav-link {
      padding: 0.75rem 1rem;
      border-radius: 0.375rem;
      transition: all 0.3s;
    }
    
    .nav-link:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
    
    .nav-link.active {
      background-color: #0d6efd;
    }
    
    .nav-section h6 {
      font-size: 0.75rem;
      letter-spacing: 0.5px;
    }
  `,
})
export class Sidebar implements OnInit {

  public rolUsuario: userRole = 'admin';

  constructor(private authService: Auth) { }

  ngOnInit(): void {
    this.rolUsuario = this.authService.getRole();
  }

  // Función para obtener el nombre del rol en español
  getRoleName(): string {
    const roles = {
      'admin': 'Administrador',
      'coordinacion': 'Coordinación',
      'alumno': 'Alumno',
      'direccion': 'Dirección'
    };
    return roles[this.rolUsuario] || 'Usuario';
  }

}
