import React from 'react'
import {ReactComponent as Imagem} from '../../Assets/LogoInter.svg'
import styles from '../Footer/Footer.module.css'

export default function Footer() {
  return (
    <div className={styles.footer} data-testid="footer">   
    <h5>Front-End Challenge</h5>
    <Imagem/>
    </div>
  );
}


