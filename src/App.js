import jardin from "./images/Fondo.png";

import sol from "./images/Sol.png";

import nada from "./images/Transparencia casillero.png";

import agente from "./images/Agente.png";

import girasol from "./images/Girasol.png";
import girasolYAgente from "./images/Girasol+agente.png";

import zombieComun from "./images/Zombie común.png";
import zombieBandera from "./images/Zombie bandera.png";
import zombieCono from "./images/Zombie cono.png";
import zombieBalde from "./images/Zombie balde.png";
import zombieYeti from "./images/Zombie yeti.png";
import zombieGigante from "./images/Zombie gigante.png";

import zombieComunYAgente from "./images/Agente+zombie común.png";
import zombieBanderaYAgente from "./images/Agente+zombie bandera.png";
import zombieConoYAgente from "./images/Agente+zombie cono.png";
import zombieBaldeYAgente from "./images/Agente+zombie balde.png";
import zombieYetiYAgente from "./images/Agente+zombie yeti.png";
import zombieGiganteYAgente from "./images/Agente+zombie gigante.png";

import matarAbajo from "./images/Atacar abajo.png";
import matarArriba from "./images/Atacar arriba.png";
import matarIzquierda from "./images/Atacar izquierda.png";
import matarDerecha from "./images/Atacar derecha.png";

import moverAbajo from "./images/Mover abajo.png";
import moverArriba from "./images/Mover arriba.png";
import moverIzquierda from "./images/Mover izquierda.png";
import moverDerecha from "./images/Mover derecha.png";

import plantarGirasol from "./images/Plantar girasol.png";

import ganar from "./images/Ganar.png";
import perder from "./images/Perder.png";

import "./App.css";
import {
  GetCantidadTotalTurnos,
  GetEstado,
  GetJardin,
  Prueba,
} from "./GetEstado";
import { useState } from "react";

const construirTablero = (turno) => {
  let listaDivs = [45];
  let listaCasilleros = GetJardin(turno);
  for (let i = 0; i < 45; i++) {
    listaDivs[i] = (
      <div key={i}>
        <img
          src={getImagen(listaCasilleros[i])}
          className="ContenidoCasillero"
        />
        <div className="Break"></div>
        <img src={sol} className="Sol" />
        <p>{listaCasilleros[i].cantidadDeSoles}</p>
      </div>
    );
  }
  return listaDivs;
};

const getImagen = (casillero) => {
  if (casillero.planta && casillero.girasol) return girasolYAgente;

  if (casillero.planta && casillero.tipoZombie == "ZOMBIE_BASICO")
    return zombieComunYAgente;
  if (casillero.planta && casillero.tipoZombie == "ZOMBIE_CONO")
    return zombieConoYAgente;
  if (casillero.planta && casillero.tipoZombie == "ZOMBIE_GIGANTE")
    return zombieGiganteYAgente;
  if (casillero.planta && casillero.tipoZombie == "ZOMBIE_BALDE")
    return zombieBaldeYAgente;
  if (casillero.planta && casillero.tipoZombie == "ZOMBIE_BANDERA")
    return zombieBanderaYAgente;
  if (casillero.planta && casillero.tipoZombie == "ZOMBIE_YETI")
    return zombieYetiYAgente;

  if (casillero.girasol) return girasol;

  if (casillero.tipoZombie == "ZOMBIE_BASICO") return zombieComun;
  if (casillero.tipoZombie == "ZOMBIE_CONO") return zombieCono;
  if (casillero.tipoZombie == "ZOMBIE_GIGANTE") return zombieGigante;
  if (casillero.tipoZombie == "ZOMBIE_BALDE") return zombieBalde;
  if (casillero.tipoZombie == "ZOMBIE_BANDERA") return zombieBandera;
  if (casillero.tipoZombie == "ZOMBIE_YETI") return zombieYeti;

  if (casillero.planta) return agente;

  return nada;
};

const getImagenAccion = (accion) => {
  if (accion == "MatarZombieAbajo") return matarAbajo;
  if (accion == "MatarZombieArriba") return matarArriba;
  if (accion == "MatarZombieIzquierda") return matarIzquierda;
  if (accion == "MatarZombieDerecha") return matarDerecha;

  if (accion == "MoverAbajo") return moverAbajo;
  if (accion == "MoverArriba") return moverArriba;
  if (accion == "MoverIzquierda") return moverIzquierda;
  if (accion == "MoverDerecha") return moverDerecha;

  if (accion == "PlantarGirasol") return plantarGirasol;

  return nada;
};

const getGano = (gano) => {
  if(gano == null) return nada;
  if (gano) return ganar;
  return perder;
};

function App() {
  const totalTurnos = GetCantidadTotalTurnos();
  const [turno, setTurno] = useState(0);
  var tablero = construirTablero(turno);
  var estado = GetEstado(turno);

  const atras = () => {
    if (turno > 0) setTurno((turnoPrev) => turnoPrev - 1);
  };

  const adelante = () => {
    if (turno < totalTurnos - 1) {
      console.log("Turno: " + turno + " de " + totalTurnos - 1);
      setTurno((turnoPrev) => turnoPrev + 1);
    }
  };
  return (
    <div className="App">
      <img src={jardin} className="Jardin"></img>
      <div className="Tablero">
        {tablero.map((item) => {
          return item;
        })}
      </div>
      <div className="CicloPercepcion">{estado.cicloPercepcion}</div>
      <div className="Accion">
        <img src={getImagenAccion(estado.accion)} className="AccionImg" />
      </div>
      <div className="ResultadoFinal">
        <img src={getGano(estado.gano)} className="GanoImg" />
      </div>
      <div className="EnergiaDelAgente">{estado.energia}</div>
      <div className="ZombiesAGenerar">{estado.zombiesAGenerar}</div>
      <div className="BotonAtrasDiv" onClick={() => atras()}></div>
      <div className="BotonAutomatico"></div>
      <div className="BotonAdelanteDiv" onClick={() => adelante()}></div>
    </div>
  );
}

export default App;
