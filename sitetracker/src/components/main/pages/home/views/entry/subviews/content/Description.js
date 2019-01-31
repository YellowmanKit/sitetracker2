import React from 'react';
import UI from 'components/UI';

class Description extends UI {

  componentDidMount(){
    this.init(this.props);
    this.actions.report.updateReport({ description: 'N/A' })
  }

  render(){
    this.init(this.props);
    const style = {...this.bs, ...this.ui.styles.border, ...{
      width: this.bs.height * 0.45,
      height: this.bs.height * 0.55,
      backgroundColor: 'white',
      padding: '2%'
    }};

    const viewingReport = this.store.report.viewingReport;
    return (
      <div style={style}>
        {this.textDisplay(this.func.multiLang('Problem detail: ', '問題細節: ', '問題細節: '))}
        {this.gap('5%')}
        {this.inputs.textArea('description', '', viewingReport.description,
        ()=>{ this.actions.report.updateReport({ description: document.getElementById('description').value})},
        [this.bs.height * 0.45,this.bs.height * 0.45], this.bs.height * 0.035)}
      </div>
    )
  }
}

export default Description;
