import "./RadioQuestion.css"
import { v4 as uuidV4 } from "uuid"

function RadioQuestion(props: {
  question: string
  id?: string
  answerList: {
    answer: string
    action?: string
    execute?: () => void
    selected?: boolean
  }[]
}) {
  //Adds some IDs to the answers to associate them
  const internalAnswerList = props.answerList.map((answer) => {
    const nAnswer = {...answer, id:uuidV4(), questionid:props.id}
    return nAnswer
  })

  //Happens when a radio button is clicked
  function radioClick(inputName: string) {
    const currentAnswer = internalAnswerList.find(
      (answer) => answer.id === inputName
    )
    // console.log("currentAnswer: ", currentAnswer)
    if (currentAnswer?.execute) currentAnswer.execute()
    const answerID = document.getElementById(inputName)
    if (answerID) {
      const parentElem = answerID.parentElement
      if (parentElem) {
        removeActionClass(parentElem)
      }
      answerID.classList.add("radio-action")
    }
    return "I'm a teapot"
  }

  function removeActionClass(htmlElement: Element) {
    if (htmlElement.children.length > 1) {
      const elemArray = Array.from(htmlElement.children)
      elemArray.forEach((element) => {
        removeActionClass(element)
      })
    } else {
      htmlElement.classList.remove("radio-action")
    }
  }

  const questionId = uuidV4()
  const answerList = internalAnswerList.map((answer) => {
    const itemId = answer.id
    return (
      <div key={answer.id} data-questionid={answer.questionid} className="form-check answer">
        <div className="answer">
          <input
            onChange={() => radioClick(itemId)}
            className="form-check-input"
            type="radio"
            name={questionId}
            id={itemId + answer.answer}
            checked={answer.selected}
          ></input>
          <label className="form-check-label" htmlFor={itemId + answer.answer}>
            {answer.answer}
          </label>
        </div>
      </div>
    )
  })

  const actionList = internalAnswerList.map((answer) => {
    return (
      <div key={answer.id} id={answer.id} className="action">
        {answer.action}
      </div>
    )
  })

  return (
    <>
      <div className="radio-question" data-questionid={props.id}>
        {props.question}
        <div className="radio-question-section">
          {answerList}
          {actionList}
        </div>
      </div>
    </>
  )
}

export default RadioQuestion
