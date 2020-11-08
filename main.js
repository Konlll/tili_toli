// Gombok bekérése és click esemény hozzáadása
const keveroGomb = document.getElementById("kever");
keveroGomb.addEventListener("click", kever);

alap();

// Táblázaton belüli sorok és oszlopok és képek létrehozása
function alap() {

    let table = document.getElementById("table");
    for (i = 0; i < 4; i++) {
        let tr = document.createElement("tr");
        for (j = 0; j < 4; j++) {
            let td = document.createElement("td");
            tr.appendChild(td);
            td.setAttribute("id", `${i}${j}`);

            td.setAttribute("onclick", `switch_cell(${i}, ${j})`);
        }
        table.appendChild(tr);
        tr.setAttribute("id", i);
    }


    let trs = document.getElementsByTagName("tr");
    let tds = document.getElementsByTagName("td");

    for (let j = 0; j < trs.length; j++) {
        for (let k = 0; k < tds.length; k++) {
            tds[k].classList.add(`cell${k}`);
        }
    }
}

function csere(td1, td2) {
    try {
        let currentTd = document.getElementById(td1).className;
        document.getElementById(td1).className = document.getElementById(td2).className;
        document.getElementById(td2).className = currentTd;
    }
    catch (err) { }
}

function kever() {
    let trs = document.getElementsByTagName("tr");
    let tds = document.getElementsByTagName("td");
    for (let tr = 0; tr < trs.length; tr++) {
        for (let td = 0; td < tds.length; td++) {

            let td2 = Math.floor(Math.random() * 4);
            let tr2 = Math.floor(Math.random() * 4);

            csere(`${tr}${td}`, `${tr2}${td2}`);
        }
    }
}

function switch_cell(row, column) {
    let cell = document.getElementById(`${row}${column}`);
    let cell_class = cell.className;


    if (cell_class !== "cell15") {
        // ellenőrzi hogy az üres cella jobb oldalt van-e
        if (column < 3) {
            if (document.getElementById(`${row}${column + 1}`).className === "cell15") {
                csere(`${row}${column}`, `${row}${column + 1}`);
            }
        }
        // ellenőrzi hogy az üres cella bal oldalt van-e
        if (column > 0) {
            if (document.getElementById(`${row}${column - 1}`).className === "cell15") {
                csere(`${row}${column}`, `${row}${column - 1}`);
            }
        }
        // ellenőrzi hogy az üres cella lent van-e
        if (row < 3) {
            if (document.getElementById(`${row + 1}${column}`).className === "cell15") {
                csere(`${row}${column}`, `${row + 1}${column}`);
            }
        }
        // ellenőrzi hogy az üres cella fennt van-e
        if (row > 0) {
            if (document.getElementById(`${row - 1}${column}`).className === "cell15") {
                csere(`${row}${column}`, `${row - 1}${column}`);
            }
        }
    }
}