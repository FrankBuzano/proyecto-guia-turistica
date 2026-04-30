# Guía Turística Interactiva

Este proyecto consiste en una guía turística interactiva desarrollada en JavaScript por el Grupo 3 del curso de Multimedios de la carrera de Informática Empresarial, en la Universidad de Costa Rica (Sede Guanacaste), durante el ciclo I-2026. La aplicación utiliza ES Modules y una arquitectura modular basada en componentes.

## Requisitos

- Node.js (recomendado v16 o superior)
- pnpm (o npm/yarn, pero se recomienda pnpm)

## Instalación

1. Clona este repositorio:

   sh
   git clone <URL-del-repositorio>
   cd proyecto-guia-turistica-forkFelix
   

2. Instala las dependencias:

   sh
   pnpm install
   # o
   npm install
   # o
   yarn install
   

## Ejecución en un servidor local

Los navegadores modernos requieren que los ES Modules se sirvan desde un servidor local (no funcionan correctamente abriendo el archivo index.html directamente).

Puedes usar cualquier servidor estático. Aquí tienes varias opciones:

### Opción 1: Usar serve (recomendado)

1. Instala serve globalmente si no lo tienes:

   sh
   pnpm add -g serve
   # o
   npm install -g serve
   # o
   yarn global add serve
   

2. Ejecuta el servidor en la raíz del proyecto:

   sh
   serve .
   

3. Abre tu navegador en la URL que aparece (por defecto http://localhost:3000).

### Opción 2: Usar VS Code Live Server

1. Instala la extensión "Live Server" en VS Code.
2. Haz clic derecho en index.html y selecciona "Open with Live Server".

### Opción 3: Usar Python (si tienes Python instalado)

sh
# Python 3
python -m http.server 8000


Luego abre http://localhost:8000 en tu navegador.

---

## Estructura del Proyecto

- index.html: Página principal.
- src/: Código fuente (componentes, datos, utilidades, estilos).
- assets/: Imágenes y recursos estáticos.
- package.json: Dependencias y scripts.

---

## Notas

- Si modifica archivos fuente, solo recargue el navegador para ver los cambios.
- Si tiene problemas con rutas o módulos, asegúrese de estar usando un servidor local.

---

## Créditos

Consulta el archivo CREDITOS.md para información sobre autores y recursos utilizados.