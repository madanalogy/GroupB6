import * as React from 'react';

import Bridge from 'libraries/bridges';
import Button from '../../components/Button';
import Mattwork from '../Mattwork';
import styles from './styles.scss';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalSlides: 5,
      currSlideIdx:0
    };
  }

  componentDidMount() {
  }

  render() {
    const { totalSlides, currSlideIdx } = this.state;
    return (
      <>
      <div>
        <Mattwork/>
        <li className={styles.navDots}>
          <label className={`${styles.navDot} ${(currSlideIdx == 0 ? ' ' + styles.selected : "")}`}></label>
          <label className={`${styles.navDot} ${(currSlideIdx == 1 ? ' ' + styles.selected : "")}`}></label>
          <label className={`${styles.navDot} ${(currSlideIdx == 2 ? ' ' + styles.selected : "")}`}></label>
          <label className={`${styles.navDot} ${(currSlideIdx == 3 ? ' ' + styles.selected : "")}`}></label>
          <label className={`${styles.navDot} ${(currSlideIdx == 4 ? ' ' + styles.selected : "")}`}></label>
        </li>
        <div className={`${styles.oneButtonContainer} ${(currSlideIdx != 0 ? " " + styles.hidden : "")}`}><Button>Let's go!</Button></div>
        <div className={`${styles.twoButtonContainer} ${((currSlideIdx == 0 || currSlideIdx == totalSlides-1)? " " + styles.hidden : "")}`}>
          <div className={styles.row}>
            <span className={styles.margin5px}><Button>Previous</Button></span>
            <span className={styles.margin5px}><Button>Next</Button></span>
          </div>
        </div>
        <div className={`${styles.oneButtonContainer} ${(currSlideIdx != totalSlides-1 ? " " + styles.hidden : "")}`}><Button>Previous</Button></div>
      </div>
      </>
    );
  }
}

export default Carousel;
