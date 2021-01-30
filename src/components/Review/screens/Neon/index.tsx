import * as React from 'react';

import styles from './styles.scss';

class Neon extends React.Component {
  public render() {
    return (
      <div className={styles.background}>
        <div className={styles.container}>
          <div className={styles.border}></div>
          <div className={styles.blocker1}></div>
          <div className={styles.blocker2}></div>
          <h2 className={styles.neon2}>You May</h2>
          <h1 className={styles.neon1}>LIKE</h1>
          <h2 className={styles.neon2}>These</h2>
        </div>
      </div>
    );
  }
}

export default Neon;
