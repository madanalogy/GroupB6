import * as React from 'react';

import styles from './styles.scss';

class Coin extends React.Component {
  public render() {
    const formatted_savings = "$312.40";
    return (
    <>
    <div className={styles.container}>
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
    </div>
      <h5 className={styles.basicfont}>You saved <span className={styles.highlight}>{formatted_savings}</span> from sales &amp; vouchers last year. Woohoo!</h5>
    </>
    );
  }
}

export default Coin;
