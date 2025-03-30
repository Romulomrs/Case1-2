import VendingMachine from './image.png'; // Importe a imagem
import Doritos from './produto_a.png'; // Imagem 1
import Monster from './produto_c.png'; // Imagem 2
import Lacta from './produto_b.png'; // Imagem 3
import ImageButton from './ImageButton';
import fandangos from './fandangos.png';
import Cheetos from './Cheetos.png'
import Coca from './Coca.png'
import Pepsi from './Pepsi.png'
import hersheys from './hersheys.png'
import garoto from './garoto.png'
import '../App.css';
import React from 'react';

const Vending_Machine: React.FC = () => {
  const handleButtonClick = (imageName: string) => {
    alert(`${imageName} clicada!`);
  };

  return (
    <div>
      {/* Exibindo a imagem da máquina de vendas */}
      <img 
        src={VendingMachine} 
        alt="Imagem da Máquina de Vendas" 
        style={{
          position: 'relative',
          left: '10%',
        }} 
      />
      
      <ImageButton 
        src={Doritos} 
        alt="Imagem do Doritos"
        style={{
          position: 'absolute',
          width: '5%',
          left: '54%',
          top: '6%', 
          transform: 'translateX(-50%)',
          outline: 'none',
        }}
        className="image-button"
        onClick={() => handleButtonClick('Doritos')}
      />
      <ImageButton 
        src={fandangos} 
        alt="Imagem do fandangos"
        style={{
          position: 'absolute',
          width: '5%',
          left: '49%',
          top: '6%', 
          transform: 'translateX(-50%)',
        }}
        className="image-button"
        onClick={() => handleButtonClick('fandangos')} 
      />
      <ImageButton 
        src={Cheetos} 
        alt="Imagem do Cheetos"
        style={{
          position: 'absolute',
          width: '5%',
          left: '44%',
          top: '6%', 
          transform: 'translateX(-50%)',
        }}
        className="image-button"
        onClick={() => handleButtonClick('Cheetos')} 
      />

      <ImageButton 
        src={Monster} 
        alt="Imagem do Monster"
        style={{
          position: 'absolute',
          width: '5%',
          left: '54%',
          top: '18%',
          transform: 'translateX(-50%)',
        }}
        className="image-button"
        onClick={() => handleButtonClick('Monster')} 
      />

<ImageButton 
        src={Coca} 
        alt="Imagem do Pepsi"
        style={{
          position: 'absolute',
          width: '6%',
          left: '49%',
          top: '18%',
          transform: 'translateX(-50%)',
        }}
        className="image-button"
        onClick={() => handleButtonClick('Pepsi')} 
      />
      
<ImageButton 
        src={Pepsi} 
        alt="Imagem do Pepsi"
        style={{
          position: 'absolute',
          width: '6%',
          left: '44%',
          top: '20%',
          transform: 'translateX(-50%)',
        }}
        className="image-button"
        onClick={() => handleButtonClick('Pepsi')} 
      />

      <ImageButton 
        src={Lacta} 
        alt="Imagem do Lacta"
        style={{
          position: 'absolute',
          width: '5%',
          left: '54%',
          top: '32%',
          transform: 'translateX(-50%)',
        }}
        className="image-button"
        onClick={() => handleButtonClick('Lacta')} 
      />
      <ImageButton 
        src={hersheys} 
        alt="Imagem do hersheys"
        style={{
          position: 'absolute',
          width: '5%',
          left: '49%',
          top: '32%',
          transform: 'translateX(-50%)',
        }}
        className="image-button"
        onClick={() => handleButtonClick('hersheys')} 
      />
    <ImageButton 
        src={garoto} 
        alt="Imagem do garoto"
        style={{
          position: 'absolute',
          width: '5%',
          left: '44%',
          top: '32%',
          transform: 'translateX(-50%)',
        }}
        className="image-button"
        onClick={() => handleButtonClick('garoto')} 
      />


    </div>

    
  );
};

export default Vending_Machine;
