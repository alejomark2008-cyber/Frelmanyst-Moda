# Frelmanyst Moda — sitio web listo para GitHub y Vercel

## Contenido
- `index.html`: entrada de la tienda
- `styles.css`: diseño adaptable y animaciones
- `app.js`: navegación, carrusel, detalle de producto, carrito y WhatsApp
- `config.js`: **AQUÍ** agregar el número de WhatsApp y la foto del local
- `products.json`: catálogo completo, nombres, precios, tallas, imágenes y categorías
- `assets/`: **todas las fotos reales** extraídas de los PDF y una imagen gráfica provisional para el carrusel

## Instalación
1. Descomprime este ZIP.
2. Sube **todo el contenido** de esta carpeta a la raíz de tu repositorio GitHub (incluyendo `assets` y `products.json`).
3. En Vercel, importa el repositorio como proyecto estático sin comando de compilación.
4. Para probar localmente usa `python -m http.server 8000` y visita http://localhost:8000 (abrir `index.html` como archivo puede impedir que se cargue `products.json`).

## WhatsApp pendiente
Abre `config.js` y reemplaza `whatsappNumber: ''` por el número real con prefijo 57, sin espacios ni signo +. Hasta entonces, el botón informa que falta configurar el número; no envía pedidos a números inventados.

## Foto del local pendiente
Guarda la foto como `assets/foto-local.jpg` y cambia en `config.js` la línea `storePhoto: ''` por `storePhoto: 'assets/foto-local.jpg'`.

## Imágenes de prendas
Las fotografías actuales **son las extraídas de tus PDF**, organizadas por modelo/color. Para sustituir una imagen, conserva exactamente su nombre en `assets`. Para agregar más productos o fotos, edita `products.json` o envía los PDF para que preparemos una actualización.

## Catálogo
Se incluyeron 68 variantes individuales provenientes de 19 PDF. Cuando hay fotos de frente y atrás, están agrupadas en el mismo producto. Algunos archivos solo incluyen una vista. Los nombres de colores son etiquetas descriptivas provisionales que deben validarse con el inventario; los precios provienen del Excel.

## Tallas
Jeans hombre: 28,30,32,34,36. Jeans mujer: 6,8,10,12,14. Chaquetas hombre: S a 3XL. Chaquetas mujer: S a XL. Sudaderas baggy hombre: talla única. Para las chaquetas cuero oversize dama se aplicó provisionalmente la excepción de talla única indicada para 'Versaile'; confirmar si corresponde a este PDF.

## Nota de fidelidad
No se inventó la foto del local ni un número de WhatsApp. El carrusel de inicio usa una imagen gráfica provisional y fotos reales de los productos; los banners de colecciones usan prendas reales mientras se reciben fotos de modelos vistiendo esas prendas. El emparejamiento de imágenes sigue la secuencia de los PDF; verificar cualquier variante cuya secuencia sea ambigua.
