import React from 'react';
import Vending_Machine_Logo from './image.png'; // Importe a imagem
const  Vending_Machine: React.FC = () => {

    return (
      <div>
        <h1>Vending Machine</h1>
        <img src={Vending_Machine_Logo} alt="Vending Machine" />
      </div>
    );
  };
export default Vending_Machine;