# Portafolio de Cristian Diaz Vega

Este es mi portafolio personal, desarrollado con [Astro](https://astro.build/) para mostrar mis habilidades, proyectos y experiencia como desarrollador web fullstack. El sitio está diseñado para ser rápido, responsivo y multilingüe.

## ✨ Características Principales

*   **🚀 Rendimiento Optimizado:** Construido con Astro, que envía cero JavaScript por defecto, garantizando tiempos de carga ultra rápidos.
*   **📱 Diseño Responsivo:** Totalmente adaptable a dispositivos móviles, tabletas y computadoras de escritorio.
*   **🌍 Soporte Multilingüe (i18n):** Contenido disponible en español e inglés, gestionado a través de archivos JSON para facilitar su mantenimiento.
*   **📬 Formulario de Contacto Funcional:** Integración con [FormSubmit](https://formsubmit.co/) para recibir mensajes directamente en mi correo electrónico, con animaciones de estado de envío.
*   **🧩 Arquitectura Basada en Componentes:** Estructura modular y reutilizable gracias a los componentes de Astro.

## 🛠️ Tecnologías Utilizadas

*   **Framework Principal:** [Astro](https://astro.build/)
*   **Lenguajes:** HTML, CSS, JavaScript
*   **Servicios Externos:**
    *   [FormSubmit](https://formsubmit.co/): Para la gestión del formulario de contacto.

## 🚀 Estructura del Proyecto

Una vista general de las carpetas y archivos importantes:

```
/
├── public/                 # Archivos estáticos (imágenes, JS del lado del cliente, etc.)
│   └── js/form.js          # Lógica para el formulario de contacto
├── src/
│   ├── assets/
│   │   └── content/        # Archivos de texto para i18n (es.json, en.json)
│   ├── components/         # Componentes reutilizables de Astro (.astro)
│   ├── layouts/            # Plantillas de página (Layouts)
│   └── pages/              # Páginas y rutas del sitio (.astro)
├── astro.config.mjs        # Archivo de configuración de Astro
└── package.json            # Dependencias y scripts del proyecto
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
