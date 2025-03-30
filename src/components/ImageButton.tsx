import React from 'react';

interface ImageButtonProps {
  src: string;
  alt: string;
  onClick?: () => void;
  style?: React.CSSProperties; // Permite passar estilos inline
}

const ImageButton: React.FC<ImageButtonProps> = ({ src, alt, onClick, style }) => {
  return (
    <img 
      src={src} 
      alt={alt} 
      onClick={onClick} 
      style={{ cursor: 'pointer', ...style }} // Garante que o botão tenha um cursor de clique
    />
  );
};

export default ImageButton;
