const products=[
{name:'باب WPC كلاسيك',price:'240,000',type:'WPC'},
{name:'باب مودرن بخطوط',price:'260,000',type:'داخلية'},
{name:'باب زجاج فريم',price:'320,000',type:'زجاج'},
{name:'باب حمام مودرن',price:'220,000',type:'حمامات'},
{name:'باب خشبي أنيق',price:'280,000',type:'داخلية'},
{name:'باب WPC فاخر',price:'300,000',type:'WPC'}];
function show(id){document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));document.getElementById(id).classList.add('active');window.scrollTo(0,0)}
function render(list=products){document.getElementById('products').innerHTML=list.map((p,i)=>`<article class="card" onclick="show('product')"><div class="mini-door"></div><h4>${p.name}</h4><p>${p.price} ريال</p></article>`).join('')}
function filter(type){render(type==='all'?products:products.filter(p=>p.type===type))}
render();
if('serviceWorker' in navigator){navigator.serviceWorker.register('sw.js').catch(()=>{})}