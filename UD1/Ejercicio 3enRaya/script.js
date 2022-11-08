"use strict";
let regex = /\([1-3],[1-3]\)/;

const tablero = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

let win = [
  ["0,0", "0,1", "0,2"], //Fila 0
  ["1,0", "1,1", "1,2"], //Fila 1 -
  ["2,0", "2,1", "2,2"], //Fila 2 _
  ["0,0", "1,1", "2,2"], //Diagonal 0 \
  ["0,2", "1,1", "2,0"], //Diagonal 1 /
  ["0,0", "1,0", "2,0"], //Vertical 0 |--
  ["0,1", "1,1", "2,1"], //Vertical 1 -|-
  ["0,2", "1,2", "2,2"], //Vertical 2 --|
];

const tresEnRaya = () => {
  let haGanado = false;
  let turno = 0;

  do {
    haGanado = jugar(turno % 2 === 0 ? "X" : "O");

    turno++;
  } while (haGanado !== false);

  let jugador = turno % 2 === 0 ? "X" : "O";
  console.table(tablero);
  if (haGanado) {
    return "Ha ganado jugador " + jugador;
  } else {
    return "Empate";
  }
};

const jugar = (turno) => {
  let jugada;
  do {
    jugada = prompt("Turno jugador " + turno + " , elige casilla (X,Y): ");

    if (jugada.match(regex)) {
      let row = jugada.at(1);
      let col = jugada.at(3);

      if (tablero[row - 1][col - 1] === "") {
        tablero[row - 1][col - 1] = turno;
        console.table(tablero);
        if (checkWin(turno)) {
          return true;
        }
      } else {
        console.log("Posición ocupada");
      }
    } else {
      console.log("Coordenadas invalidas");
    }
  } while (!jugada.match(regex));
};

const checkWin = (turno) => {
  let haGanado = false;
  win.map((combinacion) => {
    combinacion.map((coord) => {
      let row = coord.at(0);
      let col = coord.at(2);

      if (tablero[row][col] === turno) {
        haGanado = true;
      } else {
        haGanado = false;
      }
    });
    if (haGanado) {
      return true;
    }
  });
};

document.getElementById("resultado").innerHTML = tresEnRaya();
