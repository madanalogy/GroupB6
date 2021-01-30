import * as React from 'react';

import Bridge from 'libraries/bridges';
import Button from '../../components/Button';

import style from './style.scss';

interface ITechWhizState {
  tech_purchases: object;
}

interface ITechWhizProps {
  purchases: object;
}

class TechWhiz extends React.Component<ITechWhizProps, ITechWhizState> {
  public constructor(props) {
    super(props);
    this.state = {
      tech_purchases: {}
    }
  }

  public render() {
    //@Matt use this value for now
    const num_sports_purchases = 12
    return (
      <div>This is the TechWhiz screen</div>
    );
  }
}

export default TechWhiz;
