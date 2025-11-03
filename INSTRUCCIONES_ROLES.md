# 📋 Sistema CELEX - Instrucciones de Uso

## 🎯 Cómo Probar Diferentes Roles

Para probar los diferentes roles del sistema, edita el archivo:
`src/app/services/auth.ts`

**Línea 11:** Cambia el valor de `rolActual`:

```typescript
private rolActual: userRole = 'admin'; // Cambia este valor
```

### Roles Disponibles:

1. **`'admin'`** - Administrador (Acceso Total)
   - Todos los módulos disponibles
   
2. **`'coordinacion'`** - Coordinación
   - CRUD Usuarios
   - Validación de Documentos
   - Validación de Comprobantes
   - Validación de Boletas
   - Asignar Grupos
   - Modificar Datos de Alumnos
   - Registro de Niveles

3. **`'alumno'`** - Alumno
   - Registro de Ficha
   - Registro de Comprobante
   - Registro de Boleta

4. **`'direccion'`** - Dirección
   - CRUD Usuarios
   - Consultar Reportes
   - Consultas en Tiempo Real

---

## 🚀 Iniciar el Servidor

```powershell
ng serve -o
```

El sistema se abrirá en: `http://localhost:4200`

---

## 📂 Estructura de Módulos

### Módulo 1: Control de Accesos
- **Login** (`/login`) - Página de inicio de sesión
- **Recuperar Contraseña** (`/recuperar-contra`) - Recuperación de contraseña
- **CRUD Usuarios** (`/crud-usuarios`) - Gestión de usuarios del sistema

### Módulo 2: Registro de Fichas
- **Registro Ficha Alumno** (`/registro-ficha-alumno`) - Registro de datos
- **Validación Documentos** (`/validacion-doc`) - Validar documentos

### Módulo 3: Validación de Comprobantes
- **Registro Comprobante** (`/registro-comprob`) - Subir comprobantes
- **Validación Comprobante** (`/validacion-comprob`) - Validar pagos

### Módulo 4: Reportes
- **Generar Reportes** (`/generar-reporte`) - Reportes del sistema

### Módulo 5: Reinscripciones
- **Registro Boleta** (`/registro-boleta`) - Subir boletas
- **Validación Boleta** (`/validacion-boleta`) - Validar reinscripciones

### Módulo 6: Grupos
- **Asignar Grupos** (`/asignar-grupo`) - Asignar alumnos a grupos

---

## 🎨 Características Implementadas

✅ **Sidebar con control de acceso por roles**
- Muestra solo los módulos permitidos según el rol
- Navegación con iconos de Bootstrap
- Diseño responsive

✅ **Header funcional**
- Nombre y rol del usuario
- Menú de notificaciones (simulado)
- Menú de perfil con opción de cerrar sesión

✅ **Todas las vistas principales creadas**
- Login con diseño moderno
- Dashboard con estadísticas
- Formularios de registro
- Tablas de validación
- Módulo de reportes

✅ **Bootstrap 5 integrado**
- Estilos modernos y responsive
- Componentes de Bootstrap (cards, tables, forms, etc.)
- Iconos de Bootstrap Icons

---

## 📝 Próximos Pasos (Para Implementar)

1. **Conectar con MySQL**
   - Crear servicios HTTP para cada módulo
   - Conectar con tus procedimientos almacenados
   - Implementar autenticación real

2. **Funcionalidad de Formularios**
   - Agregar validaciones
   - Implementar envío de datos
   - Manejo de errores

3. **Subida de Archivos**
   - Implementar upload de documentos
   - Visualización de PDFs
   - Descarga de archivos

4. **Búsquedas y Filtros**
   - Implementar búsquedas en tiempo real
   - Filtros en las tablas
   - Paginación

---

## 🔧 Cambiar de Rol Rápidamente

Mientras desarrollas, puedes cambiar el rol directamente en:
`src/app/services/auth.ts` línea 11

O puedes usar la función `setRole()` desde la consola del navegador:

```javascript
// Abre la consola del navegador (F12) y ejecuta:
window['ng'].getComponent(document.querySelector('app-root')).authService.setRole('coordinacion');
location.reload();
```

---

## 📱 Responsive

El sistema está diseñado para funcionar en:
- 💻 Desktop
- 📱 Tablet
- 📱 Mobile

---

## 🆘 Ayuda

Si tienes problemas:
1. Verifica que el servidor esté corriendo (`ng serve`)
2. Revisa la consola del navegador (F12) para ver errores
3. Asegúrate de que Bootstrap esté instalado (`npm install`)

---

**Desarrollado para entrega del 03/11/2025**
*Interfaz lista para conectar con backend MySQL*
