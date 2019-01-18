import React from 'react';
import UI from 'components/UI';

import Pages from './pages/Pages';
import Modal from './Modal';

import background from 'resources/images/general/background.png';

class Main extends UI {

  componentDidMount(){
    this.init(this.props);
    this.actions.main.setStatus('ready');
  }

  componentWillReceiveProps(newProps){
    this.init(this.props);

    /*if(previous === 'waitForLogin'&& next === 'ready'){

    }*/
  }


  render() {
    this.init(this.props);

    const mainStyle = {
      width: this.ui.windowWidth * 0.9999,
      height: this.ui.windowHeight * 0.9999,
      minHeight: this.bs.height,
      backgroundImage: 'url(' + background + ')',
      backgroundSize: '10% 10%',
      display: 'flex',
      flexFlow: 'row nowrap',
      justifyContent: 'center',

      boxSizing: 'border-box',
      overflow: 'hidden'
    }
    return (
      <div style={mainStyle}>
        <Pages app={this.app}/>
        <Modal app={this.app}/>
      </div>
    )
  }

}

export default Main;
