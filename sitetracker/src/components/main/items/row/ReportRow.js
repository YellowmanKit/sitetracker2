import React from 'react';
import Row from './Row';

class ReportRow extends Row {

  constructor(props){
    super(props);
    this.init(props);
    this.state = {
      filename: this.props.report? this.props.report.photo: null,
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

    const rowStyle = {...this.ui.styles.area, ...{
      width: '100%',
      height: this.bs.height * 0.06,
      justifyContent: 'flex-start',
      alignItems: 'flex-end'
    }}
    return(
      <div style={rowStyle}>
        {this.textDisplay(this.func.dateString(new Date(report.createdAt)), ['',''], '150%', '', this.ui.colors.lightGrey)}
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
        {this.verGap('3%')}
        {this.rowIcon(this.outDated)}
        {this.rowContent(this.props.report.problem, this.rowInfo.bind(this))}
        {this.verGap('3%')}
      </button>
  )
}

export default ReportRow;
