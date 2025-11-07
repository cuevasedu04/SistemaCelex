import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Auth, userRole } from '../../services/auth';

@Component({
  standalone: true,
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styles: `
    .welcome-card {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border-radius: 15px;
      padding: 2rem;
      margin-bottom: 2rem;
    }
    
    .module-card {
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      cursor: pointer;
      border-left: 4px solid #667eea;
    }
    
    .module-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 25px rgba(0,0,0,0.1);
    }
    
    .icon-wrapper {
      width: 60px;
      height: 60px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
    }
  `,
})
export class Dashboard implements OnInit {
  rolUsuario: userRole | null = null;

  constructor(private auth: Auth) {}

  ngOnInit() {
    this.rolUsuario = this.auth.getRole();
  }

  getRoleName(): string {
    const roles = {
      admin: 'Administrador',
      direccion: 'Dirección',
      coordinacion: 'Coordinación',
      alumno: 'Alumno'
    };
    return this.rolUsuario ? roles[this.rolUsuario] : '';
  }
}
