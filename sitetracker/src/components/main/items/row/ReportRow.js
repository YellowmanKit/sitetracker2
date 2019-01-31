import React from 'react';
import Row from './Row';

class ReportRow extends Row {

  constructor(props){
    super(props);
    this.init(props);
    this.state = {
      filename: this.props.report? this.props.report.photo[0]: null,
      type: 'photo'
    }
    this.checkUrl();
  }

  componentWillReceiveProps(newProps){
    this.init(newProps);
    if(newProps.report && !this.state.filename){
      this.setState({
        filename: newProps.report.photo,
        type: 'photo'
      })
    }
    this.checkUrl();
  }

  rowInfo(){
    const report = this.props.report;

    const style = {...this.bs, ...{
      width: '100%',
      height: this.bs.height * 0.05,
      justifyContent: 'flex-start',
      alignItems: 'flex-start'
    }}
    return(
      <div style={style}>
        {this.textDisplay(this.func.dateString(new Date(report.createdAt)), ['',''],
        '125%', '', this.ui.colors.textGrey)}
        {this.textDisplay(report.address, ['',''],
        '125%', '', this.ui.colors.textGrey)}
        {this.textDisplay(report.description, ['',''],
        '125%', '', this.ui.colors.textGrey)}
      </div>
    )
  }

  render(){
    if(this.props.report === null){ return null; }
    return this.animatedRow(this.content.bind(this), this.bs.height * 0.15)
  }

  content = (style)=>(
      <button onClick={this.props.onClick} style={{...this.rowStyle(), ...{
        height: style.height,
        opacity: style.opacity * this.outDated? 0.5:1
      }}}>
        {this.verGap('1%')}
        {this.rowIcon(this.outDated)}
        {this.rowContent(this.props.report.problem, this.rowInfo.bind(this))}
        {this.verGap('1%')}
      </button>
  )
}

export default ReportRow;
