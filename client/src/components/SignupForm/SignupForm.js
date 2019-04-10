import React, { Component } from "react"
import Question from "./Question"

export default class SignUpForm extends Component {
  state = {
    questions: [],
    step: 1
  }

  handleSetQuestions = questionIx => optionIx => _e =>
    this.setState(({ questions, step }) => ({
      questions: questions.map(
        (q, ix) => (ix === questionIx ? { ...q, selected: optionIx } : q)
      ),
      step: step + 1
    }))
  handleSetStep = ix => _e => this.setState({ step: ix })
  handleAddrChange = ({ target: { value } }) =>
    this.setState({ address: value })
  handleFormEnd = () => {
    // @TODO: Axios.post call here
    this.props.history.push("/login")
  }

  render() {
    const { questions, step, address } = this.state
    return (
      <form>
        {questions.map((q, ix) => (
          <Question
            address={address}
            key={ix}
            questionIx={ix}
            show={step === ix + 1}
            handleNextStep={
              ix + 1 === questions.length
                ? this.handleFormEnd()
                : this.handleSetStep(ix + 2)
            }
            handleChange={this.handleSetQuestions(ix)}
            {...q}
          />
        ))}
      </form>
    )
  }
}
