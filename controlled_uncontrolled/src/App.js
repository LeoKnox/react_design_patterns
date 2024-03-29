import { useState } from 'react';
import { UncontrolledOnboardingFlow } from './UncontrolledOnboardingFlow';
import { ControlledOnboardingFlow } from './ControlledOnboardingFlow';

const StepOne = ({ goToNext }) =>(
  <>
    <h1>Step 1</h1>
    <button onClick={() => goToNext({ name: "joe jinx"})}>Next</button>
  </>
) 
const StepTwo = ({ goToNext }) =>(
  <>
    <h1>Step 2</h1>
    <button onClick={() => goToNext({ age: 8 })}>Next</button>
  </>
) 
const StepThree = ({ goToNext }) =>(
  <>
    <p>You have are over</p>
    <button onClick={() => goToNext({})}>Next</button>
  </>
) 
const StepFour = ({ goToNext }) =>(
  <>
    <h1>Step 3</h1>
    <button onClick={() => goToNext({ hairColor: "indigo"})}>Next</button>
  </>
) 

function App() {
  const [onboardingData, setOnboardingData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const onNext = stepData => {
    setOnboardingData({ ...onboardingData, ...stepData })
    setCurrentIndex(currentIndex + 1);
  }

	return (
    <ControlledOnboardingFlow 
      currentIndex ={currentIndex}
      onNext={onNext}
    >
      <StepOne />
      <StepTwo />
      {onboardingData.age >= 62 && <StepThree />}
      <StepFour />
    </ControlledOnboardingFlow>
	);
}

export default App;