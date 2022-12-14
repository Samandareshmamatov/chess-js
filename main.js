let desk = document.querySelector(".chess-desk");
let btnRux = document.querySelector("#btn1")
let btnFil = document.querySelector("#btn2")
let btnFarzin = document.querySelector("#btn3")
let btnOt = document.querySelector("#btn4")
let btns = document.querySelectorAll(".btn")
let arr = []

btnRux.addEventListener('click', () => {
    for (let item of btns) item.style.backgroundColor = "#fff"
    btnRux.style.backgroundColor = "#472B1F"
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            arr[i][j].addEventListener('click', () => {
                putColor(arr)
                rux(i, j);
                ruxImg(i, j)
            })
        }
    }
})

btnFil.addEventListener('click', () => {
    for (let item of btns) item.style.backgroundColor = "#fff"
    btnFil.style.backgroundColor = "#472B1F"
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            arr[i][j].addEventListener('click', () => {
                putColor(arr);
                fil(i, j);
                filImg(i, j)
            })
        }
    }
})

btnFarzin.addEventListener('click', () => {
    for (let item of btns) item.style.backgroundColor = "#fff"
    btnFarzin.style.backgroundColor = "#472B1F"
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            arr[i][j].addEventListener('click', () => {
                putColor(arr);
                fil(i, j);
                rux(i, j)
                farzinImg(i, j)
            })
        }
    }
})

btnOt.addEventListener('click', () => {
    for (let item of btns) item.style.backgroundColor = "#fff"
    btnOt.style.backgroundColor = "#472B1F"
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            arr[i][j].addEventListener('click', () => {
                putColor(arr);
                ot(i, j)
                otImg(i, j)
            })
        }
    }
})

function createDesk() {
    for (let i = 0; i < 8; i++) {
        let newArr = []
        for (let j = 0; j < 8; j++) {
            newArr[j] = document.createElement("div");
            desk.append(newArr[j]);
            newArr[j].classList.add("check-box")
        }
        arr[i] = newArr;
    }
    putColor(arr)
}
createDesk()

function putColor(arr) {
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (i % 2 == 0) j % 2 == 0 ? arr[i][j].style.backgroundColor = "#F2DEB9" : arr[i][j].style.backgroundColor = "#472B1F"
            else j % 2 == 1 ? arr[i][j].style.backgroundColor = "#F2DEB9" : arr[i][j].style.backgroundColor = "#472B1F"
            arr[i][j].classList.remove("otImg")
            arr[i][j].classList.remove("filImg")
            arr[i][j].classList.remove("farzinImg")
            arr[i][j].classList.remove("ruxImg")
        }
    }
}

function rux(i, j) {
    for (let r = 0; r < arr[i].length; r++) {
        arr[i][r].style.backgroundColor = '#00d5e1';
        arr[r][j].style.backgroundColor = '#00d5e1';
    }
}

function fil(i, j) {
    for (let f = 8; f >= 0; f--) {
        if (arr[i - f] && arr[i - f][j + f]) arr[i - f][j + f].style.backgroundColor = '#00d5e1';
        if (arr[i + f] && arr[i + f][j - f]) arr[i + f][j - f].style.backgroundColor = '#00d5e1';
    }
    for (let f = 1; f < 8; f++) {
        if (arr[i - f] && arr[i - f][j - f]) arr[i - f][j - f].style.backgroundColor = '#00d5e1';
        if (arr[i + f] && arr[i + f][j + f]) arr[i + f][j + f].style.backgroundColor = '#00d5e1';
    }
}

function ot(i, j) {
    arr[i][j].style.backgroundColor = '#00d5e1';
    if (arr[i - 2] && arr[i - 2][j - 1]) arr[i - 2][j - 1].style.backgroundColor = '#00d5e1';
    if (arr[i - 2] && arr[i - 2][j + 1]) arr[i - 2][j + 1].style.backgroundColor = '#00d5e1';
    if (arr[i - 1] && arr[i - 1][j - 2]) arr[i - 1][j - 2].style.backgroundColor = '#00d5e1';
    if (arr[i - 1] && arr[i - 1][j + 2]) arr[i - 1][j + 2].style.backgroundColor = '#00d5e1';
    if (arr[i + 1] && arr[i + 1][j + 2]) arr[i + 1][j + 2].style.backgroundColor = '#00d5e1';
    if (arr[i + 1] && arr[i + 1][j - 2]) arr[i + 1][j - 2].style.backgroundColor = '#00d5e1';
    if (arr[i + 2] && arr[i + 2][j + 1]) arr[i + 2][j + 1].style.backgroundColor = '#00d5e1';
    if (arr[i + 2] && arr[i + 2][j - 1]) arr[i + 2][j - 1].style.backgroundColor = '#00d5e1';
}

const otImg = (i, j) => arr[i][j].classList.add("otImg")
const farzinImg = (i, j) => arr[i][j].classList.add("farzinImg")
const filImg = (i, j) => arr[i][j].classList.add("filImg")
const ruxImg = (i, j) => arr[i][j].classList.add("ruxImg")