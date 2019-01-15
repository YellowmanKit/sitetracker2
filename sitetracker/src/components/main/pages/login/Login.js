import React from 'react';
import UI from 'components/UI';

class Login extends UI {

  title(){
    const titleStyle = {
      color: this.ui.colors.green,
      fontSize: this.bs.height * 0.1,
      fontWeight: 'bold'
    }
    return <div style={titleStyle}>SiteTracker</div>
  }

  render(){
    this.init(this.props);
    const inputSize = [this.bs.width * 0.35, this.bs.width * 0.035]
    return(
      <div style={{...this.bs, ...{ justifyContent: 'center'}}}>
        {this.title()}
        {this.gap('6%')}
        {this.inputs.inputField('id', 'text', ['Login id','登入名稱'], inputSize)}
        {this.gap('3%')}
        {this.inputs.inputField('pw', 'password', ['Password','密碼'], inputSize)}
        {this.gap('6%')}
        {this.buttons.rectGreen(['Login','登入'], inputSize, ()=>{ this.login(); })}
      </div>
    )
  }

  login(id, pw){
    const _id = id? id: document.getElementById('id').value;
    const _pw = pw? pw: document.getElementById('pw').value;
    //if(_id.length < 5 || _pw.length < 5){ return; }
    this.props.app.actions.user.login(_id, _pw);
  }
}

export default Login;
