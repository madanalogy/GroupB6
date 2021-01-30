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
          <h2 className={styles.neon2}>Drink More</h2>
          <h1 className={styles.neon1}>LOCAL</h1>
          <h2 className={styles.neon2}>Beer</h2>
        </div>
      </div>
    );
  }
}

export default Neon;
