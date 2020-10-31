
const item = document.querySelector('#/nowhere')
item.addEventListener('submit',function(e){
  alert("SUBMIT")
  e.preventDefault();
  const productInput = item.elements.product;
  const qInput = item.elements.qty;
  form(productInput.value,qInput.value)
  productInput.value = '';
  qInput.value = '';
});

const form = (product,qty) => {
  const newitem = document.creatElement('li');
  const itemqty = document.creatElement('b');
  itemqty.append(product)
  newitem.append(itemqty);
  newitem.append(`-${form}`)
  listContainer.append(newitem)
}