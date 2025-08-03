
## Convención de Commits

### Formato de Commit Message

Utilizamos la convención **Conventional Commits** para mantener un historial limpio y semánticamente significativo:

```
<tipo>[alcance opcional]: <descripción>

[cuerpo opcional]

[pie opcional]
```

### Tipos de Commit

| Tipo | Descripción | Ejemplo |
|------|-------------|---------|
| `feat` | Nueva funcionalidad | `feat(auth): agregar autenticación con JWT` |
| `fix` | Corrección de bug | `fix(api): corregir error en validación de email` |
| `docs` | Cambios en documentación | `docs: actualizar README con instrucciones de instalación` |
| `style` | Cambios de formato, espacios, etc. | `style: corregir indentación en componente Header` |
| `refactor` | Refactorización de código | `refactor(utils): simplificar función de validación` |
| `test` | Agregar o modificar tests | `test(user): agregar tests unitarios para UserService` |
| `chore` | Tareas de mantenimiento | `chore: actualizar dependencias de desarrollo` |
| `perf` | Mejoras de rendimiento | `perf(db): optimizar consulta de usuarios activos` |
| `ci` | Cambios en CI/CD | `ci: agregar workflow de GitHub Actions` |
| `build` | Cambios en build system | `build: actualizar configuración de webpack` |
| `revert` | Revertir commit anterior | `revert: revertir cambios en sistema de cache` |

### Reglas para Commits

1. **Usar el imperativo presente**: "agregar" no "agregado" ni "agrega"
2. **Primera línea máximo 50 caracteres**
3. **No terminar con punto**
4. **Capitalizar solo la primera letra**
5. **Separar título y cuerpo con línea en blanco**
6. **Cuerpo máximo 72 caracteres por línea**

### Ejemplos de Buenos Commits

```bash
# Commit simple
feat(login): agregar validación de contraseña

# Commit con cuerpo explicativo
fix(payment): corregir cálculo de impuestos

El cálculo anterior no consideraba el IVA para productos
importados, causando discrepancias en el total final.

Fixes #123
```

## Frecuencia de Push/Pull

### Política de Push

- **Push diario mínimo**: Al final de cada día de trabajo
- **Push por feature**: Al completar una funcionalidad específica
- **Push antes de cambiar de rama**: Siempre guardar el trabajo actual
- **Push antes de reuniones de equipo**: Para mantener sincronización

### Política de Pull

- **Pull al iniciar el día**: Antes de comenzar cualquier trabajo
- **Pull antes de crear nueva rama**: Para partir del código más actualizado
- **Pull antes de hacer merge**: Para evitar conflictos
- **Pull después de notificaciones del equipo**: Cuando alguien comunique cambios importantes

### Flujo Recomendado Diario

```bash
# Al iniciar el día
git pull origin main
git checkout -b feature/nueva-funcionalidad

# Durante el desarrollo (cada 2-3 horas)
git add .
git commit -m "feat(module): descripción del progreso"

# Al finalizar el día
git push origin feature/nueva-funcionalidad

# Al día siguiente
git pull origin main
git checkout feature/nueva-funcionalidad
git rebase main  # Si es necesario
```

## Política de Pull Requests

### Creación de Pull Requests

#### Requisitos Obligatorios

1. **Título descriptivo** siguiendo convención de commits
2. **Descripción detallada** con:
   - ¿Qué cambios se realizaron?
   - ¿Por qué se realizaron?
   - ¿Cómo probar los cambios?
3. **Referencias a issues** relacionados
4. **Screenshots** para cambios de UI
5. **Tests actualizados** y pasando
6. **Sin conflictos** con la rama base

#### Template de Pull Request

```markdown
## Descripción
Breve descripción de los cambios realizados.

## Tipo de cambio
- [ ] Bug fix (cambio que corrige un issue)
- [ ] Nueva feature (cambio que agrega funcionalidad)
- [ ] Breaking change (cambio que puede afectar funcionalidad existente)
- [ ] Documentación

## ¿Cómo se ha probado?
- [ ] Tests unitarios
- [ ] Tests de integración
- [ ] Pruebas manuales
- [ ] Tests de regresión

## Checklist
- [ ] Mi código sigue las convenciones del proyecto
- [ ] He realizado auto-review de mi código
- [ ] He comentado áreas complejas del código
- [ ] He actualizado la documentación correspondiente
- [ ] Mis cambios no generan nuevos warnings
- [ ] He agregado tests que prueban mi fix/feature
- [ ] Tests nuevos y existentes pasan localmente

## Screenshots (si aplica)
[Agregar screenshots para cambios de UI]

## Issues relacionados
Fixes #123
Closes #456
```

### Proceso de Review

#### Revisores

- **Mínimo 2 revisores** para cambios críticos
- **Mínimo 1 revisor** para cambios menores
- **Lead developer** obligatorio para cambios arquitecturales
- **Product owner** para cambios de funcionalidad

#### Criterios de Aprobación

1. **Funcionalidad**: El código hace lo que debe hacer
2. **Calidad**: Código limpio, legible y mantenible
3. **Tests**: Cobertura adecuada y tests que pasan
4. **Performance**: No degradación significativa
5. **Seguridad**: Sin vulnerabilidades introducidas
6. **Documentación**: Actualizada y completa

#### Tipos de Comentarios

- **Must Fix**: Cambios obligatorios antes del merge
- **Should Fix**: Sugerencias importantes
- **Consider**: Sugerencias opcionales
- **Nitpick**: Comentarios menores de estilo

### Políticas de Merge

#### Estrategias de Merge

- **Squash and Merge**: Para features pequeñas (default)
- **Merge Commit**: Para features grandes con commits significativos
- **Rebase and Merge**: Para mantener historial lineal

#### Requisitos para Merge

- [ ] Todas las conversaciones resueltas
- [ ] CI/CD pipeline en verde
- [ ] Aprobación de revisores requeridos
- [ ] Branch actualizada con main
- [ ] Sin conflictos pendientes

#### Post-Merge

1. **Eliminar rama feature** inmediatamente
2. **Notificar al equipo** si son cambios significativos
3. **Actualizar documentación** si es necesario
4. **Monitorear métricas** post-deploy

## Ramas y Naming

### Convención de Nombres de Ramas

```bash
# Features
feature/auth-system
feature/user-dashboard
feature/payment-integration

# Bugfixes
fix/login-error
fix/payment-calculation
hotfix/critical-security-issue

# Documentación
docs/api-documentation
docs/setup-guide

# Refactoring
refactor/user-service
refactor/database-layer
```

### Estructura de Ramas

```
main (producción)
├── develop (desarrollo)
├── feature/nueva-funcionalidad
├── fix/correccion-bug
└── hotfix/arreglo-critico
```

## Herramientas y Automatización

### Git Hooks Recomendados

```bash
# pre-commit: Validar formato de commit
# pre-push: Ejecutar tests
# commit-msg: Validar mensaje de commit
```

### Integración con CI/CD

- **Tests automáticos** en cada PR
- **Linting y formateo** automático
- **Build verification** antes de merge
- **Deployment automático** desde main

## Comandos Útiles

```bash
# Verificar estado antes de commit
git status
git diff --staged

# Commit interactivo
git add -p
git commit

# Sincronizar con remoto
git fetch --prune
git pull --rebase origin main

# Limpiar ramas locales
git branch --merged | grep -v main | xargs git branch -d

# Ver historial gráfico
git log --oneline --graph --decorate --all
```

---

