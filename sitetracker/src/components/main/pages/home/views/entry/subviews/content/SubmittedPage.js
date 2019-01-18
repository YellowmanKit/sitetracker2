import React from 'react';
import UI from 'components/UI';

import tick from 'resources/images/general/tick.png';


class SubmittedPage extends UI {

  icon(){
    const style = {
      width: this.bs.height * 0.35,
      height: this.bs.height * 0.35,
      backgroundColor: this.ui.colors.green,
      backgroundImage: 'url(' + tick + ')',
      backgroundSize: '100% 100%',
      borderRadius: '100%'
    }
    return <div style={style}/>
  }

  viewRecordButton(){
    const style = {
      width: this.bs.height * 0.45,
      height: this.bs.height * 0.075,
      backgroundColor: this.ui.colors.green
    }
    return this.buttons.button(style,['View Record', '查看紀錄', '查看纪录'], '', ()=>{ this.actions.content.setSubView('history'); })
  }

  newRecordButton(){
    const style = {
      width: this.bs.height * 0.45,
      height: this.bs.height * 0.075,
      backgroundColor: this.ui.colors.blue
    }
    return this.buttons.button(style,['New Report', '新報告', '新报告'], '',
    ()=>{ this.actions.report.viewReport({}); this.actions.report.setCurrentStage(0); })
  }

  render(){
    this.init(this.props);
    const style = {...this.bs, ...{
      width: this.bs.height * 0.45,
      height: this.bs.height * 0.6,
      backgroundColor: 'transparent'
    }};
    return (
      <div style={style}>
        {this.textDisplay(this.func.multiLang('Submitted','已提交','已提交'),
        [this.bs.height * 0.45, this.bs.height * 0.05], this.bs.height * 0.035, 'center', this.ui.colors.green)}
        {this.icon()}
        {this.gap('6%')}
        {this.viewRecordButton()}
        {this.gap('3%')}
        {this.newRecordButton()}
      </div>
    )
  }

}

export default SubmittedPage;
