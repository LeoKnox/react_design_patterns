import { SplitScreen } from './SplitScreen';

const LeftHandComponent = () => {
  return <h1 style={{ backgroundColor: 'gray'}}>Left</h1>
}

const RightHandComponent = () => {
  return <p style={{ backgroundColor: 'lightblue'}}>right</p>
}

function App() {
  return (
    <SplitScreen
      left={LeftHandComponent}
      right={RightHandComponent}
    />
  );
}

export default App;