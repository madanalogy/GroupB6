import * as React from 'react';

import Bridge from 'libraries/bridges';
import Button from '../../components/Button';
import Mattwork from '../Mattwork';
import LabelUser from '../LabelUser'
import styles from './styles.scss';

interface ICarouselProps {
  user_id: number;
  user_name: string;
}

interface ICarouselState {
  totalSlides: number;
  currSlideIdx: number;
}

class Carousel extends React.Component<ICarouselProps, ICarouselState> {
  constructor(props) {
    super(props);
    this.state = {
      totalSlides: 5,
      currSlideIdx: 0
    };
  }

  // https://stackoverflow.com/questions/39210971/this-setstate-is-undefined
  prev = () => {
    this.setState((state: ICarouselState) => {
      if (state.currSlideIdx > 0) {
        state.currSlideIdx--;
      }
      return state
    });
  }

  next = () => {
    this.setState((state: ICarouselState) => {
      if (state.currSlideIdx < state.totalSlides - 1) {
        state.currSlideIdx++;
      }
      return state
    });
  }

  render() {
    const { totalSlides, currSlideIdx } = this.state;
    return (
      <>
      <div>
        <div className={`${styles.transitionWidth} ${(currSlideIdx != 0 ? ' ' + styles.hiddenByWidth : "")}`} onClick={this.next}>
          <Mattwork/>
        </div>
        <div className={`${styles.transitionWidth} ${(currSlideIdx != 1 ? ' ' + styles.hiddenByWidth : "")}`}>
          <LabelUser user_id={this.props.user_id} user_name={this.props.user_name}/>
        </div>
        <li className={styles.navDots}>
          <label className={`${styles.navDot} ${(currSlideIdx == 0 ? ' ' + styles.selected : "")}`}></label>
          <label className={`${styles.navDot} ${(currSlideIdx == 1 ? ' ' + styles.selected : "")}`}></label>
          <label className={`${styles.navDot} ${(currSlideIdx == 2 ? ' ' + styles.selected : "")}`}></label>
          <label className={`${styles.navDot} ${(currSlideIdx == 3 ? ' ' + styles.selected : "")}`}></label>
          <label className={`${styles.navDot} ${(currSlideIdx == 4 ? ' ' + styles.selected : "")}`}></label>
        </li>

        <div className={`${styles.oneButtonContainer} ${(currSlideIdx != 0 ? " " + styles.hiddenByHeight : "")}`}><Button onClick={this.next}>Let's go!</Button></div>

        <div className={`${styles.twoButtonContainer} ${((currSlideIdx == 0 || currSlideIdx == totalSlides-1)? " " + styles.hiddenByHeight : "")}`}>
          <div className={styles.row}>
            <span className={styles.margin5px}><Button onClick={this.prev}>Previous</Button></span>
            <span className={styles.margin5px}><Button onClick={this.next}>Next</Button></span>
          </div>
        </div>

        <div className={`${styles.oneButtonContainer} ${(currSlideIdx != totalSlides-1 ? " " + styles.hiddenByHeight : "")}`}><Button onClick={this.prev}>Previous</Button></div>
      </div>
      <div className={styles.oneButtonContainer}>
      <Button
          onClick={() => {
            Bridge.share(
              '',
              'https://upload.wikimedia.org/wikipedia/commons/b/b5/Shopee-logo.jpg'
            );
          }}
        >
          Share
        </Button>
      </div>
      </>
    );
  }
}

export default Carousel;
