const irislist = document.querySelector('.tbody');

let output = ``;

const renderIris = (data) => {
    let idx = 1;
    data.forEach(iris => {
        output += `
        <tr data-id="${idx}">
            <th class="tr-num">${idx}</th>
            <td class="tr-sl">${iris.Sepal_Length}</td>
            <td class="tr-sw">${iris.Sepal_Width}</td>
            <td class="tr-pl">${iris.Petal_Length}</td>
            <td class="tr-pw">${iris.Sepal_Width}</td>
            <td class="tr-specie">${iris.Species}</td>
        </tr>
        `;
        idx = idx + 1;
    });
    irislist.innerHTML = output;
}


const url = "http://127.0.0.1:8000/echo";

// Get - Leer conjunto de datos
fetch(url)
    .then(res => res.json())
    .then(data => renderIris(data))

