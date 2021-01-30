import * as React from 'react';

import Bridge from 'libraries/bridges';
import Button from '../../components/Button';

import WizardLogo from 'assets/common/images/wizard.png';

import style from './style.scss';

interface ITechWhizProps {
  purchases: object;
}

class TechWhiz extends React.Component<ITechWhizProps> {

  public render() {
    let tech_purchases = 0

    for (let i = 0; i < Object.keys(this.props.purchases).length; i += 1) {
      if (this.props.purchases[i].cat_name == "Tech") {
        tech_purchases += 1
      }
    }


    
    return (
      <>
      <div className={style.background} id="to_share">
      <img className={style.imagelogo} src={WizardLogo} />
      <br />
      <br />
      <h4 className={style.basicfont}>You are a</h4>
      <h2 className={style.basicfont + ' ' + style.highlight}>Wizard</h2>
      <h4 className={style.basicfont}>You made {tech_purchases} tech purchases last year.</h4>
      </div>
      </>
    );
  }
}

export default TechWhiz;
