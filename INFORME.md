> Informe histórico de la revisión de diseño. La redacción fue ajustada posteriormente a un tono profesional y neutral; consultar `ACTUALIZACION-TEXTOS.md` y el HTML para los textos vigentes.

# Revisión de la web · Dr. Federico Stipanicic

**Fecha:** 30 de septiembre de 2026. **Base:** V14, cuyo HTML coincide con el `index.html` más reciente disponible; se incorporó además la ilustración de refractiva aprobada después de esa versión.

## Resultado

Se revisaron y reescribieron HTML, CSS y JavaScript. Se preparó un solo sitio responsive con composiciones diferenciadas para escritorio y móvil, manteniendo la información profesional y las fotografías existentes. Es una entrega de archivos para revisar y luego publicar; no se modificó GitHub ni el sitio en producción.

## Errores encontrados y corregidos

| Hallazgo en la V14 | Efecto | Corrección |
| --- | --- | --- |
| Etiquetas `div` sin cerrar en Catarata | El recuadro de imagen terminaba dentro de la columna de texto. El navegador reparaba el documento de forma implícita. | Estructura semántica reconstruida; el bloque lateral es ahora un panel de tipos de lentes. |
| Menú oculto hasta 900 px, pero reglas de apertura solo hasta 600 px | Entre 601 y 900 px el botón no mostraba la navegación, aunque cambiaba su estado. | Un único punto de corte para el menú; comprobado con apertura, selección y Escape. |
| Dos columnas forzadas en móvil en Catarata | Texto comprimido y mala legibilidad en pantallas pequeñas. | Una columna por debajo de 900 px; dos columnas amplias en escritorio. |
| Imágenes con alturas mínimas y `height:100%` sin un criterio consistente | Riesgo de estiramiento, espacios vacíos y retrato recortado. | Proporciones intrínsecas, `width`/`height` y presentación sin recortar las fotografías. |
| Retrato PNG de 2,19 MB | Descarga desproporcionada para el tamaño mostrado. | WebP de 480, 800 y 1086 px; `srcset` selecciona el tamaño adecuado. |
| Imágenes sin dimensiones en varias secciones | Podían desplazar el contenido mientras cargaban. | Dimensiones explícitas y carga diferida de imágenes secundarias. |
| Menú sin relación `aria-controls`, sin Escape y sin cierre al seleccionar | Peor experiencia con teclado y móvil. | Estados accesibles, restauración de foco y cierre al navegar o salir del menú. |
| Desplazamiento suave sin respetar preferencias del usuario | Animación aun con reducción de movimiento activada. | `prefers-reduced-motion` y foco visible. |
| Enlaces “Ver más” repetidos y FAQ sin título de sección | Navegación menos clara para lectores de pantalla. | Nombres descriptivos, un solo H1, títulos y regiones identificadas. |
| Dependencia de Google Fonts durante la visita | Peticiones externas y una dependencia de red adicional. | Fuentes Manrope alojadas en `assets`, con su licencia. |

## Diseño de escritorio y móvil

**Identidad visual.** Fondo cálido, azul profundo y verde sobrio. Georgia para títulos y Manrope para lectura y controles. El cambio busca una imagen médica seria, con mayor jerarquía y espacio entre elementos.

**Escritorio.** Portada con retrato a la derecha, métricas alineadas, especialidades comparables y secciones en dos columnas. Catarata utiliza un panel lateral útil en lugar de un marcador de imagen vacío.

**Móvil.** Navegación plegable, una columna, tipografía principal de 16–18 px y controles de al menos 44 px en las comprobaciones. El acceso inferior a consulta respeta el área segura y se oculta al llegar a contacto. Las fotos conservan su proporción.

**Contenido e imágenes.** Se conserva la foto quirúrgica completa en Sobre mí. La imagen más reciente de refractiva está identificada como ilustración conceptual. Se mantuvieron el nombre, los indicadores +9 / +10 / +2500, las técnicas, la formación y las sociedades existentes.

## Secciones: qué agregué, integré o quité

| Decisión aplicada | Motivo |
| --- | --- |
| Dar un bloque breve a la consulta oftalmológica general | La portada la mencionaba, pero el recorrido posterior parecía centrado exclusivamente en cirugía. |
| Integrar actividad académica en Sobre mí, con un desplegable | Evita repetir docencia, congresos e investigación en una sección adicional extensa. |
| Condensar la filosofía de tecnología | Había varias explicaciones casi equivalentes sobre individualizar decisiones. Se conserva una introducción y los cuatro equipos/conceptos. |
| Quitar la pregunta que repetía el papel de la tecnología | Ya queda respondida en su sección. |
| Quitar el marcador vacío de imagen de catarata | Un panel de lentes aporta información real mientras no exista una fotografía elegida para ese lugar. |

## Textos revisados

| Tema | Cambio aplicado |
| --- | --- |
| Portada | “Cuidar tu visión empieza por escucharte. Consulta oftalmológica y tratamientos planificados de acuerdo con tus ojos, tus actividades y tus necesidades.” |
| Catarata | Explicación más breve, síntomas y una frase que aclara que el cristalino opaco se reemplaza por una lente intraocular. |
| Tóricas | Se aclara que la corrección del astigmatismo puede combinarse con diseños monofocales, EDOF o multifocales; no es una categoría de enfoque independiente. |
| Refractiva | Se prioriza reducir la dependencia de anteojos y evaluar a cada paciente. Se mantienen PRK, LASIK, femtoLASIK y CLEAR. |
| Segmento anterior | El crosslinking queda ligado al queratocono y al objetivo de frenar progresión, evitando que parezca un tratamiento del pterigión. |
| Duración | Se conservan los 20 minutos como referencia de tu práctica para catarata, aclarando que preparación y recuperación inmediata requieren tiempo adicional. |
| Reintegro | Se habla de algunas tareas de oficina al día siguiente en ciertos casos, con indicaciones específicas para esfuerzo, ejercicio y conducción. |
| Anestesia | Se especifica que las gotas se usan en muchas cirugías de catarata y refractivas; otras medidas dependen del procedimiento y del paciente. |
| Dolor | Se reemplaza el “No” absoluto por “habitualmente no se siente dolor”, admitiendo luces, contacto o presión durante el procedimiento. |

