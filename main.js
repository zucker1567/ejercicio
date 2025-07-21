
let lista = document.querySelector("#listaProductos");
const categoriaElegida = "Ropa";

const productos = [
    { nombre: "Laptop Lenovo", categoria: "Tecnología", precio: 1500 },
    { nombre: "Celular Samsung", categoria: "Tecnología", precio: 1200 },
    { nombre: "Auriculares JBL", categoria: "Tecnología", precio: 300 },
    { nombre: "Mouse Logitech", categoria: "Tecnología", precio: 150 },
    { nombre: "Teclado Redragon", categoria: "Tecnología", precio: 200 },

    { nombre: "Sofá 3 plazas", categoria: "Hogar", precio: 850 },
    { nombre: "Mesa de comedor", categoria: "Hogar", precio: 400 },
    { nombre: "Lámpara de pie", categoria: "Hogar", precio: 90 },
    { nombre: "Alfombra persa", categoria: "Hogar", precio: 300 },
    { nombre: "Silla ergonómica", categoria: "Hogar", precio: 220 },

    { nombre: "Remera blanca", categoria: "Ropa", precio: 50 },
    { nombre: "Pantalón jeans", categoria: "Ropa", precio: 120 },
    { nombre: "Campera de cuero", categoria: "Ropa", precio: 350 },
    { nombre: "Zapatillas Nike", categoria: "Ropa", precio: 250 },
    { nombre: "Gorra negra", categoria: "Ropa", precio: 40 },

    { nombre: "Martillo", categoria: "Ferretería", precio: 60 },
    { nombre: "Taladro eléctrico", categoria: "Ferretería", precio: 400 },
    { nombre: "Caja de herramientas", categoria: "Ferretería", precio: 220 },
    { nombre: "Destornillador", categoria: "Ferretería", precio: 30 },
    { nombre: "Cinta métrica", categoria: "Ferretería", precio: 25 },
];


let productoImagen=[
    {Laptoplenovo:"https://cdn.pacifiko.com/image/cache/catalog/p/ZDkzNjc0MT_1-1000x1000.png"},
    {CelularSamsug:"https://i.ebayimg.com/thumbs/images/g/9roAAeSw6f5oekfj/s-l1200.jpg"},
    {AudicularesJBL:"https://covercompany.com.uy/cdn/shop/files/2-4063_10760_1.jpg?v=1730480785"},
    {MauseLogitech:"https://casacuesta.com/media/catalog/product/cache/fde49a4ea9a339628caa0bc56aea00ff/3/3/3339039-1.jpg"},
    {TecladoRedragon:""},

    {SofaPlazas:"https://korsaka.com/wp-content/uploads/2023/12/Teclado-Redragon-60-inalambrico-Bluetooth-Fizz-Pro-K616.png"},
    {MesaComedor:"https://m.media-amazon.com/images/I/81dTQi3kxOL._UF894,1000_QL80_.jpg"},
    {LamparaPie:"https://www.tiendasmontevideo.com.uy/wp-content/uploads/2025/02/24600897810001-1.jpg"},
    {Alfombrapersa:"https://m.media-amazon.com/images/I/81akfzMm06L._UF894,1000_QL80_.jpg"},
    {SillaErgonomica:"https://ouomx.com/cdn/shop/files/1_Amazon_26-02-25_v1.jpg?v=1741986511"},

    {RemeraBlancla:"https://img.freepik.com/foto-gratis/retrato-guapo-sonriente-elegante-hipster-lambersexual-modelman-vestido-blanco-camiseta-vaqueros-moda-macho-posar-cerca-pared-estudio-aislado_158538-22615.jpg?semt=ais_hybrid&w=740"},
    {PantalonJeans:"https://caterpillargt.com/cdn/shop/files/30075916_9f5d7e9e-75ec-4363-b797-988bffc24dd4_1024x1024.jpg?v=1751437370"},
    {CamperaCuero:"https://www.digitalsport.com.ar/files/products/62b5ebed9406b-593466-500x500.jpg"},
    {ZapatillasNike:"https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw9d732159/products/NIDX3705-001/NIDX3705-001-6.JPG"},
    {GorraNegra:"https://merxstore.mx/cdn/shop/files/76415-R01.jpg?v=1724877767"},
    
    {Martillo:"https://media.kleintools.io/images/original/klein/h80816.jpg"},
    {TaladroElectrico:"https://kywiec.vtexassets.com/arquivos/ids/172947-800-auto?v=638388536202070000&width=800&height=auto&aspect=true"},
    {CajaHerramienta:"https://www.mikels.com.mx/media/catalog/product/cache/95aae7ce13a353d20b736b25a0c71a20/c/h/ch-88_2.jpg"},
    {Destornillador:"https://yoclaudiomercantil.com.do/wp-content/uploads/2022/08/destornillador-estria-3-8-x-8-ingco-yoclaudiomercantil.jpg"},
    {CintaMetrica:"https://cafesacomercial.com/wp-content/uploads/2023/03/cinta-metrica-5m-tolsen.jpg"},

];


