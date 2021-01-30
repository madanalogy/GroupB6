import * as React from 'react';

import styles from './styles.scss';

class SplashEnd extends React.Component {
  public render() {
    // https://codepen.io/iamhexcoder/pen/Cpdam
    return (
      <>
        <div id='to_share'>
          <div className={styles.box}>
            <div className={styles.a}></div>
            <div className={styles.b}></div>
            <div className={styles.c}></div>
            <div className={styles.d}></div>
            <div className={styles.e}></div>
            <div className={styles.f}></div>
            <div className={styles.g}></div>
            <div className={styles.h}></div>
            <div className={styles.i}></div>
            <div className={styles.j}></div>
            <div className={styles.s}></div>
          </div>
          <div className={styles.myOverlay}>
            <h4 className={styles.basicfont}>
              We hope you enjoyed your blast to the past.
            </h4>
            <h4 className={styles.basicfont}>
              Thank you for shopping with us, and we hope to see you soon!
            </h4>
          </div>
        </div>
      </>
    );
  }
}

export default SplashEnd;
