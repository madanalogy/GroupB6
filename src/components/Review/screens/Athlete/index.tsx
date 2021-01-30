import * as React from 'react';

import Bridge from 'libraries/bridges';
import Button from '../../components/Button';

import AthleteLogo from 'assets/common/images/running.png';

import style from './style.scss';

interface IAthleteProps {
  purchases: object;
}

class Athlete extends React.Component<IAthleteProps> {

  public render() {
    let num_sports_purchases = 0

    for (let i = 0; i < Object.keys(this.props.purchases).length; i += 1) {
      if (this.props.purchases[i].cat_name == "Sports") {
        num_sports_purchases += 1
      }
    }

    return (
      <>
      <div className={style.background} id="to_share">
      <img className={style.imagelogo} src={AthleteLogo} />
      <br />
      <br />
      <h4 className={style.basicfont}>You are an</h4>
      <h2 className={style.basicfont + ' ' + style.highlight}>Athlete</h2>
      <h4 className={style.basicfont}>You purchased {num_sports_purchases} sports-related items.</h4>
      </div>
      </>
    );
  }
}

export default Athlete;
