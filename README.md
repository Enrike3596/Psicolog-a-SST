# Centro SST - Psicología Laboral

Landing page profesional del **Centro SST**, especializado en psicología laboral, bienestar mental y seguridad en el trabajo.

🌐 **Sitio en vivo:** https://thankful-tree-0700fe80f.7.azurestaticapps.net

---

## Problemática

En el entorno laboral actual, los factores de riesgo psicosocial —como el estrés crónico, la ansiedad, el agotamiento (*burnout*) y la falta de apoyo psicológico— afectan gravemente la productividad, el clima organizacional y la calidad de vida de los trabajadores. Según la OIT, el estrés laboral es uno de los principales desafíos de salud ocupacional del siglo XXI, y su abordaje requiere soluciones accesibles, profesionales y centradas en la persona.

Muchas empresas carecen de canales directos y confiables para conectar a sus empleados con servicios de psicología laboral, lo que agrava el problema y eleva los costos por ausentismo, rotación y bajas médicas.

## Solución

**Centro SST** es una plataforma web informativa y de contacto que ofrece:

- **Evaluación psicológica** integral del bienestar mental en el trabajo.
- **Terapia grupal** para equipos organizacionales.
- **Capacitación** en manejo del estrés, resiliencia y salud ocupacional.
- **Programas de bienestar corporativo** adaptados a cada empresa.
- **Consultoría individual** con acompañamiento psicológico personalizado.
- **Diagnóstico organizacional** para medir el clima laboral y los riesgos psicosociales.

El sitio funciona como un **punto de acceso directo** entre los usuarios y los servicios profesionales del centro, facilitando la comunicación vía WhatsApp y correo electrónico mediante formularios inteligentes que estructuran la solicitud del paciente o empresa.

---

## Tecnología

| Capa          | Tecnología                                                |
|---------------|-----------------------------------------------------------|
| Frontend      | HTML5 semántico + CSS3 + JavaScript (Vanilla ES6+)        |
| Estilos       | [Tailwind CSS](https://tailwindcss.com/) v3 (CDN)         |
| Interactividad| JavaScript nativo (manejo del DOM, modo oscuro, formularios) |
| Hosting       |  |
| Dominio       | Subdominio `*.azurestaticapps.net`                        |
| Fuentes       | Sistema nativo (sans-serif) + iconos SVG inline           |
| Terceros      | YouTube (iframe embebido), WhatsApp API (`wa.me`), Unsplash (imágenes) |

### Características

- **Modo oscuro/claro** con persistencia en `localStorage` y detección de preferencia del sistema.
- **Diseño responsive** adaptado a móviles, tablets y escritorio.
- **Menú hamburguesa** para navegación móvil con cierre automático.
- **Carrusel de mensajes inspiradores** con rotación automática e imágenes de fondo.
- **Formulario de contacto inteligente** con envío dual (WhatsApp o correo electrónico).
- **Atajo de teclado:** presiona `D` para alternar modo oscuro.
- **Footer profesional** con enlaces legales, redes sociales, datos de contacto y certificaciones.

---

## Instalación y uso local

### Requisitos

- Un navegador web moderno (Chrome, Firefox, Edge, Safari).
- Opcional: [Node.js](https://nodejs.org/) ≥ 16 si se desea servir con un live server.

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/tuusuario/landing-psicologia.git
cd landing-psicologia

# 2. Abrir directamente en el navegador
start index.html
```

O bien, con un servidor local para recarga en vivo:

```bash
# Usando npx (viene con Node.js)
npx serve .

# O usando Live Server en VS Code
# Abrir index.html → clic derecho → "Open with Live Server"
```

No requiere instalación de dependencias ni compilación. El proyecto es HTML, CSS y JavaScript plano que se ejecuta directamente en el navegador.

### Build / Deploy

El sitio se despliega automáticamente en **Azure Static Web Apps** al hacer push a la rama principal del repositorio. No se requiere paso de build intermedio.

---

## Estructura del proyecto

```
/
├── index.html         # Página principal (estructura completa)
├── script.js          # Lógica JavaScript (mensajes, contacto, modo oscuro, menú)
├── README.md          # Documentación del proyecto
└── .git/              # Control de versiones (Git)
```

---

## Licencia

© 2025 Centro SST - Psicología Laboral. Todos los derechos reservados.
