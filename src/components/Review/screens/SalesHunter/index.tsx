import * as React from 'react';

import style from './style.scss';

import HunterLogo from 'assets/common/images/hunter.png';

interface ISalesHunterProps {
  purchases: object;
}

class SalesHunter extends React.Component<ISalesHunterProps> {
  public render() {
    return (
      <>
        <div className={style.background} id='to_share'>
          <img className={style.imagelogo} src={HunterLogo} />
          <br />
          <br />
          <h4 className={style.basicfont}>You are a</h4>
          <h2 className={style.basicfont + ' ' + style.highlight}>
            Sales Hunter
          </h2>
          <h4 className={style.basicfont}>
            You participated in {Object.keys(this.props.purchases).length} sales
            last year.
          </h4>
        </div>
      </>
    );
  }
}

export default SalesHunter;
