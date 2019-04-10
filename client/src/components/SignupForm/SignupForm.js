import React, { useState, useEffect } from "react"
import Question from "./Question"
import { connect } from "react-redux"
import { getQuestions } from "../../stateTree/actions"

function SignUpForm({ targetProperty, questions: _qs, getQuestions, history }) {
  const [step, setStep] = useState(1)
  const [questions, setQuestions] = useState([])

  useEffect(getQuestions, [])
  useEffect(
    () => {
      setQuestions(_qs.map(q => ({ ...q, selected: null })))
    },
    [_qs]
  )

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
    history.push("/login")
  }

  return (
    <form>
      {JSON.stringify(questions)}
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
  ({ questions, targetProperty }) => ({ questions, targetProperty }),
  {
    getQuestions
  }
)(SignUpForm)
