import { Routes } from '@angular/router';
import { Login } from './features/controlAccesos/login/login';
import { RecuperarContra } from './features/controlAccesos/recuperar-contra/recuperar-contra';
import { CrudUsuarios } from './features/controlAccesos/crud-usuarios/crud-usuarios';
import { Dashboard } from './features/dashboard/dashboard';
import { AsignarGrupo } from './features/grupos/asignar-grupo/asignar-grupo';
import { RegistroFichaAlumno } from './features/registro-fichas/registro-ficha-alumno/registro-ficha-alumno';
import { ValidacionDoc } from './features/registro-fichas/validacion-doc/validacion-doc';
import { RegistroBoleta } from './features/reinscripciones/registro-boleta/registro-boleta';
import { ValidacionBoleta } from './features/reinscripciones/validacion-boleta/validacion-boleta';
import { GenerarReporte } from './features/reportes/generar-reporte/generar-reporte';
import { RegistroComprob } from './features/validacion-comprob/registro-comprob/registro-comprob';
import { ValidacionComprob } from './features/validacion-comprob/validacion-comprob/validacion-comprob';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: Login
    },
    {
        path: 'dashboard',
        component: Dashboard
    },
    {
        path: 'recuperar-contra',
        component: RecuperarContra
    },
    {
        path: 'crud-usuarios',
        component: CrudUsuarios
    },
    {
        path: 'asignar-grupo',
        component: AsignarGrupo
    },
    {
        path: 'registro-ficha-alumno',
        component: RegistroFichaAlumno
    },
    {
        path: 'validacion-doc',
        component: ValidacionDoc
    },
    {
        path: 'registro-boleta',
        component: RegistroBoleta
    },
    {
        path: 'validacion-boleta',
        component: ValidacionBoleta
    },
    {
        path: 'generar-reporte',
        component: GenerarReporte
    },
    {
        path: 'registro-comprob',
        component: RegistroComprob
    },
    {
        path: 'validacion-comprob',
        component: ValidacionComprob
    },
    {
        path: '**',
        redirectTo: 'login'
    }
];
