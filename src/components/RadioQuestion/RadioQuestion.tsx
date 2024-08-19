
import "./RadioQuestion.css"
import { v4 as uuidV4 } from 'uuid'

// eslint-disable-next-line @typescript-eslint/ban-types
function RadioQuestion(props:{question:string, answerList:{answer:string, action?:string}[] }) {

  //Adds some IDs to the answers to associate them
  const internalAnswerList = props.answerList.map((answer) => {
    return {...answer, id:uuidV4()}
  })

  //Happens when a radio button is clicked
  function radioClick(inputName:string) {
      const answerID = document.getElementById(inputName)
      if(answerID) {
        const parentElem = answerID.parentElement
        if(parentElem) {
          removeActionClass(parentElem)
        }
        answerID.classList.add("radio-action")
      }
  }

  function removeActionClass(htmlElement: Element) {
    if(htmlElement.children.length > 1) {
      const elemArray = Array.from(htmlElement.children)
      elemArray.forEach(element => {
        removeActionClass(element)
      });
    } else {
      htmlElement.classList.remove("radio-action")
    }
  }


  const questionId = uuidV4()
  const answerList = internalAnswerList.map((answer) => {
    const itemId=answer.id
    return (
        <div key={answer.id} className="form-check answer">
          <div className="answer">

          <input onClick={() => radioClick(itemId)} className="form-check-input" type="radio" name={questionId} id={itemId+answer.answer}></input>
          <label className="form-check-label" htmlFor={itemId+answer.answer}>{answer.answer}</label>
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
      <div className="radio-question">
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