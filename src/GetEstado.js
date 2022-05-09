import resultado from "./execute/resultado.json";

export const GetCantidadTotalTurnos = () => {
  return resultado.ejecucion.length;
};

export const GetJardin = (turno) => {
  let esteTurno = resultado.ejecucion.at(turno);
  let listaCasilleros = [45];
  for (let i = 0; i < 45; i++) {
    listaCasilleros[i] = {
      planta: esteTurno.jardin.at(i).planta,
      girasol: esteTurno.jardin.at(i).girasol,
      zombie: esteTurno.jardin.at(i).zombie,
      tipoZombie: esteTurno.jardin.at(i).tipoZombie,
      cantidadDeSoles: esteTurno.jardin.at(i).cantidadDeSoles,
    };
  }
  return listaCasilleros;
};

export const GetEstado = (turno) => {
  let esteTurno = resultado.ejecucion.at(turno);
  let estado = {
    cicloPercepcion: esteTurno.turno,
    gano: esteTurno.gano,
    accion: esteTurno.accion,
    energia: esteTurno.energiaAgente,
    zombiesAGenerar: esteTurno.zombiesPorGenerar,
  };
  return estado;
};

export const Prueba = (turno) => {
  let esteTurno = resultado.ejecucion.at(turno);
  let estado = {
    cicloPercepcion: esteTurno.turno,
    gano: esteTurno.gano,
    accion: esteTurno.accion,
    energia: esteTurno.energiaAgente,
    zombiesAGenerar: esteTurno.zombiesPorGenerar,
  };
  return estado;
};



