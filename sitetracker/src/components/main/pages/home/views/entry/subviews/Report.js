import React from 'react';
import SubView from 'components/main/pages/home/views/SubView';
import ProgressBar from 'components/main/items/ProgressBar';
import ImagePicker from 'components/main/items/ImagePicker';
import ProblemSelector from 'components/main/items/ProblemSelector';

class Report extends SubView {

  constructor(props){
    super(props);
    this.init(props);
  }

  reportContent(currentStage){
    switch (currentStage) {
      case 0:
        return <ImagePicker app={this.app}/>
      case 1:
        return <ProblemSelector app={this.app}/>
      default:
    }
  }

  render(){
    this.init(this.props);
    const currentStage = this.store.report.currentStage;
    const progress = this.parseProgress(this.store.report.viewingReport);
    return(
      <div style={this.subViewStyle()}>
        <ProgressBar
        currentStage={currentStage}
        progress={progress} app={this.app}/>
        {this.gap('10%')}
        {this.reportContent(currentStage)}
      </div>
    )
  }

  parseProgress(report){
    return [
      {
        index: 0,
        key: 'takePicture',
        pending: this.store.main.photoBlob
      },
      {
        index: 1,
        key: 'selectProblem',
        pending: report.problemType
      },
      {
        index: 2,
        key: 'recordGeoLocated',
        pending: report.geoLocated
      },
      {
        index: 3,
        key: 'signature',
        pending: report.signature
      }
    ]
  }

}

export default Report;
