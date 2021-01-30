import * as React from 'react';

import styles from './styles.scss';

class Coin extends React.Component {
  public render() {
    return (
<div className={styles.coin}>
  <div className={styles.coin__front}></div>
  <div className={styles.coin__edge}>
    <div className={styles.coin__edge_image}></div><div className={styles.coin__edge_image}></div><div className={styles.coin__edge_image}></div><div className={styles.coin__edge_image}></div><div className={styles.coin__edge_image}></div><div className={styles.coin__edge_image}></div><div></div><div></div><div></div><div></div>
    <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
    <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
    <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
     <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
    <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
    <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
    <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>

  </div>
  <div className={styles.coin__back}></div>
  <div className={styles.coin__shadow}></div>
</div>
    );
  }
}

export default Coin;
