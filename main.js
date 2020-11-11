/* Hamburger menü működése */
const menuButton = document.getElementById("menuButton");
menuButton.addEventListener("click", openMenu);
const navigation = document.getElementById("navigation");
document.querySelector("body").addEventListener("click", closeMenu);

function openMenu() {
    navigation.style.display = "flex";
}

function closeMenu(e) {
    if (navigation.style.display == "flex") {
        if (e.target.className !== "fas fa-bars" && e.target.className !== "menuList") {
            navigation.style.display = "none";
        }
    }
}
/* Hamburger menü működése vége */

/* Image slider működése --> JQuery kód */
let carousel = $(".carousel").waterwheelCarousel({
    flankingItems: 3
});
$("#prev").click(function () {
    carousel.prev();
    return false;
});
$("#next").click(function () {
    carousel.next();
    return false;
});

/* Image slider select image --> Javascript kód */
let selectedImg = "item1";
document.body.addEventListener("click", function (e) {
    if (e.target.className == "item1") {
        selectedImg = "item1";
        console.log(selectedImg);
    } if (e.target.className == "item2") {
        selectedImg = "item2";
        console.log(selectedImg);
    } if (e.target.className == "item3") {
        selectedImg = "item3";
        console.log(selectedImg);
    } if (e.target.className == "item4") {
        selectedImg = "item4";
        console.log(selectedImg);
    } if (e.target.className == "item5") {
        selectedImg = "item5";
        console.log(selectedImg);
    } if (e.target.className == "item6") {
        selectedImg = "item6";
        console.log(selectedImg);
    }
});
function chooseImg() {
    document.getElementById("carousel").style.display = "none";
    document.getElementById("btn-group").style.display = "block";
    document.getElementById("table").style.display = "table";

    alap();
}

/* Tili toli műkédési mechanikája */

