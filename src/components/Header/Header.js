import React from 'react'
import {ReactComponent as Logo} from '../../Assets/PokemonLogo.svg'
import styles from '../Header/Header.module.css'

export default function Header() {
  return (
    <div className={styles.logo} data-testid="header">
    <Logo/>
    </div>
  );
}


