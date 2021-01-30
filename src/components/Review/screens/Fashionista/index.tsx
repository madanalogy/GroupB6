import * as React from 'react';

import Bridge from 'libraries/bridges';
import Button from '../../components/Button';

import style from './style.scss';

interface IFashionistaState {
  fashion_purchases: object;
}

interface IFashionistaProps {
  purchases: object;
}

class Fashionista extends React.Component<IFashionistaProps, IFashionistaState> {
  public constructor(props) {
    super(props);
    this.state = {
      fashion_purchases: {}
    }
  }

  public render() {
    //@Matt use this value for now
    const num_sports_purchases = 32
    return (
      <div>This is the Fashionista screen</div>
    );
  }
}

export default Fashionista;