// Gombok bekérése és click esemény hozzáadása
const keveroGomb = document.getElementById("kever");
keveroGomb.addEventListener("click", kever);

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
            if (selectedImg == "item1") {
                tds[k].classList.add(`cell${k}`);
            }
            if (selectedImg == "item2") {
                tds[k].classList.add(`cell${k + 16}`);
            }
            if (selectedImg == "item3") {
                tds[k].classList.add(`cell${k + 32}`);
            }
            if (selectedImg == "item4") {
                tds[k].classList.add(`cell${k + 48}`);
            }
            if (selectedImg == "item5") {
                tds[k].classList.add(`cell${k + 66}`);
            }
            if (selectedImg == "item6") {
                tds[k].classList.add(`cell${k + 82}`);
            }
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
    if (selectedImg == "item1") {
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
    if (selectedImg == "item2") {
        let cell = document.getElementById(`${row}${column}`);
        let cell_class = cell.className;


        if (cell_class !== "cell31") {
            // ellenőrzi hogy az üres cella jobb oldalt van-e
            if (column < 3) {
                if (document.getElementById(`${row}${column + 1}`).className === "cell31") {
                    csere(`${row}${column}`, `${row}${column + 1}`);
                }
            }
            // ellenőrzi hogy az üres cella bal oldalt van-e
            if (column > 0) {
                if (document.getElementById(`${row}${column - 1}`).className === "cell31") {
                    csere(`${row}${column}`, `${row}${column - 1}`);
                }
            }
            // ellenőrzi hogy az üres cella lent van-e
            if (row < 3) {
                if (document.getElementById(`${row + 1}${column}`).className === "cell31") {
                    csere(`${row}${column}`, `${row + 1}${column}`);
                }
            }
            // ellenőrzi hogy az üres cella fennt van-e
            if (row > 0) {
                if (document.getElementById(`${row - 1}${column}`).className === "cell31") {
                    csere(`${row}${column}`, `${row - 1}${column}`);
                }
            }
        }
    }
    if (selectedImg == "item3") {
        let cell = document.getElementById(`${row}${column}`);
        let cell_class = cell.className;


        if (cell_class !== "cell47") {
            // ellenőrzi hogy az üres cella jobb oldalt van-e
            if (column < 3) {
                if (document.getElementById(`${row}${column + 1}`).className === "cell47") {
                    csere(`${row}${column}`, `${row}${column + 1}`);
                }
            }
            // ellenőrzi hogy az üres cella bal oldalt van-e
            if (column > 0) {
                if (document.getElementById(`${row}${column - 1}`).className === "cell47") {
                    csere(`${row}${column}`, `${row}${column - 1}`);
                }
            }
            // ellenőrzi hogy az üres cella lent van-e
            if (row < 3) {
                if (document.getElementById(`${row + 1}${column}`).className === "cell47") {
                    csere(`${row}${column}`, `${row + 1}${column}`);
                }
            }
            // ellenőrzi hogy az üres cella fennt van-e
            if (row > 0) {
                if (document.getElementById(`${row - 1}${column}`).className === "cell47") {
                    csere(`${row}${column}`, `${row - 1}${column}`);
                }
            }
        }
    }
    if (selectedImg == "item4") {
        let cell = document.getElementById(`${row}${column}`);
        let cell_class = cell.className;


        if (cell_class !== "cell63") {
            // ellenőrzi hogy az üres cella jobb oldalt van-e
            if (column < 3) {
                if (document.getElementById(`${row}${column + 1}`).className === "cell63") {
                    csere(`${row}${column}`, `${row}${column + 1}`);
                }
            }
            // ellenőrzi hogy az üres cella bal oldalt van-e
            if (column > 0) {
                if (document.getElementById(`${row}${column - 1}`).className === "cell63") {
                    csere(`${row}${column}`, `${row}${column - 1}`);
                }
            }
            // ellenőrzi hogy az üres cella lent van-e
            if (row < 3) {
                if (document.getElementById(`${row + 1}${column}`).className === "cell63") {
                    csere(`${row}${column}`, `${row + 1}${column}`);
                }
            }
            // ellenőrzi hogy az üres cella fennt van-e
            if (row > 0) {
                if (document.getElementById(`${row - 1}${column}`).className === "cell63") {
                    csere(`${row}${column}`, `${row - 1}${column}`);
                }
            }
        }
    }
    if (selectedImg == "item5") {
        let cell = document.getElementById(`${row}${column}`);
        let cell_class = cell.className;


        if (cell_class !== "cell81") {
            // ellenőrzi hogy az üres cella jobb oldalt van-e
            if (column < 3) {
                if (document.getElementById(`${row}${column + 1}`).className === "cell81") {
                    csere(`${row}${column}`, `${row}${column + 1}`);
                }
            }
            // ellenőrzi hogy az üres cella bal oldalt van-e
            if (column > 0) {
                if (document.getElementById(`${row}${column - 1}`).className === "cell81") {
                    csere(`${row}${column}`, `${row}${column - 1}`);
                }
            }
            // ellenőrzi hogy az üres cella lent van-e
            if (row < 3) {
                if (document.getElementById(`${row + 1}${column}`).className === "cell81") {
                    csere(`${row}${column}`, `${row + 1}${column}`);
                }
            }
            // ellenőrzi hogy az üres cella fennt van-e
            if (row > 0) {
                if (document.getElementById(`${row - 1}${column}`).className === "cell81") {
                    csere(`${row}${column}`, `${row - 1}${column}`);
                }
            }
        }
    }
    if (selectedImg == "item6") {
        let cell = document.getElementById(`${row}${column}`);
        let cell_class = cell.className;


        if (cell_class !== "cell97") {
            // ellenőrzi hogy az üres cella jobb oldalt van-e
            if (column < 3) {
                if (document.getElementById(`${row}${column + 1}`).className === "cell97") {
                    csere(`${row}${column}`, `${row}${column + 1}`);
                }
            }
            // ellenőrzi hogy az üres cella bal oldalt van-e
            if (column > 0) {
                if (document.getElementById(`${row}${column - 1}`).className === "cell97") {
                    csere(`${row}${column}`, `${row}${column - 1}`);
                }
            }
            // ellenőrzi hogy az üres cella lent van-e
            if (row < 3) {
                if (document.getElementById(`${row + 1}${column}`).className === "cell97") {
                    csere(`${row}${column}`, `${row + 1}${column}`);
                }
            }
            // ellenőrzi hogy az üres cella fennt van-e
            if (row > 0) {
                if (document.getElementById(`${row - 1}${column}`).className === "cell97") {
                    csere(`${row}${column}`, `${row - 1}${column}`);
                }
            }
        }
    }
}

/* Tili toli működési mechanikája vége */