# Frelmanyst Moda — DEMO lista para GitHub

Proyecto web estático completo. Mantiene la navegación **Inicio → Hombre/Mujer → Categoría → Producto → Carrito → WhatsApp**. En la portada NO se muestra el catálogo. Los colores son oliva, piedra, crema y terracota.

## Estructura

- `index.html`: estructura base y navegación
- `styles.css`: diseño responsive y banners
- `app.js`: navegación, carrito, búsqueda y mensaje de WhatsApp
- `config.js`: **40 productos de demostración**, precios, tallas, rutas de fotos y WhatsApp
- `assets/`: **una sola carpeta**, con 43 imágenes de ejemplo listas para reemplazar
- `qr-frelmanyst-moda.png`: QR que apunta a `https://frelmanyst-moda.vercel.app/` (URL antigua; comprueba que la versión nueva se haya desplegado allí)
- `README.md`: estas instrucciones

## Publicar en GitHub

1. Descomprime el ZIP.
2. En tu repositorio GitHub abre `Add file → Upload files`.
3. Sube **todo el contenido** de esta carpeta a la raíz del repositorio: `index.html`, `styles.css`, `app.js`, `config.js`, `README.md`, QR y carpeta `assets` con las imágenes.
4. Guarda con `Commit changes`. No existe un orden obligatorio entre archivos.
5. Para GitHub Pages: `Settings → Pages → Deploy from a branch → main → /(root) → Save`. Si usas Vercel, conecta el repositorio a un proyecto estático.

## Reemplazar fotografías — MUY FÁCIL

**No necesitas modificar el HTML para cambiar las fotos.** Sube los JPG reales a la carpeta `assets/` usando **exactamente el mismo nombre**, y en GitHub confirma que quieres reemplazar el archivo existente. El diseño se actualizará con esas fotos tras el despliegue.

- `portada-izquierda.jpg` y `portada-derecha.jpg`: imágenes laterales del banner principal. No mostrar productos de entrada.
- `sabana-plaza.jpg`: reemplazar por **fotografía real autorizada** del centro comercial.
- Hombre: `h-baggy.jpg`, `h-baggy-02.jpg` ... `h-baggy-04.jpg`; igual con `h-entubado`, `h-chaqueta`, `h-buzo`, `h-bota`.
- Mujer: `m-baggy.jpg` ... `m-baggy-04.jpg`; igual con `m-entubado`, `m-palazo`, `m-chaqueta`, `m-buzo`.

**Importante:** estos 40 registros y fotos son ejemplos. Cuando envíes PDF con productos reales, prepararemos las fotos con esos nombres y actualizaremos `config.js` para añadir/quitar modelos, tallas, precios y descripciones. Si agregas una imagen con un nombre totalmente nuevo, NO aparecerá sola: requiere un registro en `config.js`.

## WhatsApp y precios

1. En `config.js` escribe el número de WhatsApp de la tienda en `whatsapp`, con indicativo `57`, sin `+` ni espacios. Hasta entonces el botón de compra avisará que falta configurar el número.
2. Los precios están en `0` para no inventar precios reales; la web muestra **Precio por confirmar**. Cuando tengas precios, cambia `price: 0` por el valor COP, p. ej. `price: 129900` (solo ejemplo).
3. El carrito calcula totales y abre un mensaje preparado para WhatsApp. No procesa pagos ni confirma inventario automáticamente.

## Ubicación

Centro Comercial Sabana Plaza, Calle 13 con Carrera 19, Bogotá; locales 274 y 126, primer piso. Horario proporcionado: 10:00 a. m. a 6:30 p. m. Botón de Google Maps funcional mediante búsqueda del centro comercial. Verifica datos antes de publicación.

## Consejo

Los JPG incluidos son **ilustraciones provisionales**, no fotos de mercancía real ni fotos reales del centro comercial. Cuando recibamos los PDF, se reemplazan.