const productosFiltrados = productos.filter(p => p.categoria === categoriaElegida);

lista.innerHTML = "";

for (let i = 0; i < productosFiltrados.length; i++) {
    lista.innerHTML +=`
<div
  class="m-2 group px-10 py-5 bg-white/10 rounded-lg flex flex-col items-center justify-center gap-2 relative after:absolute after:h-full after:bg-[#abd373] z-20 shadow-lg after:-z-20 after:w-full after:inset-0 after:rounded-lg transition-all duration-300 hover:transition-all hover:duration-300 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden cursor-pointer after:-translate-y-full after:hover:translate-y-0 [&amp;_p]:delay-200 [&amp;_p]:transition-all"
>
  <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      version="1.1"
      class="w-44 card1img aspect-square text-[#abd373] group-hover:bg-gray-800 text-5xl rounded-full p-2 transition-all duration-300 group-hover:transition-all group-hover:duration-300 group-hover:-translate-y-2 mx-auto"
      viewBox="0 0 256 256"
      xml:space="preserve"
  >
    <defs></defs>
    <g
      style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;"
      transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
    >
      <path
        d="M 37.712 41.541 c -2.437 -10.14 2.919 -19.609 8.772 -25.137 c -6.221 11.54 -7.41 20.104 -3.461 33.177 l 2.29 -0.854 c -0.882 -2.464 -1.413 -4.873 -1.685 -7.241 c 8.23 -2.355 13.883 -7.209 15.231 -15.926 C 59.796 13.651 52.042 6.72 43.718 0.117 c 3.04 9.758 -11.581 17.964 -10.296 30.949 c 0.271 2.741 0.697 5.33 1.326 7.825"
        style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(127,178,65); fill-rule: nonzero; opacity: 1;"
        transform="matrix(1 0 0 1 0 0)"
        stroke-linecap="round"
      ></path>
      <path
        d="M 34.069 30.999 c 0.917 -12.923 13.599 -21.098 9.649 -30.883 c 1.394 8.216 -9.771 12.38 -12.663 22.195 c -1.575 5.836 -1.151 11.452 3.693 16.579 C 34.119 36.396 33.937 33.751 34.069 30.999 z"
        style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(113,156,64); fill-rule: nonzero; opacity: 1;"
        transform="matrix(1 0 0 1 0 0)"
        stroke-linecap="round"
      ></path>
      <polygon
        points="68.77,61.09 70.46,47.61 43.69,47.61 19.54,47.61 21.23,61.09"
        style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(160,126,99); fill-rule: nonzero; opacity: 1;"
        transform="matrix(1 0 0 1 0 0)"
      ></polygon>
      <polyline
        points="63.11,61.09 59.5,90 44.01,90 30.5,90 26.89,61.09"
        style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(160,126,99); fill-rule: nonzero; opacity: 1;"
        transform="matrix(1 0 0 1 0 0)"
      ></polyline>
      <polygon
        points="62.61,65.09 63.11,61.09 26.89,61.09 27.39,65.09"
        style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(145,107,77); fill-rule: nonzero; opacity: 1;"
        transform="matrix(1 0 0 1 0 0)"
      ></polygon>
    </g>
  </svg>

  <p
    class="cardtxt font-semibold text-gray-200 tracking-wider group-hover:text-gray-700 text-xl"
  >
    ${productos[i].nombre}
  </p>
  <p class="blueberry font-semibold text-gray-600 text-xs">
    ${productos[i].categoria}
  </p>
  <div class="ordernow flex flex-row justify-between items-center w-full">
    <p
      class="ordernow-text text-[#abd373] font-semibold group-hover:text-gray-800"
    >
      $${productos[i].precio}
    </p>
    <p
      class="btun4 lg:inline-flex items-center gap-3 group-hover:bg-white/10 bg-[#abd373] shadow-[10px_10px_150px_#ff9f0d] cursor-pointer py-2 px-4 text-sm font-semibold rounded-full butn"
    >
      Order Now
    </p>
  </div>
</div>
`
}




