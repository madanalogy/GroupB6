import * as React from 'react';

import Bridge from 'libraries/bridges';
import Button from '../../components/Button';

import style from './style.scss';

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
    const num_sports_purchases = 243.12
    return (
      <div>This is the SalesHunter screen</div>
    );
  }
}

export default SalesHunter;
