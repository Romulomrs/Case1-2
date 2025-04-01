import React from "react";

interface ImageButtonProps {
  src: string;
  alt: string;
  onClick: () => void;
  className?: string;
  style?: React.CSSProperties;
}

const ImageButton: React.FC<ImageButtonProps> = ({
  src,
  alt,
  onClick,
  className,
  style,
}) => {
  return (
    <img
      src={src}
      alt={alt}
      onClick={onClick}
      className={className}
      style={style}
      tabIndex={0} // Permite receber foco ao pressionar TAB
    />
  );
};

export default ImageButton;
