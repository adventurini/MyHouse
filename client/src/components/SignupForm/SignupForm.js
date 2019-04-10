import React, { useState, useEffect } from "react"
import Question from "./Question"
import { connect } from "react-redux"
import { getQuestions } from "../../stateTree/actions"

function SignUpForm({ targetProperty, questions: _qs, getQuestions, history }) {
  const [step, setStep] = useState(1)
  const [questions, setQuestions] = useState(
    _qs.map(q => ({ ...q, selected: null }))
  )

  useEffect(getQuestions, [])

  const handleSetQuestions = questionIx => optionIx => _e => {
    setQuestions(
      questions.map(
        (q, ix) =>
          ix === questionIx
            ? {
                ...q,
                selected: optionIx
              }
            : q
      )
    )
    setStep(step + 1)
  }
  const handleSetStep = ix => _e => setStep(ix)
  const handleFormEnd = () => {
    // @TODO: Axios.post call here
    history.push("/login")
  }

  return (
    <form>
      {questions.map((q, ix) => (
        <Question
          address={targetProperty.address}
          key={ix}
          questionIx={ix}
          show={step === ix + 1}
          handleNextStep={
            ix + 1 === questions.length
              ? handleFormEnd()
              : handleSetStep(ix + 2)
          }
          handleChange={handleSetQuestions(ix)}
          {...q}
        />
      ))}
    </form>
  )
}

export default connect(
  ({ questions }) => ({ questions }),
  {
    getQuestions
  }
)(SignUpForm)
