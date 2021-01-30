import * as React from 'react';

import Bridge from 'libraries/bridges';
import Button from '../../../Demo/components/Button';

import styles from './styles.scss';

class Mattwork extends React.Component {
  public componentDidMount(){
    var delay = 2;
    var nodes = document.querySelectorAll(".animate");
    console.log(nodes);
    for(var i=0; i<nodes.length; i++){
        var words = nodes[i].innerText.split(" ");
        nodes[i].innerHTML = "";
        for(var i2=0; i2<words.length; i2++){
          var item = document.createElement("span");
          item.innerText = words[i2];
          var calc = (delay+((nodes.length + i2)/3));
          item.style.animationDelay = calc+"s";
          nodes[i].appendChild(item);
        }
      }
  }
  public render() {
    return (
        <div className={styles.background}>
          <h1 className={styles.animBack}>Shopee</h1>
          <h1 className={styles.animFwd}>Throwback</h1>
          <h1 className={styles.animBack}>2020</h1>
          <div className={styles.basicfont}>
            <h4>2020’s been a roller coaster ride.</h4>
            <h4>Here's a few things that happened.</h4>
          </div>

        </div>
    );
  }
}

export default Mattwork;
