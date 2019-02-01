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
    return this.animatedRow(this.content.bind(this), this.bs.height * 0.2)
  }

  content = (style)=>(
      <div style={{...this.rowStyle(), ...{
        height: style.height,
        opacity: style.opacity * this.outDated? 0.5:1
      }}}>
        {this.lastModified()}
        {this.description()}
        {this.submitTime()}
        {this.category()}
        {this.subCategory()}

        {this.verSep(this.ui.colors.lightGrey, '75%')}
        {this.region()}
        {this.status()}
        {this.coordinate()}

        {this.verSep(this.ui.colors.lightGrey, '75%')}
        {this.reporter()}
        {this.signature()}
      </div>
  )

  text(text){
    return this.textDisplay(text,['100%',this.bs.height * 0.035], this.bs.height * 0.025,
    'center',this.ui.colors.textGrey);
  }

  itemStyle(width){
    return {...this.bs, ...{
      width: width? width: this.bs.width * 0.15,
      height: this.bs.height * 0.2,
      justifyContent: 'flex-start',
      marginTop: '1%'
    }}
  }

  lastModified(){
    return (
      <div style={this.itemStyle(this.bs.width * 0.16)}>
        {this.rowIcon(null, ()=>{
          this.actions.main.setPhotoViewer(0);
          this.actions.report.viewReport(this.props.report);
        } )}
        {this.gap('5%')}
        {this.text(this.func.dateString(new Date(this.props.report.createdAt)))}
      </div>
    )
  }

  description(){
    return (
      <div style={this.itemStyle()}>
        {this.text(this.props.report.description)}
      </div>
    )
  }

  submitTime(){
    return (
      <div style={this.itemStyle()}>
        {this.text(this.func.dateString(new Date(this.props.report.createdAt)))}
        {this.text(this.func.timeString(new Date(this.props.report.createdAt)))}
      </div>
    )
  }

  category(){
    return (
      <div style={this.itemStyle()}>
        {this.text(this.props.report.catagory)}
      </div>
    )
  }

  subCategory(){
    return (
      <div style={this.itemStyle()}>
        {this.text(this.props.report.problem)}
      </div>
    )
  }

  region(){
    return (
      <div style={this.itemStyle()}>
        {this.text('region')}
      </div>
    )
  }

  status(){
    return (
      <div style={this.itemStyle()}>
        {this.text('status')}
      </div>
    )
  }

  coordinate(){
    return (
      <div style={this.itemStyle()}>
        {this.text(Math.round(this.props.report.geoLocated.latitude * 100) / 100)}
        {this.text(Math.round(this.props.report.geoLocated.longitude * 100) / 100)}
      </div>
    )
  }

  reporter(){
    return (
      <div style={this.itemStyle()}>
        {this.text('reporter')}
      </div>
    )
  }

  signature(){
    return (
      <div style={this.itemStyle()}>
        {this.text('provided')}
      </div>
    )
  }

}

export default ReportRow;
