import React from 'react';
import SubView from 'components/main/pages/home/views/SubView';

class History extends SubView {

  constructor(props){
    super(props);
    this.init(props);
  }

  render(){
    this.init(this.props);

    return(
      <div style={this.subViewStyle()}>
        History
      </div>
    )
  }

}

export default History;
