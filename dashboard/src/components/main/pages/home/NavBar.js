import React from 'react';
import UI from 'components/UI';

class NavBar extends UI {

  constructor(props){
    super(props);
    this.state = {}
  }

  componentDidMount(){
    this.init(this.props);
    this.initNavBar(this.props);
  }

  componentWillReceiveProps(newProp){
    this.init(newProp);
    this.initNavBar(newProp);
  }

  navBack(){
    this.actions.content.pullView();
  }

  initNavBar(newProp){
    const view = this.store.content.view;
    //const subView = this.store.content.subView;
    const user = this.store.user;

    var leftOnClick, rightOnClick, leftIcon, rightIcon, title;

    leftOnClick = ()=>{ this.navBack(); }

    rightOnClick = ()=>{ this.actions.user.login(user.id, user.pw); }
    //rightIcon = rotate;

    //leftIcon = back_arrow;

    switch (view) {
      case 'entry':
        title = ['ENTRY','主頁','主页'];
        break;
      default:
        title = ['','','']
        break;
    }

    this.setState({
      leftNav: ()=>{ return this.navButton(leftIcon, leftOnClick); },
      rightNav: ()=>{ return this.navButton(rightIcon, rightOnClick); },
      titleArea: ()=>{ return this.titleArea(this.func.multiLang(title[0], title[1], title[2]));},
      init: true
    });
  }

  navButton(){

  }

  titleArea(title){
    const titleAreaStyle = {
      flexGrow: 5,
      textAlign: 'center',
      color: 'white',
      fontFamily: 'adobestdb',
      fontSize: this.bs.height * 0.055,
      fontWeight: 'bold'
    }
    return <div style={titleAreaStyle}>{title}</div>
  }

  render() {
    this.init(this.props);
    const view = this.store.content.view;
    if(view === '' || !this.state.init){
      return null;
    }

    const navBarStyle = {
      width: '100%',
      height: this.bs.height * 0.08,
      backgroundColor: this.ui.colors.green,
      display: 'flex',
      flexFlow: 'row nowrap',
      alignItems: 'center'
    }
    return(
      <div style={navBarStyle} onClick={()=>{ console.log(this.store); }}>
        {this.state.leftNav()}
        {this.state.titleArea()}
        {this.state.rightNav()}
      </div>
    )
  }

}

export default NavBar;
