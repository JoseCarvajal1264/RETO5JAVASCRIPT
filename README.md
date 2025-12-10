# 🎨 Flex Panel Gallery

Galería interactiva creada con **HTML**, **CSS (Flexbox + Transitions)** y **JavaScript**.  
Los paneles se expanden al hacer clic y muestran animaciones suaves basadas principalmente en CSS.

![HTML](https://img.shields.io/badge/HTML5-orange)
![CSS](https://img.shields.io/badge/CSS3-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-yellow)

## ✨ Características

- 📁 Paneles distribuidos con **Flexbox**
- 🎞️ Animaciones con **transition + transform**
- 🪄 Textos que suben y bajan usando `translateY()`
- 🖱️ Cada panel se expande al hacer clic (`flex: 5`)
- 🔄 Activación automática de clases (`open` y `open-active`)

## 🛠️ Tecnologías

- **HTML5**
- **CSS3** (Flexbox, Transitions, Transform)
- **JavaScript** (DOM, event listeners, classList)

## 🚀 Ejecutar el proyecto

No necesita instalación.

```bash
# 1. Descargar proyecto
git clone https://github.com/user/flex-gallery.git
cd flex-gallery

# 2. Abrir
open index.html   # o abrir manualmente en el navegador
```
## 📂 Estructura del proyecto

```bash
/flex-gallery
│── index.html
│── style.css
│── script.js
└── images/
```
## 💻 Funcionamiento

Los paneles inician con flex: 1

Al hacer clic → se agrega .open → crece a flex: 5

Al finalizar la transición → .open-active anima los textos

Al hacer clic de nuevo → vuelve a su tamaño original

## 👨‍💻 Autor

**José** - (https://github.com/JoseCarvajal1264)
