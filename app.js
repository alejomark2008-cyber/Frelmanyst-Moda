
const cfg=window.STORE_CONFIG;
const $=s=>document.querySelector(s);
const money=n=>Number(n||0).toLocaleString('es-CO',{style:'currency',currency:'COP',maximumFractionDigits:0});
const categories=[
{gender:'hombre',category:'jeans',style:'oversize',label:'JEANS OVERSIZE (BAGGY)',image:'h-jean-baggy.jpg'},
{gender:'hombre',category:'jeans',style:'clasico',label:'JEANS ENTUBADOS',image:'h-jean-entubado.jpg'},
{gender:'hombre',category:'chaquetas',label:'CHAQUETAS',image:'h-chaqueta.jpg'},
{gender:'hombre',category:'buzos',label:'BUZOS',image:'h-buzo.jpg'},
{gender:'hombre',category:'sudaderas',label:'SUDADERAS BOTA RECTA',image:'h-sudadera.jpg'},
{gender:'mujer',category:'jeans',style:'oversize',label:'JEANS OVERSIZE (BAGGY)',image:'m-jean-baggy.jpg'},
{gender:'mujer',category:'jeans',style:'clasico',label:'JEANS ENTUBADOS',image:'m-jean-entubado.jpg'},
{gender:'mujer',category:'chaquetas',label:'CHAQUETAS',image:'m-chaqueta.jpg'},
{gender:'mujer',category:'buzos',label:'BUZOS',image:'m-buzo.jpg'},
{gender:'mujer',category:'jeans',style:'diseno',label:'JEANS CON DISEÑO',image:'m-jean-diseno.jpg'}
];
let cart=[];try{cart=JSON.parse(localStorage.getItem('frelmanyst-cart')||'[]')}catch(e){}
let filter={gender:'all',category:'all',style:null,search:''};
let selectedProduct=null,selectedSize='';
function imgUrl(path){return path ? `url("${path.replace(/"/g,'')}")`:''}
function categoryRender(){
 for(const gender of ['hombre','mujer']){
 const container=$(gender==='hombre'?'#menCategories':'#womenCategories');
 container.innerHTML=categories.filter(c=>c.gender===gender).map(c=>`<button class="category-card" data-gender="${c.gender}" data-category="${c.category}" data-style="${c.style||''}" style="background-image:linear-gradient(#0002,#0002),${imgUrl('assets/images/'+c.image)}"><span>${c.label} →</span></button>`).join('');
 }
}
function filteredProducts(){return cfg.products.filter(p=>(filter.gender==='all'||p.gender===filter.gender)&&(filter.category==='all'||p.category===filter.category)&&(!filter.style||p.style===filter.style)&&(!filter.search||p.name.toLowerCase().includes(filter.search)))}
function renderProducts(){
 const list=filteredProducts();
 $('#productHeading').textContent=filter.search?`RESULTADOS: ${filter.search.toUpperCase()}`:filter.gender==='all'?'NUESTROS PRODUCTOS':`${filter.gender.toUpperCase()} · ${filter.category==='all'?'TODOS':filter.category.toUpperCase()}`;
 $('#productGrid').innerHTML=list.length?list.map(p=>`<article class="product-card"><div class="product-image" style="background-image:${imgUrl(p.image)}"><span>${p.name}</span></div><div class="product-info"><h3>${p.name}</h3><strong>${p.price>0?money(p.price):'Precio por configurar'}</strong><button data-product="${p.id}">VER DETALLES →</button></div></article>`).join(''):'<p>No hay productos cargados para esta selección.</p>';
}
function setFilter(gender,category,style=null){filter={gender,category,style,search:''};$('#searchInput').value='';renderProducts();$('#catalogo').scrollIntoView({behavior:'smooth'})}
function showModal(id){
 const p=cfg.products.find(x=>x.id===id);if(!p)return;selectedProduct=p;selectedSize='';
 $('#productModal').innerHTML=`<button class="modal-close" id="closeModal" aria-label="Cerrar">✕</button><div class="modal-inner"><div class="modal-image" style="background-image:${imgUrl(p.image)}">${p.name}</div><div class="modal-info"><small>FRELMANYST MODA · ${p.gender.toUpperCase()}</small><h2>${p.name}</h2><h3>${p.price>0?money(p.price):'Precio por configurar'}</h3><p>${p.description||'Consulta disponibilidad, colores y detalles de esta prenda por WhatsApp.'}</p><b>Selecciona tu talla</b><div class="sizes">${p.sizes.map(s=>`<button class="size-btn" data-size="${s}">${s}</button>`).join('')}</div><label>Cantidad <input id="qty" type="number" min="1" max="99" value="1"></label><p class="notice">Precios y existencias sujetos a confirmación.</p><button id="addToCart" class="btn dark">AGREGAR AL CARRITO</button><button id="buyNow" class="btn whatsapp">COMPRAR POR WHATSAPP</button></div></div>`;
 $('#productModal').classList.remove('hidden');$('#overlay').classList.remove('hidden');
}
function closeModal(){$('#productModal').classList.add('hidden');if(!$('#drawer').classList.contains('open'))$('#overlay').classList.add('hidden')}
function saveCart(){localStorage.setItem('frelmanyst-cart',JSON.stringify(cart));renderCart()}
function addCurrent(){if(!selectedSize){alert('Selecciona una talla.');return false}const qty=Math.max(1,Math.min(99,parseInt($('#qty').value)||1));const item=cart.find(x=>x.id===selectedProduct.id&&x.size===selectedSize);if(item)item.qty+=qty;else cart.push({id:selectedProduct.id,size:selectedSize,qty});saveCart();closeModal();return true}
function renderCart(){
 $('#cartCount').textContent=cart.reduce((s,x)=>s+x.qty,0);
 let total=0,missing=false;
 $('#cartItems').innerHTML=cart.length?cart.map((x,i)=>{const p=cfg.products.find(p=>p.id===x.id);if(!p)return '';total+=p.price*x.qty;if(!p.price)missing=true;return `<div class="cart-line"><div><b>${p.name}</b><p>Talla: ${x.size} · ${p.price?money(p.price):'Precio por confirmar'}</p><button data-change="${i}|-1">−</button> ${x.qty} <button data-change="${i}|1">+</button></div><button data-remove="${i}" aria-label="Eliminar producto">✕</button></div>`}).join(''):'<p class="empty">Tu carrito está vacío.</p>';
 $('#cartTotal').textContent=money(total)+(missing?' + precios por confirmar':'');
 $('#checkout').disabled=!cart.length;
}
function openCart(){closeModal();$('#drawer').classList.add('open');$('#overlay').classList.remove('hidden')}
function closeCart(){$('#drawer').classList.remove('open');$('#overlay').classList.add('hidden')}
function whatsappCheckout(){
 if(!cart.length)return;
 const phone=(cfg.whatsapp||'').replace(/\D/g,'');
 if(!phone){alert('Falta configurar el número de WhatsApp en config.js.');return}
 let total=0,missing=false;
 const lines=cart.map(x=>{const p=cfg.products.find(p=>p.id===x.id);if(!p)return '';total+=p.price*x.qty;if(!p.price)missing=true;return `🛍️ ${p.name}\nTalla: ${x.size}\nCantidad: ${x.qty}\nSubtotal: ${p.price?money(p.price*x.qty):'Por confirmar'}`});
 const msg=`Hola, he visitado la página de Frelmanyst Moda y quiero realizar el siguiente pedido:\n\n${lines.join('\n\n')}\n\n💰 TOTAL: ${money(total)}${missing?' (más productos con precio por confirmar)':''}\n\n¿Me pueden confirmar la disponibilidad de los productos y los datos para realizar el envío?\n¡Muchas gracias!`;
 window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`,'_blank','noopener,noreferrer');
}
document.addEventListener('click',e=>{
 const cat=e.target.closest('[data-category]');if(cat){setFilter(cat.dataset.gender,cat.dataset.category,cat.dataset.style||null);return}
 const fil=e.target.closest('[data-filter]');if(fil){const [g,c]=fil.dataset.filter.split('|');setFilter(g,c);return}
 const prod=e.target.closest('[data-product]');if(prod){showModal(prod.dataset.product);return}
 const size=e.target.closest('[data-size]');if(size){selectedSize=size.dataset.size;document.querySelectorAll('.size-btn').forEach(b=>b.classList.toggle('active',b===size));return}
 if(e.target.closest('#closeModal'))closeModal();
 if(e.target.closest('#addToCart')){if(addCurrent())openCart()}
 if(e.target.closest('#buyNow')){if(addCurrent())whatsappCheckout()}
 const change=e.target.closest('[data-change]');if(change){const [i,n]=change.dataset.change.split('|').map(Number);cart[i].qty+=n;if(cart[i].qty<=0)cart.splice(i,1);saveCart()}
 const remove=e.target.closest('[data-remove]');if(remove){cart.splice(Number(remove.dataset.remove),1);saveCart()}
});
$('#cartToggle').onclick=openCart;$('#closeCart').onclick=closeCart;$('#overlay').onclick=()=>{closeCart();closeModal()};
$('#checkout').onclick=whatsappCheckout;
$('#searchToggle').onclick=()=>{$('#searchBar').classList.toggle('hidden');$('#searchInput').focus()};
$('#searchClose').onclick=()=>$('#searchBar').classList.add('hidden');
$('#searchInput').oninput=e=>{filter={gender:'all',category:'all',style:null,search:e.target.value.trim().toLowerCase()};renderProducts();if(filter.search)$('#catalogo').scrollIntoView({behavior:'smooth'})};
$('#year').textContent=new Date().getFullYear();
categoryRender();renderProducts();renderCart();
