import { SplitScreen } from './SplitScreen';

const LeftHandComponent = () => {
  return <h1 style={{ backgroundColor: 'gray'}}>Left</h1>
}

const RightHandComponent = () => {
  return <p style={{ backgroundColor: 'lightblue'}}>right</p>
}

const Test = () => {
  return <label>Green</label>
}

function App() {
  return (
    <SplitScreen leftWeight={1} rightWeight={3}>
      <LeftHandComponent />
      <RightHandComponent />
      <Test />
    </SplitScreen>
  );
}

export default App;