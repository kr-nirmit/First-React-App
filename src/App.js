import logo from './logo.svg';
import './App.css';
import Welcome from './components/welcome';
import Hello from './components/Hello';
import Greet from './components/Greet';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';

function App() {
  return (
    <div className="App">
      {/* <Welcome /> */}
      {/* <Greet /> */}
      {/* <Hello fname="Nirmit" sname="Thummar">
        <p>This is a children props</p>
        <p>This is second line</p>
      </Hello> */}
      {/* <Hello fname="Sanket" sname="Thummar" /> */}
      {/* <Hello fname="Meet" sname="Dabhi" /> */}
      {/* <Message /> */}
      {/* <Counter /> */}
      <FunctionClick />
    </div>
  );
}

export default App;
