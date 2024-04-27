import '../styles.css';
function component() {
  const element = document.createElement('div');
  element.innerHTML = 'Hello Pink  Fairy Armadillos!';
  return element;
}
document.body.appendChild(component());