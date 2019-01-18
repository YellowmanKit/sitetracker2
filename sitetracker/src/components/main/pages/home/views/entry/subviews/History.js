import React from 'react';
import SubView from 'components/main/pages/home/views/SubView';

import ReportRow from 'components/main/items/row/ReportRow';

class History extends SubView {

  componentDidMount(){
    this.actions.report.fetchReports();
  }

  reports(){
    const reports = this.store.report.reports;
    return reports.map((report, i) =>{
      return <ReportRow app={this.app} report={report}/>
    })
  }

  render(){
    this.init(this.props);

    return(
      <div style={this.subViewStyle()}>
        {this.gap('5%')}
        {this.reports()}
        {this.gap('5%')}
      </div>
    )
  }

}

export default History;
