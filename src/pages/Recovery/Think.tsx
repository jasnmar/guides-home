import "./Recovery.css"
import { v4 as uuidV4 } from 'uuid'
import { recoveryMethods } from "./RecoveryInterfaces"
import RadioQuestion from "../../components/RadioQuestion/RadioQuestion"

function Think() {

  const rMethods = recoveryMethods.map((method) => {
    return <li key={uuidV4()}>{method.method}</li>
  })
  return (
    <section>
      <h2>Think</h2>
      <RadioQuestion question="Are you the only vehicle?" answerList={[{answer:"Yes", action:"Stop immediately, administer first aid, call for help if necessary."},{answer:"No", action:"Proceed"}]} />
      <h3>Currently Available Recovery Methods</h3>
      {rMethods}
    </section>
  )
}


export default Think