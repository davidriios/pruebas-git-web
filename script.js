

const header__h1 = document.querySelector(".header__h1");
const valorInput = document.querySelector(".header__input");
const header__button = document.querySelector(".header__button");

//funcion para cambiar el titulo del h1
const cambioTitulo = () => {
    
    const texto = valorInput.value;
    header__h1.textContent= texto;
    header__button.setAttribute("disabled", "");
    const mensaje = document.createElement("p");
          
}// fin de la llave de la funcion de cambioTitulo 

//llamamos el metodo de escucha addEventListener
header__button.addEventListener("click", cambioTitulo);

//desabiliar button al dar click
const button = document.querySelector(".button");
const desabilitarButton =()=> button.setAttribute("disabled","");
button.addEventListener("click", desabilitarButton);

// console.log(button.getAttributeNames());

//tipos de array 
const letters = ["A", "B", "C", "D", "E"];

console.log(letters.length);
letters.push("DAVID");

console.log(letters);

//recorrer el arreglo con foreach

const valorRandom = Math.round(Math.random()*100);
const p_random = document.querySelector(".p_ramdom");

p_random.textContent = valorRandom;