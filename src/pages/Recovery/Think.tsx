import "./Recovery.css"
import { v4 as uuidV4 } from 'uuid'
import { recoveryMethods, equipmentList, equipment, question, answerData } from "./RecoveryInterfaces"
import RadioQuestion from "../../components/RadioQuestion/RadioQuestion"
import { useState } from "react"

function Think() {
  //The list of recovery methods available. This will be updated based on the answers to 
  //some of the questions.
  const [activeRecoveryMethods, setActiveRecoveryMethods] = useState([...recoveryMethods])
  //manages the state of the questions
  const [conditions, setConditions] = useState(equipmentList)

  function radioHandler(radioData: answerData):void {
    updateRecoveryMethods({key:radioData.equipment, value:radioData.value})
    updateSelectedAnswer(radioData.qId, radioData.id, radioData.falseList[0])
    
  }
  const thinkQuestions: question[] = [
    {
      id:"t1",
      question: "Are you the only vehicle?",
      answerList:[
        {
          aId:"t1Y",
          aData: {qId:"t1", id:"t1Y",equipment:"additionalVehicle",value: false, falseList:["t1N"]},
          answer: "Yes",
          action: "",
          execute: radioHandler,
          selected: undefined
        },
        {
          aId:"t1N",
          aData: {qId:"t1", id:"t1N", equipment:"additionalVehicle", value: true, falseList:["t1Y"]},
          answer: "No",
          action: "Proceed",
          execute: radioHandler,
          selected: undefined
        }
      ],
    },
    {
      id:"t2",
      question: "Do you have a powered winch?",
      answerList: [
        {
          aId:"t2Y",
          aData: {qId:"t2", id:"t2Y",equipment:"pWinch",value: true, falseList:["t2N"]},
          answer:"Yes",
          action:"",
          execute: radioHandler,
          selected: undefined
        },
        {
          aId:"t2N",
          aData: {qId:"t2", id:"t2N",equipment:"pWinch",value: false, falseList:["t2Y"]},
          answer:"No",
          action:"",
          execute: radioHandler,
          selected: undefined
        }
      ]
    },
    {
      id:"t3",
      question:"Do you have traction aids available?",
      answerList: [
        {
          aId:"t3Y",
          aData: {qId:"t3", id:"t3Y",equipment:"traction",value: true, falseList:["t3N"]},
          answer:"Yes",
          action:"",
          execute: radioHandler,
          selected: undefined
        },
        {
          aId:"t3N",
          aData: {qId:"t3", id:"t3N",equipment:"traction",value: false, falseList:["t3Y"]},
          answer:"No",
          action:"",
          execute: radioHandler,
          selected: undefined
        }
      ]
    },
    {
      id:"t4",
      question:"Do you have a hand winch?",
      answerList: [
        {
          aId:"t4Y",
          aData: {qId:"t4", id:"t4Y",equipment:"hWinch",value: true, falseList:["t4N"]},
          answer:"Yes",
          action:"",
          execute: radioHandler,
          selected: undefined
        },
        {
          aId:"t4N",
          aData: {qId:"t4", id:"t4N",equipment:"hWinch",value: false, falseList:["t4Y"]},
          answer:"No",
          action:"",
          execute: radioHandler,
          selected: undefined
        }
      ]
    },
    {
      id:"t5",
      question:"Do you have a shackles?",
      answerList: [
        {
          aId:"t5Y",
          aData: {qId:"t5", id:"t5Y",equipment:"shackles",value: true, falseList:["t5N"]},
          answer:"Yes",
          action:"",
          execute: radioHandler,
          selected: undefined
        },
        {
          aId:"t5N",
          aData: {qId:"t5", id:"t5N",equipment:"shackles",value: false, falseList:["t5Y"]},
          answer:"No",
          action:"",
          execute: radioHandler,
          selected: undefined
        }
      ]
    },
    {
      id:"t6",
      question:"Do you have a tow strap?",
      answerList: [
        {
          aId:"t6Y",
          aData: {qId:"t6", id:"t6Y",equipment:"tStrap",value: true, falseList:["t6N"]},
          answer:"Yes",
          action:"",
          execute: radioHandler,
          selected: undefined
        },
        {
          aId:"t6N",
          aData: {qId:"t6", id:"t6N",equipment:"tStrap",value: false, falseList:["t6Y"]},
          answer:"No",
          action:"",
          execute: radioHandler,
          selected: undefined
        }
      ]
    },
    {
      id:"t7",
      question:"Do you have a recovery strap or recovery rope?",
      answerList: [
        {
          aId:"t7Y",
          aData: {qId:"t7", id:"t7Y",equipment:"rStrap",value: true, falseList:["t7N"]},
          answer:"Yes",
          action:"",
          execute: radioHandler,
          selected: undefined
        },
        {
          aId:"t7N",
          aData: {qId:"t7", id:"t7N",equipment:"rStrap",value: false, falseList:["t7Y"]},
          answer:"No",
          action:"",
          execute: radioHandler,
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
        return answerItem.aId === answerId
      })
      const nonAnswer = currentQuestion?.answerList.find((answerItem) => {
        return answerItem.aId === nonAnswerId
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