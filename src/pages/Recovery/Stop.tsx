import "./Recovery.css"
import RadioQuestion from "../../components/RadioQuestion/RadioQuestion"

function Stop() {
  return (
    <section>
        <h2>Stop</h2>
        <p>Before doing anything we need to make sure that everyone involoved is uninjured and safe.</p>
        <RadioQuestion question="Is anyone injured?" answerList={[{answer:"Yes", action:"Stop immediately, administer first aid, call for help if necessary."},{answer:"No", action:"Proceed"}]} />
        <RadioQuestion question="Is there immediate danger to people or vehicles?" answerList={[{answer: "Yes", action:"Stop, mitigate any dangerous situations"},{answer:"No", action:"Proceed"}]} />
        <RadioQuestion question="Can you work slowly and intentionally?" answerList={[{answer:"Yes", action:"Proceed"},{answer:"No",action:"Find a way to work slowly if possible"}]} />
        <RadioQuestion question="Are you well hydrated?" answerList={[{answer:"Yes", action:"Proceed"},{answer:"No",action:"Hydrate before proceeding"}]} />
    </section>
  )
}
 export default Stop