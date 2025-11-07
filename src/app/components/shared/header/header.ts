import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Auth, userRole } from '../../../services/auth';

@Component({
  standalone: true,
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.html',
  styles: `
    .navbar {
      position: fixed;
      top: 0;
      left: 250px;
      right: 0;
      z-index: 1000;
    }
    
    .avatar {
      font-size: 1rem;
    }
  `,
})
export class Header implements OnInit {

  public nombreUsuario: string = 'Usuario';
  private rolUsuario: userRole = 'admin';

  constructor(
    private authService: Auth,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.rolUsuario = this.authService.getRole();
    // En el futuro, obtendrás el nombre del usuario desde tu API
    this.nombreUsuario = this.getDefaultUserName();
  }

  getRoleName(): string {
    const roles = {
      'admin': 'Administrador',
      'coordinacion': 'Coordinación',
      'alumno': 'Alumno',
      'direccion': 'Dirección'
    };
    return roles[this.rolUsuario] || 'Usuario';
  }

  private getDefaultUserName(): string {
    const nombres = {
      'admin': 'Admin Sistema',
      'coordinacion': 'Coord. General',
      'alumno': 'Juan Pérez',
      'direccion': 'Director CELEX'
    };
    return nombres[this.rolUsuario] || 'Usuario';
  }

  onLogout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
