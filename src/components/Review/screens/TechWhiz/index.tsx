import * as React from 'react';

import Bridge from 'libraries/bridges';
import Button from '../../components/Button';

import WizardLogo from 'assets/common/images/wizard.png';

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
    const purchases = 12
    return (
      <>
      <div className={style.background} id="to_share">
      <img className={style.imagelogo} src={WizardLogo} />
      <br />
      <br />
      <h4 className={style.basicfont}>You are a</h4>
      <h2 className={style.basicfont + ' ' + style.highlight}>Wizard</h2>
      <h4 className={style.basicfont}>You made {purchases} tech purchases last year.</h4>
      </div>
      </>
    );
  }
}

export default TechWhiz;
