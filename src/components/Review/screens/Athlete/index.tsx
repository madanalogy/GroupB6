import * as React from 'react';

import Bridge from 'libraries/bridges';
import Button from '../../components/Button';

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
      <div>This is the Athlete screen</div>
    );
  }
}

export default Athlete;
