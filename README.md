Flex Panel Image Gallery
📌 Descripción

Este proyecto es una galería interactiva de imágenes construida con Flexbox, transiciones CSS y una pequeña cantidad de JavaScript.
El objetivo fue recrear una “flex gallery” donde cada panel se expande al hacer clic y muestra animaciones elegantes basadas casi totalmente en CSS.

Este ejercicio forma parte de la práctica de flexbox y JavaScript básico siguiendo la estructura del tutorial trabajado en clase.

🎯 ¿Qué aprendí en este proyecto?

Cómo usar Flexbox para distribuir elementos dinámicamente.

Cómo aplicar transiciones CSS para animaciones fluidas.

Cómo usar transform: translateY() para crear movimientos desde fuera del contenedor.

Cómo alternar clases (.open y .open-active) con JavaScript.

Cómo escuchar eventos como click y transitionend.

🧩 Funcionamiento

Cada panel:

Comienza distribuido equitativamente con flex: 1.

Al hacer clic, obtiene la clase .open → crece a flex: 5.

Cuando la transición del “flex” termina, se activa .open-active.

El texto interior cae desde arriba o sube desde abajo usando translateY.

Cuando se vuelve a hacer clic, revierte su estado con una animación suave.

🛠️ Tecnologías usadas

HTML5

CSS3 (Flexbox, Transitions, Transformations)

JavaScript (DOM, classList.toggle, event listeners)

📸 Características principales

Distribución dinámica con display: flex.

Paneles expansibles con flex-grow.

Animaciones en entradas de texto basadas en translateY().

Uso anidado de Flexbox para centrar contenido horizontal y verticalmente.

Efecto suave logrado con transition y cubic-bezier.

👨‍💻 Autor

Implementado por José Carvajal.
