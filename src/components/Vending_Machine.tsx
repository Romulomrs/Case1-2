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
            alt="Imagem do Fandangos"
            style={{
              position: 'absolute',
              width: '5%',
              left: '49%',
              top: '6%', 
              transform: 'translateX(-50%)',
            }}
            className="image-button"
            onClick={() => handleButtonClick('Fandangos')} 
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

          {/* Produtos de Bebidas */}
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
            alt="Imagem do Coca"
            style={{
              position: 'absolute',
              width: '6%',
              left: '49%',
              top: '18%',
              transform: 'translateX(-50%)',
            }}
            className="image-button"
            onClick={() => handleButtonClick('Coca')} 
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

          {/* Produtos de Chocolates */}
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
            alt="Imagem do Hersheys"
            style={{
              position: 'absolute',
              width: '5%',
              left: '49%',
              top: '32%',
              transform: 'translateX(-50%)',
            }}
            className="image-button"
            onClick={() => handleButtonClick('Hersheys')} 
          />
          <ImageButton 
            src={garoto} 
            alt="Imagem do Garoto"
            style={{
              position: 'absolute',
              width: '5%',
              left: '44%',
              top: '32%',
              transform: 'translateX(-50%)',
            }}
            className="image-button"
            onClick={() => handleButtonClick('Garoto')} 
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
            alt="Imagem do Fandangos"
            style={{
              position: 'absolute',
              width: '5%',
              left: '49%',
              top: '6%', 
              transform: 'translateX(-50%)',
            }}
            className="image-button"
            onClick={() => handleButtonClick('Fandangos')} 
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
              left: '54%',
              top: '18%',
              transform: 'translateX(-50%)',
            }}
            className="image-button"
            onClick={() => handleButtonClick('Monster')} 
          />
          <ImageButton 
            src={Coca} 
            alt="Imagem do Coca"
            style={{
              position: 'absolute',
              width: '6%',
              left: '49%',
              top: '18%',
              transform: 'translateX(-50%)',
            }}
            className="image-button"
            onClick={() => handleButtonClick('Coca')} 
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
              left: '54%',
              top: '32%',
              transform: 'translateX(-50%)',
            }}
            className="image-button"
            onClick={() => handleButtonClick('Lacta')} 
          />
          <ImageButton 
            src={hersheys} 
            alt="Imagem do Hersheys"
            style={{
              position: 'absolute',
              width: '5%',
              left: '49%',
              top: '32%',
              transform: 'translateX(-50%)',
            }}
            className="image-button"
            onClick={() => handleButtonClick('Hersheys')} 
          />
          <ImageButton 
            src={garoto} 
            alt="Imagem do Garoto"
            style={{
              position: 'absolute',
              width: '5%',
              left: '44%',
              top: '32%',
              transform: 'translateX(-50%)',
            }}
            className="image-button"
            onClick={() => handleButtonClick('Garoto')} 
          />
        </>
      )}
    </div>
  );
};

export default Vending_Machine;
