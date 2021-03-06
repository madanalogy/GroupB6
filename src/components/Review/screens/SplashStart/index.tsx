import * as React from 'react';

import styles from './styles.scss';

class SplashStart extends React.Component {
  public componentDidMount() {
    const delay = 2;
    const nodes = document.querySelectorAll('.animate');
    for (let i = 0; i < nodes.length; i++) {
      const words = nodes[i].innerText.split(' ');
      nodes[i].innerHTML = '';
      for (let i2 = 0; i2 < words.length; i2++) {
        const item = document.createElement('span');
        item.innerText = words[i2];
        const calc = delay + (nodes.length + i2) / 3;
        item.style.animationDelay = calc + 's';
        nodes[i].appendChild(item);
      }
    }
  }
  public render() {
    const year = new Date().getUTCFullYear() - 1;
    return (
      <div className={styles.background} id='to_share'>
        <h1 className={styles.animBack}>Shopee</h1>
        <h1 className={styles.animFwd}>Throwback</h1>
        <h1 className={styles.animBack}>{year}</h1>
        <div className={styles.basicfont}>
          <h4>{year}’s been a roller coaster ride.</h4>
          <h4>Here&apos;s a few things that happened.</h4>
        </div>
      </div>
    );
  }
}

export default SplashStart;
