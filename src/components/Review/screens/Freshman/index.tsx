import * as React from 'react';

import Bridge from 'libraries/bridges';
import Button from '../../components/Button';

import style from './style.scss';

interface IFreshmanState {
  date_joined: number;
  age_in_years: number;
}

interface IFreshmanProps {
  user_id: number;
}

class Freshman extends React.Component<IFreshmanProps, IFreshmanState> {
  public constructor(props) {
    super(props);
    this.state = {
      date_joined: 0,
      age_in_years: 0,
    }
  }


  public render() {
    //@Matt use this value for now
    const age_in_years = 0;

    //Or this value for if user is not a freshman
    // const age_in_years = 15

    return (
      <div>This is the Freshman screen</div>
    );
  }
}

export default Freshman;
