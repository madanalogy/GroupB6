import * as React from 'react';

import styles from './styles.scss';

interface ICoinProps {
  purchases: object;
}

class Coin extends React.Component<ICoinProps> {
  public render() {
    let savings = 0;

    for (let i = 0; i < Object.keys(this.props.purchases).length; i += 1) {
      savings += this.props.purchases[i].savings;
    }

    savings = Math.round(savings * 100) / 100;

    return (
      <>
        <div id='to_share'>
          <div className={styles.container}>
            <div className={styles.coin}>
              <div className={styles.coin__front}></div>
              <div className={styles.coin__edge}>
                <div className={styles.coin__edge_image}></div>
                <div className={styles.coin__edge_image}></div>
                <div className={styles.coin__edge_image}></div>
                <div className={styles.coin__edge_image}></div>
                <div className={styles.coin__edge_image}></div>
                <div className={styles.coin__edge_image}></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div className={styles.coin__back}></div>
              <div className={styles.coin__shadow}></div>
            </div>
          </div>
          <h5 className={styles.basicfont}>
            You saved <span className={styles.highlight}>${savings}</span> from
            sales &amp; vouchers last year. Woohoo!
          </h5>
        </div>
      </>
    );
  }
}

export default Coin;
