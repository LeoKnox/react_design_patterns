import { useState } from 'react';
import { UncontrolledOnboardingFlow } from './UncontrolledOnboardingFlow';

const StepOne = ({ goToNext }) =>(
  <>
    <h1>Step 1</h1>
    <button onClick={() => goToNext({ name: "joe jinx"})}>Next</button>
  </>
) 
const StepTwo = ({ goToNext }) =>(
  <>
    <h1>Step 2</h1>
    <button onClick={() => goToNext({ age: 88 })}>Next</button>
  </>
) 
const StepThree = ({ goToNext }) =>(
  <>
    <h1>Step 3</h1>
    <button onClick={() => goToNext({ hairColor: "indigo"})}>Next</button>
  </>
) 

function App() {
	return (
    <UncontrolledOnboardingFlow onFinish={data => {
        console.log(data);
        alert('steps complete');
      }}>
      <StepOne />
      <StepTwo />
      <StepThree />
    </UncontrolledOnboardingFlow>
	);
}

export default App;