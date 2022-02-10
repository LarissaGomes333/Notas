//Essas variáveis já iniciam a página com uma Row 'pronta'.
//var qtdAlunos = 1
var qtdAlunos = 1
    //var qtdNotas = 4
var qtdNotas = 4
var dados_aluno = []

//TESTE adicionar() e deletar()

/*function deletar() {
    document.getElementById("tabelanotas").deleteRow(0);

    //copiado posteriormente
    let deletar = document.createElement("button");
    deletar.innerHTML = "X";
    document.body.appendChild(deletar);
    getElementById("coldeletar").appendChild(deletar)
    deletar.addEventListener("click", function () {
        //alert("did something");
        var d = row.rowIndex;
        document.getElementById('tabelanotas').deleteRow(d);

    });   //OK!
}*/

/*function deletar() {
    document.getElementById("tabelanotas").deleteRow(0);
}*/

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function verificaMedias() {
    let somaMedia = 0
    let contador = 0
    for (let y = 2; y <= qtdAlunos; y = y + 1) {

        let media = 0
        let resultado = 0

        //let somaMedia = 0
        //var contador = 0
        //var m = 0

        for (let x = 1; x <= qtdNotas; x++) {
            let nota = parseFloat(document.getElementById(`nota${y}${x}`).value);
            resultado = nota + resultado
        }

        media = resultado / qtdNotas
        contador += 1
        console.log(contador)
        somaMedia += media;


        document.getElementById(`media${y}`).innerText = media

        //mediaTurma = parseFloat(document.getElementById(`media${y}`).value) + mediaTurma

        //document.getElementById("mediaGeral").innerHTML = mediaGeral

        if (media >= 5) {
            document.getElementById(`situacao${y}`).innerText = "Aprovado"
            document.getElementById(`situacao${y}`).style.color = "Green"

        } else if (media >= 4 && media < 5) {
            document.getElementById(`situacao${y}`).innerText = "Recuperação"
            document.getElementById(`situacao${y}`).style.color = "Orange"
        } else if (media < 4) {
            document.getElementById(`situacao${y}`).innerText = "Reprovado"
            document.getElementById(`situacao${y}`).style.color = "Red"
        }

        //mediaTurma = media + mediaTurma;
        //mediaGeral = mediaTurma / (qtdAlunos - 1);

        //document.getElementById("mediaGeral").innerText = somaMedia;
        //let somaMedia = 0
        //let somaMedia = 0
        //let mediaAluno = parseFloat(document.getElementById(`media${y}`).value);
        // for (let z = 1; z <= qtdAlunos; z = z + 1){
        //     // var somaMedia = 0
        //     let mediaAluno = parseFloat(document.getElementById(`media${y}`).value);
        //     somaMedia = mediaAluno + somaMedia

        //     console.log(mediaAluno)
        //     //document.getElementById("mediaGeral").innerText = (somaMedia / (qtdAlunos - 1));
        // }

        //somaMedia = 0
        //document.getElementById("mediaGeral").innerText = somaMedia;
    }
    document.getElementById("mediaGeral").innerText = somaMedia / contador;
}

// function mediaGeral(){
//     let somaMedia = 0
//     //let mediaAluno = parseFloat(document.getElementById(`media${y}`).value);

//     for (let z = 1; z <= qtdAlunos; z = z + 1){

//         let mediaAluno = parseFloat(document.getElementById(`media${z}`).value);
//         somaMedia = mediaAluno + somaMedia;

//         console.log(somaMedia)
//         //document.getElementById("mediaGeral").innerText = (somaMedia / (qtdAlunos - 1));
//     }
//     document.getElementById("mediaGeral").innerHTML = somaMedia;
// }

// function crescente() {
//     for (let x = 1; x <= qtdAlunos; x++) {
//         let dados = {
//             nome: document.getElementById(`nome${x}`).value,
//             media: parseFloat(document.getElementById(`media${x}`).value),
//         };

//         dados_aluno.push(dados)
//     }
//     // console.log(dados_aluno)
//     dados_aluno.sort(function (a, b) {
//         if (a.nome > b.nome) {
//             return 1;
//         }
//         if (a.nome < b.nome) {
//             return -1;
//         }
//         // a must be equal to b
//         return 0;
//     })

//     for (let i = 0; i <= dados_aluno.length; i++) {
//         console.log(dados_aluno[i])
//     }
// }



// function crescente() {
//     for (let x = 1; x <= qtdAlunos; x++) {
//         let dados = {
//             nome: document.getElementById(`nome${x}`).value,
//             media: parseFloat(document.getElementById(`media${x}`).value),
//         };

