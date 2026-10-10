# Web de Federico Stipanicic · Revisión responsive

Revisión del 30 de septiembre de 2026. Base: archivo V14 y última ilustración de refractiva aprobada posteriormente.

## Qué incluye

Una única web estática, con una presentación específica para escritorio, tablet y móvil. Ambos diseños comparten el mismo contenido y la misma URL: no hay que mantener ni publicar dos sitios distintos.

- `index.html`: contenido, navegación y metadatos.
- `style.css`: estilos generales y adaptaciones según el ancho de pantalla.
- `script.js`: menú, accesibilidad y acceso móvil a contacto.
- `assets/`: imágenes en WebP, tamaños alternativos, fuentes locales, licencia de Manrope y favicon.
- `INFORME.md`: hallazgos, cambios editoriales, mediciones y pendientes.
- `validacion.json`: resultados resumidos de las comprobaciones.

## Ver la web

Abrir `index.html` desde esta carpeta después de descomprimir el ZIP. Mantener los archivos juntos. Para una revisión con servidor local, si Python está instalado:

```sh
python3 -m http.server 8000
```

Después abrir `http://localhost:8000`.

## Actualizar el sitio conectado a Netlify

1. Descomprimir el ZIP.
2. Reemplazar `index.html` en la carpeta correspondiente del repositorio conectado a Netlify. En esta actualización editorial es el único archivo de la web cuyo contenido cambió; el CSS, JavaScript y los recursos gráficos se conservan.
3. Si se está probando en `/prueba/`, reemplazar `prueba/index.html`. Mantener junto al HTML los archivos `style.css`, `script.js` y la carpeta `assets` de la versión optimizada.
4. Confirmar el cambio en GitHub y esperar que Netlify termine el despliegue de la rama conectada.
5. Abrir la dirección del sitio en Netlify o el dominio configurado, agregando `/prueba/` si corresponde.

Para una instalación completa, subir `index.html`, `style.css`, `script.js` y `assets/` a la carpeta de publicación. No subir el ZIP sin descomprimir.

## Decisiones de diseño

- Escritorio: navegación desplegada desde 1024 px; tratamientos en dos columnas desde 900 px.
- Tablet: navegación plegable hasta 1023 px, con un único criterio para mostrar el botón y abrir el menú.
- Móvil: lectura en una columna, controles táctiles amplios y un acceso inferior a consulta que se oculta al llegar a contacto.
- Menos de 900 px: la columna única evita comprimir texto, especialmente en catarata. Este diseño sustituye el arreglo anterior que forzaba dos columnas en iPhone.
- Los contenidos siguen disponibles si JavaScript está deshabilitado.
- No hay formulario, agenda automática ni integración de WhatsApp. El enlace de contacto abre el correo existente.

## Pendientes que requieren datos reales

Antes de ampliar el contacto, incorporar centros, direcciones, horarios y canales de coordinación confirmados. El dominio definitivo permitirá completar canonical, sitemap y metadatos sociales con URLs absolutas. No se inventaron datos de consultorio, reseñas, teléfonos ni credenciales.

Esta entrega no fue publicada ni enviada al repositorio de GitHub.
