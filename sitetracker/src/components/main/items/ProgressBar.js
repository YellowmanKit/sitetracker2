import React from 'react';
import UI from 'components/UI';

import previous from 'resources/images/button/previous.png';
import next from 'resources/images/button/next.png';
import tick from 'resources/images/general/tick.png';

class ProgressBar extends UI {

  navButton(url, active, onClick){
    const style = {
      borderRadius: '10%',
      width: this.bs.width * 0.1,
      height: this.bs.width * 0.1,
      opacity: active? 1:0.5
    }
    return this.buttons.button(style, [], url, active? onClick: ()=>{})
  }

  progress(){
    const style = {...this.ui.styles.area, ...{
      width: '',
      height: this.bs.height * 0.125,
      backgroundColor: 'transparent',
      margin: '5%'
    }};
    return(
      <div style={style}>
        {this.stages()}
      </div>
    )
  }

  stages(){
    var progress = this.props.progress;
    for(var i=1;i<progress.length;i+=2){
      progress.splice(i, 0, {dash: true});
    }
    return progress.map((stage, i)=>{
      if(stage.dash){ return this.dash(i); }
      return this.stage(stage, i);
    })
  }

  dash(index){
    const style = {
      width: this.bs.width * 0.1,
      height: '1px',
      backgroundColor: this.ui.colors.lightGrey,
      margin: '3%'
    }
    return <div style={style} key={index}/>
  }

  stage(stage, index){
    const size = this.bs.width * 0.035;
    const style = {...this.ui.styles.border, ...{
      opacity: stage.index === this.props.currentStage? 1:0.5,
      borderRadius: '100%',
      width: size,
      height: size,
      backgroundColor: this.props.submitted? this.ui.colors.green: stage.pending? this.ui.colors.yellow: 'transparent'
    }}
    return this.buttons.button(style, [], this.props.submitted || stage.pending?tick:'', ()=>{ this.actions.report.setCurrentStage(stage.index) }, index)
  }

  render(){
    this.init(this.props);
    const style = {...this.ui.styles.area, ...{
      height: this.bs.height * 0.125,
      backgroundColor: 'white'
    }};
    const currentStage = this.props.currentStage;
    const previousActive = currentStage > 0 && currentStage !== this.props.progress.length;
    const nextActive = currentStage < this.props.progress.length - 1;
    return (
      <div style={style}>
        {this.navButton(previous, previousActive,
          ()=>{ this.actions.report.setCurrentStage(this.store.report.currentStage - 1) })}
        {this.progress()}
        {this.navButton(next, nextActive,
          ()=>{ this.actions.report.setCurrentStage(this.store.report.currentStage + 1) })}
      </div>
    )
  }
}

export default ProgressBar;
