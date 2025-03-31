import VendingMachine from '../assets/produtos/image.png'; // Importe a imagem
import Doritos from '../assets/produtos/produto_a.png';
import Monster from '../assets/produtos/produto_c.png';// Imagem 2
import Lacta from '../assets/produtos/produto_b.png'
import ImageButton from './ImageButton';
import '../App.css';
import React, { useState } from 'react';

const Vending_Machine: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>(''); // Estado para a categoria selecionada

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category); // Define a categoria selecionada
  };

  const handleButtonClick = (productName: string) => {
    alert(`${productName} clicada!`);
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
      
{/* Botões para selecionar a categoria */}
    <div 
      style={{ marginBottom: '20px',
        textAlign: 'center' }}>
      <button onClick={() => handleCategoryClick('Salgadinhos')} 
      style={{
        width: '25px', // Define uma largura específica
        height: '25px', // Define uma altura igual à largura para um círculo perfeito
        padding: '0', // Remove o padding extra
        margin: '0 10px',
        left:'57.8%',
        position:'absolute',
        backgroundColor: '#FF0000',
        top: '44%',
        color: 'white',
        border: 'none',
        borderRadius: '50%', // Faz o botão redondo
        cursor: 'pointer'
    }}
  >A
      </button>
      <button onClick={() => handleCategoryClick('Bebidas')} 
      style={{
      width: '25px', // Define uma largura específica
      height: '25px', // Define uma altura igual à largura para um círculo perfeito
      padding: '0', // Remove o padding extra
      margin: '0 10px',
      left:'59.8%',
      position:'absolute',
      backgroundColor: '#FFEB3B',
      top: '44%',
      color: 'white',
      border: 'none',
      borderRadius: '50%', // Faz o botão redondo
      cursor: 'pointer'
  }}
>B
</button>

    <button onClick={() => handleCategoryClick('Chocolates')} 
      style={{
        width: '25px', // Define uma largura específica
        height: '25px', // Define uma altura igual à largura para um círculo perfeito
        padding: '0', // Remove o padding extra
        margin: '0 10px',
        left:'61.7%',
        position:'absolute',
        backgroundColor: '#008000',
        top: '44%',
        color: 'white',
        border: 'none',
        borderRadius: '50%', // Faz o botão redondo
        cursor: 'pointer'
    }}
  >
    C
    </button>
</div>

      {/* Exibindo TODOS os produtos */}
      {selectedCategory === '' && (
        <>
          {/* Produtos de Salgadinhos */}
          <ImageButton 
            src={Doritos} 
            alt="Imagem do Doritos"
            style={{
              position: 'absolute',
              width: '5%',
              left: '49%',
              top: '6%', 
              transform: 'translateX(-50%)',
              outline: 'none',
            }}
            className="image-button"
            onClick={() => handleButtonClick('Doritos')}
          />



          {/* Produtos de Bebidas */}
          <ImageButton 
            src={Monster} 
            alt="Imagem do Monster"
            style={{
              position: 'absolute',
              width: '5%',
              left: '49%',
              top: '18%',
              transform: 'translateX(-50%)',
            }}
            className="image-button"
            onClick={() => handleButtonClick('Monster')} 
          />



          {/* Produtos de Chocolates */}
          <ImageButton 
            src={Lacta} 
            alt="Imagem do Lacta"
            style={{
              position: 'absolute',
              width: '5%',
              left: '49%',
              top: '32%',
              transform: 'translateX(-50%)',
            }}
            className="image-button"
            onClick={() => handleButtonClick('Lacta')} 
          />


        </>
      )}

      {/* Exibindo os produtos conforme a categoria selecionada */}
      {selectedCategory === 'Salgadinhos' && (
        <>
          <ImageButton 
            src={Doritos} 
            alt="Imagem do Doritos"
            style={{
              position: 'absolute',
              width: '5%',
              left: '49%',
              top: '6%', 
              transform: 'translateX(-50%)',
              outline: 'none',
            }}
            className="image-button"
            onClick={() => handleButtonClick('Doritos')}
          />


        </>
      )}

      {selectedCategory === 'Bebidas' && (
        <>
          <ImageButton 
            src={Monster} 
            alt="Imagem do Monster"
            style={{
              position: 'absolute',
              width: '5%',
              left: '49%',
              top: '18%',
              transform: 'translateX(-50%)',
            }}
            className="image-button"
            onClick={() => handleButtonClick('Monster')} 
          />


        </>
      )}

      {selectedCategory === 'Chocolates' && (
        <>
          <ImageButton 
            src={Lacta} 
            alt="Imagem do Lacta"
            style={{
              position: 'absolute',
              width: '5%',
              left: '49%',
              top: '32%',
              transform: 'translateX(-50%)',
            }}
            className="image-button"
            onClick={() => handleButtonClick('Lacta')} 
          />


        </>
      )}
    </div>
  );
};

export default Vending_Machine;
