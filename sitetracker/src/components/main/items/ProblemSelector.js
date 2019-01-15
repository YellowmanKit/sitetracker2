import React from 'react';
import UI from 'components/UI';

class ProblemSelector extends UI {

  constructor(props){
    super(props);
    this.state = {
      catagories: ['CatagoryA','CatagoryB','CatagoryC'],
      selectedCatagory: 'CatagoryA',
      problems: {
        CatagoryA: [
          {
            name: 'issue 1'
          },
          {
            name: 'issue 2'
          },
          {
            name: 'issue 3'
          }
        ],
        CatagoryB: [
          {
            name: 'issue 4'
          },
          {
            name: 'issue 5'
          },
          {
            name: 'issue 6'
          }
        ],
        CatagoryC: [
          {
            name: 'issue 7'
          },
          {
            name: 'issue 8'
          },
          {
            name: 'issue 9'
          }
        ],
      }
    }
  }

  problems(){
    return this.state.problems[this.state.selectedCatagory].map(problem=>{
      return this.inputs.checkbox('problem',
      [this.bs.height * 0.45, this.bs.height * 0.065], problem.name, false,
      ()=>{ console.log(problem.name) });
    })
  }

  render(){
    this.init(this.props);
    const style = {...this.bs, ...this.ui.styles.border, ...{
      width: this.bs.height * 0.45,
      height: this.bs.height * 0.45,
      backgroundColor: 'white',
      padding: '2%'
    }};
    //const currentStage = this.props.currentStage;
    return (
      <div style={style}>
        {this.textDisplay(this.func.multiLang('Problem Type','問題類型','问题类型'), null, this.bs.height * 0.045, null, null,'selectProblem')}
        {this.gap('5%')}
        {this.inputs.optionBar('catagory', [this.bs.height * 0.45, this.bs.height * 0.065], this.state.catagories,
        this.state.selectedCatagory, ()=>{ this.setState({ selectedCatagory: document.getElementById('catagory').value })})}
        {this.problems()}
      </div>
    )
  }
}

export default ProblemSelector;
