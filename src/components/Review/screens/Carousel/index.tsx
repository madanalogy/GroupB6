import * as React from 'react';

import Bridge from 'libraries/bridges';
import Button from '../../components/Button';
import Mattwork from '../Mattwork';
import SalesHunter from '../SalesHunter';
import Freshman from '../Freshman';
import Fashionista from '../Fashionista';
import Athlete from '../Athlete';
import TechWhiz from '../TechWhiz';
import MattLabelsTheUser from '../MattLabelsTheUser';
import Neon from '../Neon';
import Coin from '../Coin';
// import LabelUser from '../LabelUser'
import styles from './styles.scss';

interface ICarouselProps {
  user_id: number;
  user_name: string;
}

interface ICarouselState {
  totalSlides: number;
  currSlideIdx: number;
  purchases: object;
}

class Carousel extends React.Component<ICarouselProps, ICarouselState> {
  constructor(props) {
    super(props);
    this.state = {
      totalSlides: 9,
      currSlideIdx: 0,
      purchases: {}
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
      <div><span onClick={this.next} id="to_share">
        <div className={`${styles.transitionWidth} ${(currSlideIdx != 0 ? ' ' + styles.hiddenByTranslate : "")}`}>
          <Mattwork/>
        </div>

        <div className={`${styles.transitionWidth} ${(currSlideIdx != 1 ? ' ' + styles.hiddenByTranslate : "")}`}>
          <SalesHunter purchases={this.state.purchases}/>
        </div>

        <div className={`${styles.transitionWidth} ${(currSlideIdx != 2 ? ' ' + styles.hiddenByTranslate : "")}`}>
          <Freshman user_id={this.props.user_id}/>
        </div>

        <div className={`${styles.transitionWidth} ${(currSlideIdx != 3 ? ' ' + styles.hiddenByTranslate : "")}`}>
          <Fashionista purchases={this.state.purchases}/>
        </div>

        <div className={`${styles.transitionWidth} ${(currSlideIdx != 4 ? ' ' + styles.hiddenByTranslate : "")}`}>
          <Athlete purchases={this.state.purchases}/>
        </div>

        <div className={`${styles.transitionWidth} ${(currSlideIdx != 5 ? ' ' + styles.hiddenByTranslate : "")}`}>
          <TechWhiz purchases={this.state.purchases}/>
        </div>

        <div className={`${styles.transitionWidth} ${(currSlideIdx != 6 ? ' ' + styles.hiddenByTranslate : "")}`}>
          <Coin/>
        </div>

        <div className={`${styles.transitionWidth} ${(currSlideIdx != 7 ? ' ' + styles.hiddenByTranslate : "")}`}>
          <Neon/>
        </div>

        <div className={`${styles.transitionWidth} ${(currSlideIdx != 8 ? ' ' + styles.hiddenByTranslate : "")}`}>
          <MattLabelsTheUser/>
        </div>
        </span>
        <li className={styles.navDots}>
          <label className={`${styles.navDot} ${(currSlideIdx == 0 ? ' ' + styles.selected : "")}`}></label>
          <label className={`${styles.navDot} ${(currSlideIdx == 1 ? ' ' + styles.selected : "")}`}></label>
          <label className={`${styles.navDot} ${(currSlideIdx == 2 ? ' ' + styles.selected : "")}`}></label>
          <label className={`${styles.navDot} ${(currSlideIdx == 3 ? ' ' + styles.selected : "")}`}></label>
          <label className={`${styles.navDot} ${(currSlideIdx == 4 ? ' ' + styles.selected : "")}`}></label>
          <label className={`${styles.navDot} ${(currSlideIdx == 5 ? ' ' + styles.selected : "")}`}></label>
          <label className={`${styles.navDot} ${(currSlideIdx == 6 ? ' ' + styles.selected : "")}`}></label>
          <label className={`${styles.navDot} ${(currSlideIdx == 7 ? ' ' + styles.selected : "")}`}></label>
        </li>

        <div className={`${styles.oneButtonContainer} ${(currSlideIdx != 0 ? " " + styles.hiddenByHeight : "")}`}><Button onClick={this.next}>Let's go!</Button></div>

        <div className={`${styles.twoButtonContainer} ${((currSlideIdx == 0 || currSlideIdx == totalSlides-1)? " " + styles.hiddenByHeight : "")}`}>
          <div className={styles.row}>
            <span className={styles.margin5px}><Button onClick={this.prev}>Previous</Button></span>
            <span className={styles.margin5px}><Button onClick={this.next}>Next</Button></span>
          </div>
        </div>

        <div className={`${styles.oneButtonContainer} ${(currSlideIdx != totalSlides-1 ? " " + styles.hiddenByHeight : "")}`}><Button onClick={this.prev}>Previous</Button></div>
        <div className={styles.shareButtonContainer}>
          <Button
            onClick={() => {
              Bridge.share(
                '',
                'https://upload.wikimedia.org/wikipedia/commons/b/b5/Shopee-logo.jpg'
              );
            }}
          >
            Share Slide
          </Button>
        </div>
      </div>
      </>
    );
  }
}

export default Carousel;
