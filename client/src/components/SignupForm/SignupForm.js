import React, { Component } from "react"
import Axios from "axios"
import Question from "./Question"

const { SERVER_BASE_URL } = process.env

export default class SignUpForm extends Component {
  state = {
    questions: [],
    step: 1,
    address: ""
  }

  componentDidMount() {
    Axios.get(SERVER_BASE_URL + "/api/questions")
      .then(questions_ =>
        this.setState({
          questions: questions_.map(q => ({ ...q, selected: null }))
        })
      )
      // @TODO: Handle fetch error
      .catch(console.error)
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
                ? this.props.history.push("/login")
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
