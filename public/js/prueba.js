const basin = document.querySelector('#basin');
const tbodyTas = document.querySelector('#tbodyTas');
const tbodyPr = document.querySelector('#tbodyPr');

const basinAleatorio = Math.floor(Math.random() * (468 - 1)) + 1;

basin.innerHTML = basinAleatorio;

const CompareForSort = (first, second) => {
    if (first == second)
        return 0;
    if (first < second)
        return -1;
    else
        return 1;
}

const pintarTable = (medicion) => {
    let html = "", array = [];
    for (const key in medicion) {
        if (key !== "WBHUC" && key !== "_id" && key !== "Annual_temp" && key !== "Annual_precip") {
            array.push(medicion[key])
        }
    }
    const arrayt = array.sort(CompareForSort);
    const min = arrayt[0];
    const max = arrayt[arrayt.length - 1];
    const intervalo = (max - min) / 3;

    for (const key in medicion) {
        if (medicion.hasOwnProperty(key)) {
            if (key !== "WBHUC" && key !== "_id") {
                html += `<tr>
                                <td>${key}</td>
                                <td>${medicion[key]}</td>`;
                if (key !== "Annual_temp" && key !== "Annual_precip") {
                    if (medicion[key] < min + intervalo) {
                        html += "<td class='baja'>Baja</td>";
                    }
                    if (medicion[key] >= min + intervalo && medicion[key] < min + 2 * intervalo) {
                        html += "<td class='media'>Media</td>";
                    }
                    if (medicion[key] >= min + 2 * intervalo) {
                        html += "<td class='alta'>Alta</td>";
                    }
                } else {
                    html += "<td></td>";
                }
                html += "</tr>";
            }
        }
    }
    return html;
}

fetch(`http://localhost:3000/tas/temperaturas/${basinAleatorio}`)
    .then(res => res.json())
    .then(temperatura => {
        let temp = temperatura.temperatura[0];
        const html = pintarTable(temp)
        tbodyTas.innerHTML = html;
    }).catch(err => {
        console.log(err);
    })

fetch(`http://localhost:3000/pr/precipitaciones/${basinAleatorio}`)
    .then(res => res.json())
    .then(precipitacion => {
        let pre = precipitacion.precipitacion[0];
        const html = pintarTable(pre);
        tbodyPr.innerHTML = html;
    }).catch(err => {
        console.log(err);
    })