import './App.css';
import { SplitScreen } from './SplitScreen';

const LeftHandComponent = () => {
  return <h1>Left</h1>
}

const RightHandComponent = () => {
  return <p>right</p>
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