Las modificaciones clínicas son redacción para pacientes, no instrucciones posoperatorias individuales. Se apoyan en las fuentes de referencia al final del informe y conservan tus decisiones sobre técnica y tiempo orientativo de catarata.

## Comprobaciones realizadas

- HTML validado sin errores con `html-validate:recommended`. JavaScript validado sintácticamente.
- Navegador de prueba: Chromium 153 en entorno automatizado.
- Anchos: **320, 360, 375, 390, 430, 600, 768, 820, 900, 1023, 1024, 1280, 1440 y 1920 px**.
- Sin desplazamiento horizontal ni elementos fuera del ancho disponible en esos tamaños.
- Sin errores de JavaScript ni recursos locales con respuesta HTTP de error en las pruebas.
- Menú: apertura, Escape, devolución de foco y cierre al seleccionar enlaces.
- Todos los desplegables se abren y cierran con teclado; también funcionan sin JavaScript.
- Navegación disponible sin JavaScript; enlaces internos con destinos válidos y sin IDs duplicados.
- Fotos con proporciones correctas y dimensiones declaradas; comprobación de selección responsive.
- Preferencia de movimiento reducido y acceso inferior de contacto comprobados.
- Texto ampliado al 200% a 1280 px: sin desbordamiento horizontal. Reflow a 320 px también comprobado.
- Axe-core: sin infracciones detectadas en los controles automatizados WCAG A/AA seleccionados, a 390, 768 y 1440 px, incluyendo una revisión con desplegables abiertos. Algunos contrastes sobre imágenes requieren revisión manual; se revisó la presentación y se usa fondo opaco bajo el rótulo del retrato. Esto no constituye una certificación completa de accesibilidad.
- Inspección visual de portada, tratamientos y página completa.

**Límites de la prueba.** No se realizó una prueba física en iPhone/Safari ni un recorrido con VoiceOver. No se midió el servidor público con Lighthouse o Core Web Vitals. El enlace `mailto:` se verificó en el código; su apertura depende del cliente de correo configurado. No se enviaron mensajes.

## Rendimiento medido

| Medida | V14 | Revisión |
| --- | ---: | ---: |
| Archivos de la web, sin documentación de entrega | 3.420.198 bytes | 563.807 bytes |
| Reducción de tamaño total | — | **83,5 %** |
| Retrato en uso | PNG de 2.189.225 bytes | WebP de 800 px: 33.702 bytes; se elige otra variante cuando corresponde |

Son tamaños de los archivos locales, no tiempos de carga ni puntuaciones de rendimiento. Las variantes de imagen aumentan ligeramente el tamaño guardado del sitio, pero el navegador descarga las que necesita. La ilustración nueva de refractiva se incluye en esta comparación.

## Lo que agregaría después

1. **Dónde atiendo.** Centros, direcciones, horarios y enlaces reales para coordinar. Es el dato práctico más importante que falta. Confirmar qué sedes de Montevideo, Colonia, Carmelo y Punta del Este querés mostrar y cómo se agenda en cada una.
2. **Canal de agenda definitivo.** Un enlace de WhatsApp o sistema de coordinación real, si querés usarlo. Por ahora se conserva el email existente. No hay una agenda automática.
3. **Formación con instituciones.** Si querés ampliar el perfil, conviene mostrar institución y tipo de formación en vez de sumar únicamente ciudades. Debe mantenerse una descripción fiel de cada observership o fellowship.
4. **Fotografía clínica para pacientes.** Para una futura iteración, consideraría una foto de consulta o quirófano menos gráfica como alternativa en Sobre mí. En esta entrega conservé la fotografía que ya habías elegido, completa.
5. **SEO al publicar.** Completar dominio canónico, `og:url`, imagen social con URL absoluta y sitemap con la dirección real. La página ya tiene título, descripción, idioma, metadatos básicos y datos estructurados de la persona, sin inventar una clínica ni su dirección.

No agregaría por ahora un blog, carrusel de novedades o testimonios: aumentan mantenimiento y longitud sin resolver la principal necesidad pendiente, que es facilitar la coordinación de la consulta.

## Referencias

- W3C, reflow: https://www.w3.org/WAI/WCAG22/Understanding/reflow.html
- W3C, WCAG 2.2: https://www.w3.org/TR/WCAG22/
- NHS, cirugía de catarata: https://www.nhs.uk/tests-and-treatments/cataract-surgery/
- National Eye Institute, cirugía de catarata: https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/cataracts/cataract-surgery
- American Academy of Ophthalmology / EyeWiki, lentes tóricas: https://eyewiki.aao.org/Toric_IOLs
- Moorfields Eye Hospital, crosslinking corneal: https://www.moorfields.nhs.uk/eye-conditions/keratoconus/corneal-cross-linking

Fuentes consultadas el 30 de septiembre de 2026. No se trasladaron al sitio estadísticas de resultados ni promesas de eficacia tomadas de estas páginas.
