document.querySelector(".block2") .addEventListener("click",  changeColor);

function changeColor()
{
// получение элемента по селектору
let headingElement =  document.querySelector(".block6");

if (headingElement.style.backgroundColor == 'black')
{
  headingElement.style.backgroundColor = 'red';
}

else// обращение к интересующему свойству и присвоение нового цвета
{
  headingElement.style.backgroundColor = 'black';
}
}