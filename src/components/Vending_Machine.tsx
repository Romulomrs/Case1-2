import VendingMachine from './image.png'; // Importe a imagem
import Doritos from './produto_a.png'; // Imagem 1
import Monster from './produto_c.png'; // Imagem 2
import Chocolate from './produto_b.png'; // Imagem 3
import ImageButton from './ImageButton';
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
          position: 'relative', // Defina a posição
          left: '10%', // Posicione a imagem
        }} 
      />
      
      <ImageButton 
        src={Doritos} 
        alt="Imagem do Doritos"
        style={{
          position: 'absolute', // Defina a posição
          width:'5%', // Posicione a imagem
          left:'50%',
          top:'5%'
        }} // Comentário removido
        onClick={() => handleButtonClick('Doritos')}
      />

      <ImageButton 
        src={Monster} 
        alt="Imagem do Monster"
        style={{
          position: 'absolute', // Defina a posição
          width:'5%', // Posicione a imagem
          left:'50%',
          top:'17%'
        }} // Comentário removido
        onClick={() => handleButtonClick('Monster')} 
      />
      <ImageButton 
        src={Chocolate} 
        alt="Imagem do Chocolate"
        style={{
          position: 'absolute', // Defina a posição
          width:'5%', // Posicione a imagem
          left:'50%',
          top:'30%'
        }} // Comentário removido
        onClick={() => handleButtonClick('Chocolate')} 

      />
    </div>
  );
};

export default Vending_Machine;


