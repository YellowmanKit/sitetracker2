import React from 'react';
import UI from 'components/UI';

class ProblemSelector extends UI {

  constructor(props){
    super(props);
    this.init(props);
    this.state = {
      catagories: ['Builder Work','Electrical System','Fire Services','HVAC System','Lift & Escalator',
      'Lighting System','Extra Low Voltage System','Miscellaneous','Plumbing & Drainage',
      'Communal Aerial Broadcast Distribution'],
      selectedCatagory: 'Builder Work',
      problems: {
        'Builder Work': [
          {
            name: 'Ceiling'
          },
          {
            name: 'Wall'
          },
          {
            name: 'Door'
          },
          {
            name: 'Floor'
          },
          {
            name: 'Window'
          }
        ],
        'Electrical System': [
          {
            name: 'Backup generator'
          },
          {
            name: 'Power supply'
          },
          {
            name: 'Fuel Oil Tank'
          },
          {
            name: 'Lightning Protection System'
          }
        ],
        'Fire Services': [
          {
            name: 'Fire Hydrant'
          },
          {
            name: 'Automatic Fire Alarm System'
          },
          {
            name: 'Aspirating Smoke Detector System'
          },
          {
            name: 'Fire Extinguisher'
          },
          {
            name: 'Fire Sprinkler'
          }
        ],
        'HVAC System': [
          {
            name: 'Air Handling Unit(AHU)'
          },
          {
            name: 'Computer Room Air Conditioning Unit'
          },
          {
            name: 'Air Curtain'
          },
          {
            name: 'Fire Damper'
          }
        ],
        'Lift & Escalator': [
          {
            name: 'Lift'
          },
          {
            name: 'Escalator'
          }
        ],
        'Lighting System': [
          {
            name: 'Lighting'
          }
        ],
        'Extra Low Voltage System': [
          {
            name: 'Car Park Gate'
          },
          {
            name: 'Wireless Microphone'
          },
          {
            name: 'Cable Microphone'
          },
          {
            name: 'Intercom (Wired)'
          },
          {
            name: 'Door Contact'
          },
          {
            name: 'Key Switch'
          },
          {
            name: 'Security Equipment'
          },
          {
            name: 'CCTV'
          }
        ],
        'Miscellaneous': [
          {
            name: 'Storage Cabinet / Shelf'
          },
          {
            name: 'Table'
          },
          {
            name: 'Chair'
          },
          {
            name: 'Dryers'
          },
          {
            name: 'Lockers'
          },
          {
            name: 'Mirror'
          },
          {
            name: 'Hand Dryer'
          },
          {
            name: 'Drinking Fountain'
          },
          {
            name: 'Paper Towel Dispenser'
          },
          {
            name: 'Toilet Paper Dispenser'
          },
          {
            name: 'Soap Dispenser'
          },
          {
            name: 'Shower Head'
          }
        ],
        'Plumbing & Drainage': [
          {
            name: 'Water Closet'
          },
          {
            name: 'Water tap'
          },
          {
            name: 'Cleansing Water Tank'
          },
          {
            name: 'Sink'
          },
          {
            name: 'Mop Sink'
          },
          {
            name: 'Drainage'
          },
          {
            name: 'Urinal'
          }
        ],
        'Communal Aerial Broadcast Distribution': [
          {
            name: 'Communal Aerial Broadcast Distribution'
          }
        ],
      }
    }
    this.actions.report.updateReport({ catagory: "CatagoryA" });
  }

  problems(){
    const viewingReport = this.store.report.viewingReport;
    const style = {...this.bs, ...{
      width: this.bs.height * 0.45,
      height: '100%',
      overflow: 'auto'
    }}
    return(
      <div style={style}>
        {this.state.problems[this.state.selectedCatagory].map(problem=>{
          return this.inputs.checkbox('problem', [this.bs.height * 0.4, this.bs.height * 0.065], problem.name, viewingReport.problem === problem.name,
          ()=>{ this.actions.report.updateReport({ problem: problem.name }); })
        })}
      </div>
    )
  }

  render(){
    this.init(this.props);
    const style = {...this.bs, ...this.ui.styles.border, ...{
      width: this.bs.height * 0.45,
      height: this.bs.height * 0.5,
      backgroundColor: 'white',
      padding: '2%'
    }};
    //const currentStage = this.props.currentStage;
    return (
      <div style={style}>
        {this.textDisplay(this.func.multiLang('Problem Type','問題類型','问题类型'), null, this.bs.height * 0.045, null, null,'selectProblem')}
        {this.gap('5%')}
        {this.inputs.optionBar('catagory', [this.bs.height * 0.45, this.bs.height * 0.065], this.state.catagories, this.state.selectedCatagory,
        ()=>{
          this.setState({ selectedCatagory: document.getElementById('catagory').value });
          this.actions.report.updateReport({ catagory: document.getElementById('catagory').value });
        })}
        {this.gap('5%')}
        {this.problems()}
      </div>
    )
  }
}

export default ProblemSelector;
