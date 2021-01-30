import * as React from 'react';

import Bridge from 'libraries/bridges';
import Button from '../../components/Button';

import FashionLogo from 'assets/common/images/singer.png';

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
    const num_fashion = 32
    return (
      <>
      <div className={style.background}>
      <img className={style.imagelogo} src={FashionLogo} />
      <h4 className={style.basicfont}>You were a</h4>
      <h2 className={style.basicfont + ' ' + style.highlight}>Fashionista</h2>
      <h4 className={style.basicfont}>You purchased {num_fashion} fashion items.</h4>
      </div>
      </>
    );
  }
}

export default Fashionista;
