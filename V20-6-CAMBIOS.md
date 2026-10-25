# V20.6

Ajustes incorporados sobre V20.5:

1. Terminología
- Español: “Corrección de errores refractivos.”
- Inglés ya estaba correcto: “Correction of refractive errors.”

2. Selector ES / EN en mobile
- Área táctil mínima de 44 × 44 px en teléfonos.

3. WhatsApp flotante
- Tablet (600–899 px): vuelve cerca del borde inferior, ya que no existe la CTA fija.
- Teléfono (<600 px): queda elevado sobre la barra fija “Agendar consulta”.
- Se incorpora el `safe-area-inset-bottom` para iPhone.

4. Safe area de iPhone
- Se agregó `viewport-fit=cover` al viewport en español e inglés.

5. Hero
- Se mantiene el orden actual: texto → foto → contadores.
- Se conservan los contadores animados +9 / +10 / +2500.

6. Accesibilidad
- Corrección del aria-label del botón flotante de WhatsApp en inglés.

El resto del diseño y contenido permanece igual a V20.5.
