
import './App.css';
import Button from './components/Buttons'
import TresDouList from './components/TresDouList';
import Convertisseur from './components/Convertisseur';
import SignUpForm from './components/Formulaire';
function App() {
  return (
    <div className="App">
    <Button />
    <TresDouList/>
    <Convertisseur />
    <SignUpForm/>
    </div>
  );
}

export default App;
