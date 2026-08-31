const products=[
{
  name:'باب خشب سويدي ملبس خشب أخضر مقاوم للرطوبة',
  type:'خشبية',
  image:'1787166170367.jpg',
  spec:'خشب سويدي ملبس خشب أخضر مقاوم للرطوبة - دهان حراري'
},
{
  name:'باب خشب سويدي',
  type:'خشبية',
  image:'1786386520663.png',
  spec:'خشب سويدي ملبس أبلكاش ماليزي وطبقة PVC'
},
{
  name:'باب خشب ميرندي',
  type:'خشبية',
  image:'1787412935974.jpg',
  spec:'خشب ميرندي'
}
];

let selectedProduct=0;

function show(id,index=null){
  if(index!==null && products[index]){
    selectedProduct=index;
  }

  document.querySelectorAll('.screen')
    .forEach(s=>s.classList.remove('active'));

  document.getElementById(id).classList.add('active');

  if(id==='product'){
    renderProduct();
  }

  window.scrollTo(0,0);
}

function render(list=products){
  document.getElementById('products').innerHTML=
    list.map((p)=>{
      const i=products.indexOf(p);

      return `
      <article class="card" onclick="show('product',${i})">
        <div class="mini-door">
          <img src="${p.image}" alt="${p.name}">
        </div>

        <h4>${p.name}</h4>
        <p>${p.spec}</p>
      </article>`;
    }).join('');
}

function filter(type){
  render(
    type==='all'
      ? products
      : products.filter(p=>p.type===type)
  );
}

function renderProduct(){
  const p=products[selectedProduct];

  const image=document.getElementById('product-image');
  if(image){
    image.src=p.image;
    image.alt=p.name;
  }

  const name=document.getElementById('product-name');
  if(name) name.textContent=p.name;

  const spec=document.getElementById('product-spec');
  if(spec) spec.textContent=p.spec;

  const material=document.getElementById('details-material');
  if(material) material.textContent=p.spec;
}

render();

if('serviceWorker' in navigator){
  navigator.serviceWorker.register('sw.js').catch(()=>{});
}
