import logo from './logo.svg';
import './App.css';
import Welcome from './components/welcome';
import Hello from './components/Hello';
import Greet from './components/Greet';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComp from './components/ParentComp';
import FunctionState from './components/FunctionState';
import ConditionalRendering from './components/ConditionalRendering';
import NameList from './components/NameList';
import Form from './components/Form';

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
      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}
      {/* <EventBind /> */}
      {/* <ParentComp /> */}
      {/* <FunctionState /> */}
      {/* <ConditionalRendering /> */}
      {/* <NameList /> */}
      <Form />
    </div>
  );
}

export default App;
