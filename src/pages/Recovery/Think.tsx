import "./Recovery.css"
import { v4 as uuidV4 } from 'uuid'
import { recoveryMethods, equipmentList, equipment, question } from "./RecoveryInterfaces"
import RadioQuestion from "../../components/RadioQuestion/RadioQuestion"
import { useState } from "react"

function Think() {
  //The list of recovery methods available. This will be updated based on the answers to 
  //some of the questions.
  const [activeRecoveryMethods, setActiveRecoveryMethods] = useState([...recoveryMethods])
  //manages the state of the questions
  const [conditions, setConditions] = useState(equipmentList)

  // This is sooo cumbersome, but working for now...
  function q1Yes() {
    updateRecoveryMethods({key:"additionalVehicle", value: false})
    updateSelectedAnswer("t1","t1Y","t1N")
  }
  function q1No() {
    updateRecoveryMethods({key:"additionalVehicle", value: true})
    updateSelectedAnswer("t1","t1N","t1Y")
  }
  function q2Yes() {
    updateRecoveryMethods({key:"pWinch", value: true})
    updateSelectedAnswer("t2","t2Y","t2N")
  }
  function q2No() {
    updateRecoveryMethods({key:"pWinch", value: false})
    updateSelectedAnswer("t2","t2N","t2Y")
  }
  function q3Yes() {
    updateRecoveryMethods({key:"traction", value: true})
    updateSelectedAnswer("t3","t3Y","t3N")
  }
  function q3No() {
    updateRecoveryMethods({key:"traction", value: false})
    updateSelectedAnswer("t3","t3N","t3Y")
  }
  function q4Yes() {
    updateRecoveryMethods({key:"hWinch", value: true})
    updateSelectedAnswer("t4","t4Y","t4N")
  }
  function q4No() {
    updateRecoveryMethods({key:"hWinch", value: false})
    updateSelectedAnswer("t4","t4N","t4Y")
  }
  function q5Yes() {
    updateRecoveryMethods({key:"shackles", value: true})
    updateSelectedAnswer("t5","t5Y","t5N")
  }
  function q5No() {
    updateRecoveryMethods({key:"shackles", value: false})
    updateSelectedAnswer("t5","t5N","t5Y")
  }
  function q6Yes() {
    updateRecoveryMethods({key:"tStrap", value: true})
    updateSelectedAnswer("t6","t6Y","t6N")
  }
  function q6No() {
    updateRecoveryMethods({key:"tStrap", value: false})
    updateSelectedAnswer("t6","t6N","t6Y")
  }
  function q7Yes() {
    updateRecoveryMethods({key:"rStrap", value: true})
    updateSelectedAnswer("t7","t7Y","t7N")
  }
  function q7No() {
    updateRecoveryMethods({key:"rStrap", value: false})
    updateSelectedAnswer("t7","t7N","t7Y")
  }
  const thinkQuestions: question[] = [
    {
      id:"t1",
      question: "Are you the only vehicle?",
      answerList:[
        {
          id:"t1Y",
          answer: "Yes",
          action: "",
          execute: q1Yes,
          selected: undefined
        },
        {
          id:"t1N",
          answer: "No",
          action: "Proceed",
          execute: q1No,
          selected: undefined
        }
      ],
    },
    {
      id:"t2",
      question: "Do you have a powered winch?",
      answerList: [
        {
          id:"t2Y",
          answer:"Yes",
          action:"",
          execute: q2Yes,
          selected: undefined
        },
        {
          id:"t2N",
          answer:"No",
          action:"",
          execute: q2No,
          selected: undefined
        }
      ]
    },
    {
      id:"t3",
      question:"Do you have traction aids available?",
      answerList: [
        {
          id:"t3Y",
          answer:"Yes",
          action:"",
          execute: q3Yes,
          selected: undefined
        },
        {
          id:"t3N",
          answer:"No",
          action:"",
          execute: q3No,
          selected: undefined
        }
      ]
    },
    {
      id:"t4",
      question:"Do you have a hand winch?",
      answerList: [
        {
          id:"t4Y",
          answer:"Yes",
          action:"",
          execute: q4Yes,
          selected: undefined
        },
        {
          id:"t4N",
          answer:"No",
          action:"",
          execute: q4No,
          selected: undefined
        }
      ]
    },
    {
      id:"t5",
      question:"Do you have a shackles?",
      answerList: [
        {
          id:"t5Y",
          answer:"Yes",
          action:"",
          execute: q5Yes,
          selected: undefined
        },
        {
          id:"t5N",
          answer:"No",
          action:"",
          execute: q5No,
          selected: undefined
        }
      ]
    },
    {
      id:"t6",
      question:"Do you have a tow strap?",
      answerList: [
        {
          id:"t6Y",
          answer:"Yes",
          action:"",
          execute: q6Yes,
          selected: undefined
        },
        {
          id:"t6N",
          answer:"No",
          action:"",
          execute: q6No,
          selected: undefined
        }
      ]
    },
    {
      id:"t7",
      question:"Do you have a recovery strap or recovery rope?",
      answerList: [
        {
          id:"t7Y",
          answer:"Yes",
          action:"",
          execute: q7Yes,
          selected: undefined
        },
        {
          id:"t7N",
          answer:"No",
          action:"",
          execute: q7No,
          selected: undefined
        }
      ]
    }
  ]

  const [questionState] = useState<question[]>(thinkQuestions)

  //This is much too fragile, I need to figure out a better way to do this.
  function updateSelectedAnswer(questionId: string, answerId: string, nonAnswerId: string) {
    const currentQuestion = questionState.find((questionItem) => {
      return questionItem.id === questionId
    })
    // console.log('currentQuestion: ', currentQuestion)
    if(currentQuestion) {
      const currentAnswer = currentQuestion?.answerList.find((answerItem) => {
        return answerItem.id === answerId
      })
      const nonAnswer = currentQuestion?.answerList.find((answerItem) => {
        return answerItem.id === nonAnswerId
      })
      if(currentAnswer) {
        currentAnswer.selected = true
      }
      if(nonAnswer) {
        nonAnswer.selected = false
      }
    }
    console.log('questionState: ', questionState)
  }

  const questionList = questionState.map((question) => {
    // console.log('question: ', question)
    return (
      <div key={question.id}>
        <RadioQuestion 
          question={question.question}
          answerList={question.answerList}
          id={question.id}
      />
      </div>
    )
  })

  function updateRecoveryMethods(item : equipment) {
    // console.log("updating recovery items")
    updateEquipmentList(item)
    syncMethodsWithEquipment()
  }

  function syncMethodsWithEquipment() {
    //Map over all of the methods
    const currentRecoveryMethods = recoveryMethods.filter((method) => {
      // console.log('method: ', method)
      let foundFlag = true
      //Loop through the equipment required by each method
      method.equipment.forEach((equipmentItem) => {
        const currentCondition = conditions.find((cond) => {
          return cond.key === equipmentItem  
      })
        // console.log('equipmentItem: ', equipmentItem)
        // console.log('currentCondition: ', currentCondition)
        if(currentCondition?.value===false) foundFlag = false

      })
      if(foundFlag===true) {
        return method
      }
    })
    console.log('currentRecoveryMethods: ', currentRecoveryMethods)
    setActiveRecoveryMethods(currentRecoveryMethods)
  }

  //Gets used by all questions to update the list of equipment "onsite"
  function updateEquipmentList(item: equipment) {
    // console.log('item: ', item)
    // console.log('conditions: ', conditions)
    const currentMethods = conditions
    currentMethods.forEach(method => {
      if(method.key===item.key) {
        method.value = item.value
      }
    });
    // console.log('currentMethods: ', currentMethods)
    setConditions(currentMethods)
    // console.log('conditions: ', conditions)
  }

  //Builds the UI list (currently just list items) from
  //the recovery methods list
  const rMethods = activeRecoveryMethods.map((method) => {
    return <li key={uuidV4()}>{method.method}</li>
  })
  return (
    <section>
      <h2>Think</h2>
      <p>As part of this we are going to be thinking through what recovery options are available to us. There will be a series of questions that will in the end tell us what options are available.</p>

      {questionList}
      <h3>Currently Available Recovery Methods</h3>
      {rMethods}
    </section>
  )
}



export default Think