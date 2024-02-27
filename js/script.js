const items = document.querySelector('.items');
const listaSpesa = ['pane', 'carne', 'insalata', 'acqua'];
let i = 0;
while(i < listaSpesa.length){
  console.log(listaSpesa[i]);
  items.innerHTML += `<li class="">${listaSpesa[i]}</li>`
  i++;
}