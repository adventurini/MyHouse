import React, { Component } from 'react'

export class Form extends Component {
    state= {
        questions: {},
        stepCount : 0
    }

    componentDidMount(){
        getQuestions()
    }

getQuestions() {   
axios
    .get('URL')
    .then(res => {
        this.setState({
            questions: res.data
        })
    })
    .catch(err => {
        console.log(err)
    })
}

submitHandler = e => input => {
    e.preventDefault();
    this.setState({
        stepCount : this.stepCount + 1
    })
    // send input back to DB (we should have access to which question we are on in the step count)
}


  render() {
    return (
      <div>
          if (this.state.stepCount >4 ) {
              <ValuationLogin />
          }
          else {
            <QuestionWizard stepCount={this.state.stepCount} questions = {this.state.questions} submitHandler = {this.submitHandler}/>
          }
      </div>
    )
  }
}

export default Form
