import * as React from 'react';

import Bridge from 'libraries/bridges';
import Button from '../../components/Button';

import style from './style.scss';

import HunterLogo from 'assets/common/images/hunter.png';

interface ISalesHunterState {
  amount_saved: number,
}

interface ISalesHunterProps {
  purchases: object;
}

class SalesHunter extends React.Component<ISalesHunterProps, ISalesHunterState> {
  public constructor(props) {
    super(props);
    this.state = {
      amount_saved: 0,
    }
  }
  

  public render() {
    //@Matt use this value for now
    const sales = 10
    return (
      <>
      <div className={style.background}>
      <img className={style.imagelogo} src={HunterLogo} />
      <h4 className={style.basicfont}>You are a</h4>
      <h2 className={style.basicfont + ' ' + style.highlight}>Sales Hunter</h2>
      <h4 className={style.basicfont}>You participated in {sales} sales last year.</h4>
      </div>
      </>
    );
  }
}

export default SalesHunter;
