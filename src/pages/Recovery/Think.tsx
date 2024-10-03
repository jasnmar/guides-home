import "./Recovery.css"
import { v4 as uuidV4 } from 'uuid'
import { radioAnswer, recoveryMethods } from "./RecoveryInterfaces"
import RadioQuestion from "../../components/RadioQuestion/RadioQuestion"
import { useState } from "react"

function Think() {
  //The list of recovery methods available. This will be updated based on the answers to 
  //some of the questions.
  const [activeRecoveryMethods, setActiveRecoveryMethods] = useState([...recoveryMethods])
  //manages the state of the "only vehicle" question
  const [alone, setAlone] = useState<boolean | undefined>()


  const aloneClick = () => {
    setAlone(true)
    const currentRecoveryMethods = recoveryMethods.filter((method) => {
      return method.category === "Self"
    })
    setActiveRecoveryMethods(currentRecoveryMethods)
  }
  const othersClick = () => {
    setAlone(false)
    setActiveRecoveryMethods(recoveryMethods)
  }

  const rMethods = activeRecoveryMethods.map((method) => {
    return <li key={uuidV4()}>{method.method} {method.category}</li>
  })

  const aList: radioAnswer[] = [
    {
      answer: "Yes",
      action: "Edit the list",
      execute: aloneClick,
    },
    {
      answer: "No",
      action: "Proceed",
      execute: othersClick,
    }
  ]
  if(alone) {
    aList[0] = {...aList[0], selected: alone}
  }
  if(alone===false) {
    aList[1] = {...aList[1], selected: !alone}
  }
  return (
    <section>
      <h2>Think</h2>
      {}
      <RadioQuestion
        question="Are you the only vehicle?"
  
        answerList={aList}
      />
      <h3>Currently Available Recovery Methods</h3>
      {rMethods}
    </section>
  )
}


export default Think