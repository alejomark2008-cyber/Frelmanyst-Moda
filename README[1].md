# Frelmanyst Moda

Tienda estática HTML + CSS + JavaScript, lista para GitHub Pages. No necesita Node.js ni instalación.

## Archivos
- `index.html`: estructura de la página
- `styles.css`: diseño adaptable a celular y computador
- `app.js`: categorías, detalles, carrito y pedidos por WhatsApp
- `config.js`: catálogo, precios, tallas, número de WhatsApp y dirección
- `assets/images/`: imágenes que se añadirán después

## Orden recomendado
1. Crea un repositorio público en GitHub.
2. Sube todos los archivos y la carpeta `assets` juntos (no es necesario subirlos uno por uno en un orden técnico).
3. En `Settings → Pages`, elige `Deploy from a branch`, rama `main`, carpeta `/ (root)` y guarda.
4. Abre la URL que te da GitHub Pages.
5. Configura `whatsapp` en `config.js` con indicativo de país y sin +, espacios ni guiones; por ejemplo `573001234567` (solo ejemplo).
6. Cambia cada `price: 0` por el precio real en pesos colombianos y modifica las tallas y descripciones.
7. Cuando tengas fotos, súbelas a `assets/images/` con los nombres de `image` de cada producto y de los banners en `styles.css`.

## Nombres de imágenes previstos
- `banner-hombre.jpg`, `banner-mujer.jpg`, `banner-temporada.jpg`
- `sabana-plaza.jpg` (usar una fotografía real y autorizada)
- `h-jean-baggy.jpg`, `h-jean-entubado.jpg`, `h-chaqueta.jpg`, `h-buzo.jpg`, `h-sudadera.jpg`
- `m-jean-baggy.jpg`, `m-jean-entubado.jpg`, `m-chaqueta.jpg`, `m-buzo.jpg`, `m-jean-diseno.jpg`

## Importante
- Los espacios de imagen muestran fondos de color mientras no haya fotografías.
- El catálogo es de ejemplo y sus precios están sin configurar.
- La compra NO cobra en la página: se envía un mensaje prellenado por WhatsApp.
- Los pedidos no se guardan en una base de datos; el carrito se guarda localmente en el navegador.
- El botón Cómo llegar abre una búsqueda de Sabana Plaza en Google Maps.
- Confirma dirección, locales y horario antes de publicar; se incluyeron los últimos datos proporcionados.
- Para productos adicionales, agrega objetos al arreglo `products` en `config.js` con identificadores únicos.
- Si quieres varias fotos por producto, podemos ampliar la galería cuando entregues las imágenes.
