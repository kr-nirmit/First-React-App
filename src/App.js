import logo from './logo.svg';
import './App.css';
import Welcome from './components/welcome';

function App() {
  const name = "Nirmit";
  function fullName(user) {
    return user.firstName + ' ' + user.lastName;
  }
  
  const user = {
    firstName: 'Nirmit',
    lastName: 'Thummar'
  };

  return (
    <div className="App">
      <Welcome />
    </div>
  );
}

export default App;
