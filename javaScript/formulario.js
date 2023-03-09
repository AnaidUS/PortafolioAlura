//validación de formulario

const form = document.getElementById ("form");
const button = document.getElementById("submit");

const name = document.getElementById("name");
const email = document.getElementById("email");
const text = document.getElementById("input-full");
const asunto = document.getElementById("asunto");

const formIsValid = {
    name:false,
    email:false,
    text:false,
    asunto:false,
};

form.addEventListener("submit", (e)=>{
    e.preventDefault()
});

name.addEventListener("keyup", (e) =>{
    console.log(e.target)
});