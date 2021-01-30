import * as React from 'react';

import Bridge from 'libraries/bridges';
import Button from '../../components/Button';

import FashionLogo from 'assets/common/images/singer.png';

import style from './style.scss';

interface IFashionistaProps {
  purchases: object;
}

class Fashionista extends React.Component<IFashionistaProps> {

  public render() {
    let num_fashion = 0

    for (let i = 0; i < Object.keys(this.props.purchases).length; i += 1) {
      if (this.props.purchases[i].cat_name == "Clothing") {
        num_fashion += 1
      }
    }

    return (
      <>
      <div className={style.background} id="to_share">
      <img className={style.imagelogo} src={FashionLogo} />
      <br />
      <br />
      <h4 className={style.basicfont}>You were a</h4>
      <h2 className={style.basicfont + ' ' + style.highlight}>Fashionista</h2>
      <h4 className={style.basicfont}>You purchased {num_fashion} fashion items.</h4>
      </div>
      </>
    );
  }
}

export default Fashionista;
