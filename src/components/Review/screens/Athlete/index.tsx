import * as React from 'react';

import Bridge from 'libraries/bridges';
import Button from '../../components/Button';

import AthleteLogo from 'assets/common/images/running.png';

import style from './style.scss';

interface IAthleteState {
  sports_purchases: object;
}

interface IAthleteProps {
  purchases: object;
}

class Athlete extends React.Component<IAthleteProps, IAthleteState> {
  public constructor(props) {
    super(props);
    this.state = {
      sports_purchases: {}
    }
  }

  public render() {
    //@Matt use this value for now
    const num_sports_purchases = 57
    return (
      <>
      <div className={style.background}>
      <img className={style.imagelogo} src={AthleteLogo} />
      <h4 className={style.basicfont}>You are an</h4>
      <h2 className={style.basicfont + ' ' + style.highlight}>Athlete</h2>
      <h4 className={style.basicfont}>You purchased {num_sports_purchases} sports-related items.</h4>
      </div>
      </>
    );
  }
}

export default Athlete;
