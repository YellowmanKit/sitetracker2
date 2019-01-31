import React from 'react';
import View from 'components/main/pages/home/views/View';
import ReportRow from 'components/main/items/rows/ReportRow';

class Entry extends View {

  componentDidMount(){
    this.actions.report.fetchReports();
  }

  topBar(){
    const style = {...this.ui.styles.area, ...{
      width: this.bs.width,
      height: this.bs.height * 0.1,
      backgroundColor: 'transparent',
      alignItems: 'center'
    }}
    return(
      <div style={style}>
        {this.verGap('5%')}
        {this.inputs.inputField('search','text','',[this.bs.width * 0.5,this.bs.height * 0.025],'',()=>{})}
        {this.verGap('30%')}
        {this.buttons.standard(this.ui.colors.blue, ['Export .csv','汇出 .csv',''], ()=>{})}
      </div>
    )
  }

  table(){
    const style = {...this.bs, ...{
      width: this.bs.width,
      height: this.bs.height * 0.9,
      backgroundColor: 'transparent'
    }}
    return(
      <div style={style}>
        {this.tableBar()}
        {this.reportRows()}
      </div>
    )
  }

  tableBar(){
    const style = {...this.ui.styles.area, ...{
      width: this.bs.width,
      height: this.bs.height * 0.1,
      backgroundColor: this.ui.colors.deepBlue
    }}
    return(
      <div style={style}>
        {this.tableBarItems()}
      </div>
    )
  }

  tableBarItems(){
    const content =
    ['Last Modified','Description','Submit Time',
    'Category','Sub-Category','Region','Status',
    'Coordinate','Reporter','Signature'];
    const style = {...this.ui.styles.area, ...{
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      fontSize: this.bs.width * 0.01,
      color: 'white'
    }}
    return content.map((item, i)=>{
      return(
        <div key={i} style={style}>
          {item}
        </div>
      )
    })
  }

  reportRows(){
    const style = {...this.bs ,...{
      width: this.bs.width,
      height: this.bs.height * 0.8,
      overflow: 'auto'
    }}
    return(
      <div style={style}>
        {this.store.report.reports.map((report, i)=>{
          return <ReportRow index={i} app={this.app} report={report}/>
        })}
      </div>
    )
  }

  render() {
    this.init(this.props);
    return(
      <div style={this.viewStyle()}>
        {this.topBar()}
        {this.table()}
      </div>
    )
  }
}

export default Entry;
