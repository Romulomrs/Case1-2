import Header from "../common/Header";
import styles from "./styles.module.css";

const Elevator: React.FC = () => {
  return (
    <div id={styles.elevator}>
      <Header />
      <section>
      <div id="elevador" className={"elevador"}>
        <div className="door left"></div>
        <div className="door right"></div>
      </div>
    <div id="quadrado"></div>

    <div id="andar0" className="andar">Térreo</div>
    <div id="andar1" className="andar">1°Andar</div>
    <div id="andar2" className="andar">2°Andar</div>
    <div id="andar3" className="andar">3°Andar</div>

    <div>

        <button id="btnIrTerreo" className="btn" onClick="chamarElevador(0)">T</button>
        <button id="btnIrAndar1" className="btn" onClick="chamarElevador(1)">1°</button>
        <button id="btnIrAndar2" className="btn" onClick="chamarElevador(2)">2°</button>
        <button id="btnIrAndar3" className="btn" onClick="chamarElevador(3)">3°</button>
        

        
        <button id="btnAbrirPortas" class="btn" onClick="abrirPortas()">ABRIR</button>
        <button id="btnFecharPortas" class="btn" onClick="fecharPortas()">FECHAR</button>
        

<button class="btn-chamada" onclick="chamarElevador(0)" style="position:absolute; left:53%; bottom: 20px; width: 15px;height: 15px;"></button>

<button class="btn-chamada" onclick="chamarElevador(1)" style="position:absolute; left:53%; bottom: 120px; width: 15px;height: 15px;"></button>

<button class="btn-chamada" onclick="chamarElevador(2)" style="position:absolute; left:53%; bottom: 220px; width: 15px;height: 15px;"></button>

<button class="btn-chamada" onclick="chamarElevador(3)" style="position:absolute; left:53%; bottom: 320px; width: 15px;height: 15px;"></button>

    </div>
    <div id="leitorAndar" style="position: absolute; top: 40%; left: 88%; transform: translateX(-50%); font-size: 24px; font-weight: bold;">
Térreo
    </div>
      </section>
    </div>
  );
};

export default Elevator;
