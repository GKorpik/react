import React from 'react';
import styles from './Hero.scss';
import space from "../image";

const Hero = () => {
  return(
    <header className ={styles.component}>
      <h2 className = {styles.title}>Things to do</h2>
      <img className= {styles.image} src={space} alt="space" />
    </header>
  );
};


export default Hero;