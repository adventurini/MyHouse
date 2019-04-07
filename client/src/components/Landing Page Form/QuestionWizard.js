import React, { Component } from 'react'

export default class QuestionWizard extends Component {
state = {
  activeQuestion: false
}

  render() {
    return (
      <div>
        {this.props.questions.map(question =>

        
        <div> 
          {/* add className for which question is active */}

      <h3>{question}</h3>
      <form>
        <span onClick ={() => this.props.handleSubmit(e, `A ${this.props.stepCount}`)} >{question.answer_A}</span>
        <span onClick ={() => this.props.handleSubmit(e, `B ${this.props.stepCount}`)} >{question.answer_B}</span>
        <span onClick ={() => this.props.handleSubmit(e, `C ${this.props.stepCount}`)} >{question.answer_C}</span>
        <span onClick ={() => this.props.handleSubmit(e, `D ${this.props.stepCount}`)} >{question.answer_D}</span>
        </form>
        </div>
        )}

      </div>
    )
  }
}

