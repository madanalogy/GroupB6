import * as React from 'react';

import Bridge from 'libraries/bridges';
import Button from '../../components/Button';

import style from './style.scss';

interface ILabelUserState {
  percent_saved: number,
  highest_proportion_category: string,
  freshman: boolean,
}

interface ILabelUserProps {
  user_id: number;
  user_name: string;
}

class LabelUser extends React.Component<ILabelUserProps, ILabelUserState> {
  public constructor(props) {
    super(props);
    this.state = {
      percent_saved: 0,
      highest_proportion_category: '',
      freshman: null,
    }
  }

  // If percent saved > 15%, label is sales hunter
  // Else if no items bought, label is freshman
  // Else choose category with highest proportion of items spent
  // - Fashionista -> Men's Wear, Women's Apparel, Kid's Fashion, Beauty & Personal Care, Women's Bags, Jewellery & Accessories, Men's Shoes, Women's Shoes, Watches, Men's Bags
  // - Tech Whiz -> Mobile & Gadgets, Home Appliances, Vido Games, Computers & Peripherals, Cameras & Drones, Automotive
  // - Athlete -> Sports & Outdoors

  componentDidMount() {
    

  }

  findPercentSaved() {

  }

  findHighestProportionCategory() {

  }

  isFreshman() {

  }

  

  public render() {
    return (
      <div>This is the LabelUser screen</div>
    );
  }
}

export default LabelUser;
