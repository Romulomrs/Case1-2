import styles from './styles.module.css'
import { useState } from "react";
import ElevatorButton from "../ElevatorButton";
import Floor from "../Floor";
import Cabin from "../Cabin";

function Elevador() {
  let esperaBasica = 1000;

  let andar3 = 132;
  let andar2 = 291;
  let andar1 = 451;
  let andar0 = 611;

  function resolveAfter2Seconds(x: number) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(x);
      }, x);
    });
  }

  const [operation, setOperation] = useState(true);
  const [currentFloor, setCurrentFloor] = useState(0);
  const [positionY, setPositionY] = useState(andar0);

  let porta = false;
  const [p, setP] = useState(0); // inicializa a porta fechada


  async function mudarAdar(atual: number) {
    switch (atual) {
      case 0:
        if (atual != currentFloor) {
          setPositionY(andar0);
          await resolveAfter2Seconds(esperaBasica);
          abrirPorta();
        }
        setCurrentFloor(atual)
        setOperation(true)

        break;
      case 1:
        if (atual != currentFloor) {
          setPositionY(andar1);
          await resolveAfter2Seconds(esperaBasica);
          abrirPorta();
        }
        setCurrentFloor(atual)
        setOperation(true)

        break;
      case 2:
        if (atual != currentFloor) {
          setPositionY(andar2);
          await resolveAfter2Seconds(esperaBasica);
          abrirPorta();
        }
        setCurrentFloor(atual)
        setOperation(true)

        break;
      case 3:
        if (atual != currentFloor) {
          setPositionY(andar3);
          await resolveAfter2Seconds(esperaBasica);
          abrirPorta();
        }
        setCurrentFloor(atual)
        setOperation(true)

        break;

      default:
        break;
    }
  }

  // @ts-ignore
  let realy = false

  async function changePosition(selecionado: number) {
    realy = true;
  
    if (porta) {
      if (selecionado > currentFloor) {
        mudarAdar(selecionado);
        realy = false;
      } else if (selecionado < currentFloor) {
        mudarAdar(selecionado);
        realy = false;
      } else {
        // Se já estiver no andar selecionado, abre a porta imediatamente
        abrirPorta();
      }
    }
  }
  

  async function fecharPorta( selecionado : number) {
    if (!porta) {
      setOperation(false)
      setP(0);
      await resolveAfter2Seconds(500);
      porta =true;
      setOperation(true);
      changePosition(selecionado);
    }
  }
  async function fecharPort() {
    if (operation) {
      setOperation(false)
      setP(0);
      await resolveAfter2Seconds(500);
      porta =true;
      setOperation(true);
    }
  }

  async function abrirPorta() {
    setOperation(false);
    setP(100); // abre a porta
    await resolveAfter2Seconds(esperaBasica);
    porta = false;
    setOperation(true);
  
    // Espera 1 segundo e fecha a porta
    setTimeout(() => {
      fecharPort();
    }, 1000);
  }
  

  return (
      <div id={styles.tudo}>
        <div id={styles.space}>
          <div id={styles.predio}>
          <div id={styles.painel}>
            <span>{currentFloor}</span>
            </div>
            
            <Cabin p={p} top={positionY} />
            <div>
              <Floor id="f3" />
              <Floor id="f2" />
              <Floor id="f1" />
              <Floor id="T" />
            </div>
          </div>
          <div id={styles.chao}></div>
        </div>
        <div id={styles.controller}>
          <ElevatorButton value="3" onClick={() =>  fecharPorta(3) } />
          <ElevatorButton value="2" onClick={() =>  fecharPorta(2) } />
          <ElevatorButton value="1" onClick={() =>  fecharPorta(1) } />
          <ElevatorButton value="T" onClick={() =>  fecharPorta(0) } />
          <ElevatorButton value="<|>" onClick={() =>  abrirPorta() } />
          <ElevatorButton value=">|<" onClick={() =>  fecharPort() } />
        </div>
      </div>
  )
}


export default Elevador