let productoImagen=[

    {Laptoplenovo:"https://cdn.pacifiko.com/image/cache/catalog/p/ZDkzNjc0MT_1-1000x1000.png"},
    {CelularSamsug:"https://i.ebayimg.com/thumbs/images/g/9roAAeSw6f5oekfj/s-l1200.jpg"},
    {AudicularesJBL:"https://covercompany.com.uy/cdn/shop/files/2-4063_10760_1.jpg?v=1730480785"},
    {MauseLogitech:"https://casacuesta.com/media/catalog/product/cache/fde49a4ea9a339628caa0bc56aea00ff/3/3/3339039-1.jpg"},
    {TecladoRedragon:""},

    {SofaPlazas:"https://korsaka.com/wp-content/uploads/2023/12/Teclado-Redragon-60-inalambrico-Bluetooth-Fizz-Pro-K616.png"},
    {MesaComedor:"https://m.media-amazon.com/images/I/81dTQi3kxOL._UF894,1000_QL80_.jpg"},
    {LamparaPie:"https://www.tiendasmontevideo.com.uy/wp-content/uploads/2025/02/24600897810001-1.jpg"},
    {Alfombrapersa:"https://m.media-amazon.com/images/I/81akfzMm06L._UF894,1000_QL80_.jpg"},
    {SillaErgonomica:"https://ouomx.com/cdn/shop/files/1_Amazon_26-02-25_v1.jpg?v=1741986511"},

    {RemeraBlancla:"https://img.freepik.com/foto-gratis/retrato-guapo-sonriente-elegante-hipster-lambersexual-modelman-vestido-blanco-camiseta-vaqueros-moda-macho-posar-cerca-pared-estudio-aislado_158538-22615.jpg?semt=ais_hybrid&w=740"},
    {PantalonJeans:"https://caterpillargt.com/cdn/shop/files/30075916_9f5d7e9e-75ec-4363-b797-988bffc24dd4_1024x1024.jpg?v=1751437370"},
    {CamperaCuero:"https://www.digitalsport.com.ar/files/products/62b5ebed9406b-593466-500x500.jpg"},
    {ZapatillasNike:"https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw9d732159/products/NIDX3705-001/NIDX3705-001-6.JPG"},
    {GorraNegra:"https://merxstore.mx/cdn/shop/files/76415-R01.jpg?v=1724877767"},
    
    {Martillo:"https://media.kleintools.io/images/original/klein/h80816.jpg"},
    {TaladroElectrico:"https://kywiec.vtexassets.com/arquivos/ids/172947-800-auto?v=638388536202070000&width=800&height=auto&aspect=true"},
    {CajaHerramienta:"https://www.mikels.com.mx/media/catalog/product/cache/95aae7ce13a353d20b736b25a0c71a20/c/h/ch-88_2.jpg"},
    {Destornillador:"https://yoclaudiomercantil.com.do/wp-content/uploads/2022/08/destornillador-estria-3-8-x-8-ingco-yoclaudiomercantil.jpg"},
    {CintaMetrica:"https://cafesacomercial.com/wp-content/uploads/2023/03/cinta-metrica-5m-tolsen.jpg"},

const productos = [
  { nombre: "Laptop Lenovo", categoria: "Tecnología", precio: 1500 },
  { nombre: "Celular Samsung", categoria: "Tecnología", precio: 1200 },
  { nombre: "Auriculares JBL", categoria: "Tecnología", precio: 300 },
  { nombre: "Mouse Logitech", categoria: "Tecnología", precio: 150 },
  { nombre: "Teclado Redragon", categoria: "Tecnología", precio: 200 },

  { nombre: "Sofá 3 plazas", categoria: "Hogar", precio: 850 },
  { nombre: "Mesa de comedor", categoria: "Hogar", precio: 400 },
  { nombre: "Lámpara de pie", categoria: "Hogar", precio: 90 },
  { nombre: "Alfombra persa", categoria: "Hogar", precio: 300 },
  { nombre: "Silla ergonómica", categoria: "Hogar", precio: 220 },

  { nombre: "Remera blanca", categoria: "Ropa", precio: 50 },
  { nombre: "Pantalón jeans", categoria: "Ropa", precio: 120 },
  { nombre: "Campera de cuero", categoria: "Ropa", precio: 350 },
  { nombre: "Zapatillas Nike", categoria: "Ropa", precio: 250 },
  { nombre: "Gorra negra", categoria: "Ropa", precio: 40 },

  { nombre: "Martillo", categoria: "Ferretería", precio: 60 },
  { nombre: "Taladro eléctrico", categoria: "Ferretería", precio: 400 },
  { nombre: "Caja de herramientas", categoria: "Ferretería", precio: 220 },
  { nombre: "Destornillador", categoria: "Ferretería", precio: 30 },
  { nombre: "Cinta métrica", categoria: "Ferretería", precio: 25 },

];