//         dados_aluno.push(dados)
//     }
//     // console.log(dados_aluno)
//     dados_aluno.sort(function (a, b) {
//         if (a.nome > b.nome) {
//             return 1;
//         }
//         if (a.nome < b.nome) {
//             return -1;
//         }
//         // a must be equal to b
//         return 0;
//     })

//     for (let i = 0; i <= dados_aluno.length; i++) {
//         console.log(dados_aluno[i])
//     }
// }

function criarLinha() {
    if (qtdAlunos <= 10) {
        qtdAlunos += 1

        let row
        let row_data
        let row_data_input
        let row_data_output
        var nome = document.getElementById('camponome').value

        row = document.createElement('tr');
        row_data = document.createElement('td');
        row.setAttribute("id", `linha${qtdAlunos}`);
        row_data_input = document.createElement('output');
        row_data_input.classList.add("form-control");
        row_data_input.setAttribute("id", `nome${qtdAlunos}`);
        row_data_input.type = "text"
        row_data_input.innerHTML = nome;
        row_data.appendChild(row_data_input);
        row.appendChild(row_data);

        for (let x = 1; x <= qtdNotas; x++) {
            row_data = document.createElement('td');
            row_data.setAttribute("id", `coluna${qtdAlunos}${x}`);
            row_data_input = document.createElement('input');
            row_data_input.classList.add("form-control");
            row_data_input.setAttribute("id", `nota${qtdAlunos}${x}`);
            row_data_input.type = "number"
            row_data_input.min = 0
            row_data_input.max = 100
            row_data.appendChild(row_data_input);
            row.appendChild(row_data);

        }

        row_data = document.createElement('td');
        row_data.setAttribute("id", `coluna_media${qtdAlunos}`);
        row_data_output = document.createElement('output');
        row_data_output.setAttribute("id", `media${qtdAlunos}`);
        row_data.appendChild(row_data_output);
        row.appendChild(row_data);

        row_data = document.createElement('td');
        row_data_output = document.createElement('output');
        row_data_output.setAttribute("id", `situacao${qtdAlunos}`);
        row_data.appendChild(row_data_output);
        row.appendChild(row_data);

        row_data = document.createElement('td');
        let botao = document.createElement('button');
        botao.classList.add("btn", "btn-secondary", "btn-lg");
        botao.innerText = 'X';
        botao.addEventListener("click", function() {
            //alert("did something");
            if (qtdAlunos > 1) {
                var d = row.rowIndex;
                document.getElementById('tabelanotas').deleteRow(d);
                qtdAlunos -= 1
            }

        }); //OK!
        botao.setAttribute("id", 'botao');
        row_data.appendChild(botao);
        row.appendChild(row_data);

        document.getElementById('tableBody').appendChild(row);
    }
}



// function deletarLinha() {
//     if (qtdAlunos > 1) {
//         let child = document.getElementById(`linha${qtdAlunos}`)
//         document.getElementById('tableBody').removeChild(child);
//         qtdAlunos -= 1
//     }
// }

function criarColuna() {
    if (qtdNotas < 6) {
        qtdNotas += 1

        let column
        let column_media
        let row
        let row_data
        let row_data_input

        column = document.createElement('th');
        column.setAttribute("id", `coluna0${qtdNotas}`);
        column.innerHTML = `Nota ${qtdNotas}`;

        column_media = document.getElementById('coluna_media0');
        document.getElementById('linha0').insertBefore(column, column_media)

        for (let x = 1; x <= qtdAlunos; x++) {
            row_data = document.createElement('td');
            row_data.setAttribute("id", `coluna${x}${qtdNotas}`);
            row_data_input = document.createElement('input');
            row_data_input.classList.add("form-control");
            row_data_input.setAttribute("id", `nota${x}${qtdNotas}`);
            row_data_input.type = "number"
            row_data_input.min = 0
            row_data_input.max = 100
            row_data.appendChild(row_data_input);
            media = document.getElementById(`coluna_media${x}`);
            console.log(media)
            console.log(row_data)
            document.getElementById(`linha${x}`).insertBefore(row_data, media)

            //var mediaGeral = 
        }

    }
}

function deletarColuna() {
    if (qtdNotas > 1) {

        for (let x = 0; x <= qtdAlunos; x++) {
            let child = document.getElementById(`coluna${x}${qtdNotas}`)
            console.log(child)
            document.getElementById(`linha${x}`).removeChild(child);

        }

        qtdNotas -= 1
    }
}

