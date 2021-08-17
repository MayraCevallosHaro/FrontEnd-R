const longitud_sepalo = document.getElementById('longitud_sepalo');
const ancho_sepalo = document.getElementById('ancho_sepalo');
const longitud_petalo = document.getElementById('longitud_petalo');
const ancho_petalo = document.getElementById('ancho_petalo');


const res = document.getElementById('res');

let btnSubmit = document.querySelector('.btn');

const url = "http://127.0.0.1:8000/prediccion";

const renderIris = (data) => {
    data.forEach(iris => {
        res.innerHTML = 'La especie de Iris es : '+iris.Specie_Predict;
        console.log('La especie de Iris es : '+iris.Specie_Predict);
    });
}

btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    fetch(`${url}?sl=${longitud_sepalo.value}&sw=${ancho_sepalo.value}&pl=${longitud_petalo.value}&pw=${ancho_petalo.value}`)
    .then(res => res.json())
    .then(data => renderIris(data))
})  