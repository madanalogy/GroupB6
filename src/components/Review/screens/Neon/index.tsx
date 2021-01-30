import * as React from 'react';

import styles from './styles.scss';

import ProductRecs from 'assets/common/images/product_recs.jpg';
class Neon extends React.Component {
  public render() {
    return (
      <div className={styles.background} id="to_share">
        <div className={styles.container}>
          <div className={styles.border}></div>
          <div className={styles.blocker1}></div>
          <div className={styles.blocker2}></div>
          <h2 className={styles.neon2}>You May</h2>
          <h1 className={styles.neon1}>LIKE</h1>
          { /*<h2 className={styles.neon2}>These</h2> */ }
          { /* <!--No time, so let's flesh this mockup quick--> */}
          <img className={styles.padTop} src={ProductRecs}/>
          <h4 className={styles.basicfont + ' ' + styles.padTop}>based on your year's purchases</h4>
        </div>
      </div>
    );
  }
}

export default Neon;