//Essa função é da organização da tabela em asc e des.
function sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("tabelanotas");
    switching = true;
    // Configura a ordenação como ascendente;
    dir = "asc";
    /* Faz um loop que continuará até que
    nenhuma troca tenha sido feita: */
    while (switching) {
        // Inicia ao dizer: nenhuma troca está feita:
        switching = false;
        rows = table.rows;
        /* Loop pelas fileiras da tabela (exceto a
        primeira, que contém os headers): */
        for (i = 2; i < (rows.length - 1); i++) {
            // Inicia ao dizer que não deveria haver troca:
            shouldSwitch = false;
            /* Pega os dois elementos que se queira comparar,
            um da fileira atual e outro da próxima: */
            x = rows[i].getElementsByTagName("output")[n];
            y = rows[i + 1].getElementsByTagName("output")[n];
            /* Vefirica se as duas fileias deveriam mudar de lugar,
            baseado na direção, asc ou desc: */
            if (dir == "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    // If so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            } else if (dir == "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    // If so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            /* If a switch has been marked, make the switch
            and mark that a switch has been done: */
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            // Each time a switch is done, increase this count by 1:
            switchcount++;
        } else {
            /* If no switching has been done AND the direction is "asc",
            set the direction to "desc" and run the while loop again. */
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }

    }

}

//Essa função é da organização da tabela em asc e des.
function sorTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("tabelanotas");
    switching = true;
    // Configura a ordenação como ascendente;
    dir = "asc";
    /* Faz um loop que continuará até que
    nenhuma troca tenha sido feita: */
    while (switching) {
        // Inicia ao dizer: nenhuma troca está feita:
        switching = false;
        rows = table.rows;
        /* Loop pelas fileiras da tabela (exceto a
        primeira, que contém os headers): */
        for (i = 2; i < (rows.length - 1); i++) {
            // Inicia ao dizer que não deveria haver troca:
            shouldSwitch = false;
            /* Pega os dois elementos que se queira comparar,
            um da fileira atual e outro da próxima: */
            x = rows[i].getElementsByTagName("td")[n];
            y = rows[i + 1].getElementsByTagName("td")[n];
            /* Vefirica se as duas fileias deveriam mudar de lugar,
            baseado na direção, asc ou desc: */
            if (dir == "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    // If so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            } else if (dir == "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    // If so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            /* If a switch has been marked, make the switch
            and mark that a switch has been done: */
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            // Each time a switch is done, increase this count by 1:
            switchcount++;
        } else {
            /* If no switching has been done AND the direction is "asc",
            set the direction to "desc" and run the while loop again. */
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }

    }

}

function sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("tabelanotas");
    switching = true;
    // Configura a ordenação como ascendente;
    dir = "asc";
    /* Faz um loop que continuará até que
    nenhuma troca tenha sido feita: */
    while (switching) {
        // Inicia ao dizer: nenhuma troca está feita:
        switching = false;
        rows = table.rows;
        /* Loop pelas fileiras da tabela (exceto a
        primeira, que contém os headers): */
        for (i = 2; i < (rows.length - 1); i++) {
            // Inicia ao dizer que não deveria haver troca:
            shouldSwitch = false;
            /* Pega os dois elementos que se queira comparar,
            um da fileira atual e outro da próxima: */
            x = rows[i].getElementsByTagName("output")[n];
            y = rows[i + 1].getElementsByTagName("output")[n];
            /* Vefirica se as duas fileias deveriam mudar de lugar,
            baseado na direção, asc ou desc: */
            if (dir == "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    // If so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            } else if (dir == "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    // If so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            /* If a switch has been marked, make the switch
            and mark that a switch has been done: */
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            // Each time a switch is done, increase this count by 1:
            switchcount++;
        } else {
            /* If no switching has been done AND the direction is "asc",
            set the direction to "desc" and run the while loop again. */
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }

    }

}

//Essa função é da organização da tabela em asc e des.
function sortNumber(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("tabelanotas");
    switching = true;
    // Configura a ordenação como ascendente;
    dir = "asc";
    /* Faz um loop que continuará até que
    nenhuma troca tenha sido feita: */
    while (switching) {
        // Inicia ao dizer: nenhuma troca está feita:
        switching = false;
        rows = table.rows;
        /* Loop pelas fileiras da tabela (exceto a
        primeira, que contém os headers): */
        for (i = 1; i < (rows.length - 1); i++) {
            // Inicia ao dizer que não deveria haver troca:
            shouldSwitch = false;
            /* Pega os dois elementos que se queira comparar,
            um da fileira atual e outro da próxima: */
            x = rows[i].getElementsByTagName("td")[n];
            y = rows[i + 1].getElementsByTagName("td")[n];
            /* Vefirica se as duas fileias deveriam mudar de lugar,
            baseado na direção, asc ou desc: */
            if (dir == "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    // If so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            } else if (dir == "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    // If so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            /* If a switch has been marked, make the switch
            and mark that a switch has been done: */
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            // Each time a switch is done, increase this count by 1:
            switchcount++;
        } else {
            /* If no switching has been done AND the direction is "asc",
            set the direction to "desc" and run the while loop again. */
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }

    }

}