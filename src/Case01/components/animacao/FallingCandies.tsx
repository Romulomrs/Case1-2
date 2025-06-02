import React from "react";
import styles from "./FallingCandies.module.css";

const candyImages = [
  "/assets/animacao/chocolate.webp",
  "/assets/animacao/salgadinho.webp",
  "/assets/animacao/doce.webp",]

const getRandom = (min: number, max: number) =>
  Math.random() * (max - min) + min;

const FallingCandies: React.FC = () => {
  const candies = Array.from({ length: 20 }).map((_, i) => {
    const style = {
      left: `${getRandom(0, 100)}vw`,
      animationDuration: `${getRandom(5, 12)}s`,
      animationDelay: `${getRandom(0, 8)}s`,
      width: `${getRandom(30, 50)}px`,
      height: `${getRandom(30, 50)}px`,
    };
    return (
      <img
        key={i}
        src={candyImages[i % candyImages.length]}
        alt="doce"
        className={styles.fallingCandy}
        style={style}
      />
    );
  });

  return <>{candies}</>;
};

export default FallingCandies;
