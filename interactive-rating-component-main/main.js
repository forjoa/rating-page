/*const submit = document.getElementById("submit");

submit.addEventListener("click", () => {
    let boton = document.querySelector(".rating input[type=button]");
    console.log(boton);
});*/

// variable global para guardar la valoración
let valoracion;

// manejador de eventos para cada botón de valoración
const valoracionHandler = (event) => {
    valoracion = event.target.value;
};

// agregar el manejador de eventos a cada botón
const botonesValoracion = document.querySelectorAll(".rating input");
botonesValoracion.forEach((boton) => {
    boton.addEventListener("click", valoracionHandler);
});

// manejador de eventos para el envío del formulario
const submitHandler = (event) => {
    // detener el envío del formulario
    event.preventDefault();

    // o guardar la valoración en una variable
    console.log('La valoración seleccionada es:', valoracion);

    document.getElementById('result').innerHTML = valoracion;
    
    const one = document.querySelector('.content');
    one.classList.add('none');
    const two = document.querySelector('.content-two');
    two.classList.remove('none');

};

// agregar el manejador de eventos al botón de enviar el formulario
const submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click', submitHandler);