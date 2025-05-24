# 🚀 React Tailwind Portfolio

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.0-38B2AC?logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.0.0-646CFF?logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)

## 📋 Descripción

Portfolio personal desarrollado con React y Tailwind CSS para mostrar mis proyectos, habilidades y experiencia como desarrollador. Este sitio web presenta una interfaz moderna, responsive y optimizada que destaca mi trabajo y trayectoria profesional.

## ✨ Características principales

- **🎨 Diseño moderno y atractivo**: Interfaz limpia y profesional con animaciones suaves
- **📱 Completamente responsive**: Adaptado para dispositivos móviles, tablets y escritorio
- **⚡ Rendimiento optimizado**: Carga rápida y navegación fluida
- **🌙 Modo oscuro/claro**: Soporte para temas claro y oscuro
- **📧 Formulario de contacto**: Funcional con validación de datos
- **🔗 Integración con redes sociales**: Enlaces directos a perfiles profesionales
- **📊 Sección de estadísticas**: Métricas y logros profesionales
- **🎯 Animaciones interactivas**: Efectos visuales y transiciones suaves

## 🛠️ Tecnologías utilizadas

- **React 18**: Biblioteca principal para la construcción de la interfaz
- **Tailwind CSS**: Framework de CSS utilitario para el diseño
- **Vite**: Herramienta de construcción y servidor de desarrollo
- **React Router**: Navegación entre secciones
- **Framer Motion**: Animaciones y transiciones avanzadas
- **React Hook Form**: Gestión de formularios
- **EmailJS**: Envío de emails desde el formulario de contacto
- **React Icons**: Librería de iconos
- **AOS (Animate On Scroll)**: Animaciones al hacer scroll

## 📁 Estructura del proyecto

```
src/
├── components/           # Componentes reutilizables
│   ├── Header/          # Navegación y header
│   ├── Hero/            # Sección principal de presentación
│   ├── About/           # Información personal y profesional
│   ├── Skills/          # Habilidades técnicas
│   ├── Projects/        # Galería de proyectos
│   ├── Experience/      # Experiencia laboral
│   ├── Contact/         # Formulario de contacto
│   └── Footer/          # Pie de página
├── assets/              # Imágenes, iconos y recursos
│   ├── images/          # Fotografías y capturas de proyectos
│   └── icons/           # Iconos personalizados
├── hooks/               # Custom hooks de React
├── utils/               # Funciones de utilidad
├── styles/              # Estilos globales y configuración de Tailwind
└── data/                # Datos estáticos (proyectos, skills, etc.)
```

## 🎯 Secciones del portfolio

### 🏠 Hero Section
- Presentación personal con foto de perfil
- Título profesional y breve descripción
- Botones de call-to-action
- Animación de texto dinámico

### 👨‍💻 Sobre mí
- Información personal y profesional
- Historia y motivaciones
- Valores y filosofía de trabajo
- Descarga de CV

### 🛠️ Habilidades
- Tecnologías front-end y back-end
- Herramientas y metodologías
- Nivel de competencia visual
- Certificaciones

### 💼 Proyectos
- Galería de proyectos destacados
- Descripción detallada de cada proyecto
- Tecnologías utilizadas
- Enlaces a demos y código fuente
- Capturas de pantalla

### 📈 Experiencia
- Historial laboral
- Logros y responsabilidades
- Testimonios y recomendaciones

### 📞 Contacto
- Formulario funcional de contacto
- Información de contacto directa
- Enlaces a redes sociales
- Mapa de ubicación (opcional)

## 🚀 Instalación y uso

### Requisitos previos
- Node.js (versión 16 o superior)
- npm o yarn

### Pasos para instalar

1. Clona el repositorio:
```bash
git clone https://github.com/PeterManga/React-tailwind-Portfolio.git
```

2. Navega al directorio del proyecto:
```bash
cd React-tailwind-Portfolio
```

3. Instala las dependencias:
```bash
npm install
# o
yarn install
```

4. Inicia el servidor de desarrollo:
```bash
npm run dev
# o
yarn dev
```

5. Abre tu navegador en: http://localhost:5173

## 🎨 Personalización

### Colores y temas
El portfolio utiliza Tailwind CSS para la gestión de estilos. Puedes personalizar:

- **Paleta de colores**: Modifica `tailwind.config.js` para cambiar los colores principales
- **Tipografía**: Personaliza las fuentes en la configuración de Tailwind
- **Espaciado**: Ajusta márgenes y padding según tus preferencias

### Contenido
- **Datos personales**: Actualiza `/src/data/personal.js`
- **Proyectos**: Modifica `/src/data/projects.js` con tus proyectos
- **Habilidades**: Edita `/src/data/skills.js` con tus tecnologías
- **Experiencia**: Actualiza `/src/data/experience.js`

## 📱 Responsive Design

El portfolio está optimizado para:

- **📱 Móviles**: 320px - 768px
- **📟 Tablets**: 768px - 1024px
- **💻 Escritorio**: 1024px+
- **🖥️ Pantallas grandes**: 1440px+

## ⚡ Optimización de rendimiento

- **Lazy loading** de imágenes y componentes
- **Code splitting** para reducir el bundle inicial
- **Optimización de imágenes** en diferentes formatos
- **Minificación** de CSS y JavaScript
- **Cache strategies** para recursos estáticos

## 🌟 Funcionalidades destacadas

### Animaciones
- **Fade in/out** al hacer scroll
- **Hover effects** en botones y cards
- **Loading animations** para mejor UX
- **Parallax scrolling** en secciones específicas

### Interactividad
- **Filtros de proyectos** por tecnología
- **Modal de detalles** para cada proyecto
- **Smooth scrolling** entre secciones
- **Validación en tiempo real** en formularios

## 📈 SEO y Accesibilidad

- **Meta tags** optimizados para cada sección
- **Structured data** para mejor indexación
- **Alt text** en todas las imágenes
- **Contraste de colores** conforme a WCAG
- **Navegación por teclado** completamente funcional
- **Screen reader friendly**

## 🚢 Despliegue

### Opciones de despliegue recomendadas:

1. **Vercel** (Recomendado)
```bash
npm run build
vercel --prod
```

2. **Netlify**
```bash
npm run build
# Arrastra la carpeta dist a Netlify
```

3. **GitHub Pages**
```bash
npm run build
npm run deploy
```

## 🤝 Contribuir

Si deseas contribuir a este proyecto:

1. Haz un fork del repositorio
2. Crea una rama para tu función (`git checkout -b feature/amazing-feature`)
3. Haz commit de tus cambios (`git commit -m 'Añadir función increíble'`)
4. Haz push a la rama (`git push origin feature/amazing-feature`)
5. Abre un Pull Request

## 📝 Roadmap

### Próximas funcionalidades:
- [ ] Blog integrado
- [ ] Modo offline con Service Workers
- [ ] Internacionalización (i18n)
- [ ] Integración con CMS headless
- [ ] Analytics integrado
- [ ] Testimonials dinámicos

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - mira el archivo [LICENSE](LICENSE) para más detalles.

## 📞 Contacto

**Pedro Manga** - Desarrollador Full Stack

[![GitHub](https://img.shields.io/badge/GitHub-PeterManga-181717?logo=github&logoColor=white)](https://github.com/PeterManga)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Conectar-0A66C2?logo=linkedin&logoColor=white)](#)
[![Portfolio](https://img.shields.io/badge/Portfolio-Visitar-FF5722?logo=google-chrome&logoColor=white)](#)

---

⭐ **¡Dale una estrella si te gusta este proyecto!** ⭐
