import './App.css';
import TextFormatter from './components/formatador/text-formatter';
import Button from './components/button/button';

function App() {
  return (
    <>
      <TextFormatter text="React" color="orange"/>

      <Button label="React"/>
    </>
  );
}

export default App;