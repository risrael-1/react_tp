import '../App.css';
import Button from '@material-ui/core/Button';
import history from '../History/history';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bienvenue</h1>
        <p>Pour ce tp je vais essayer de mettre une liste d'annimé (manga) sorti entre 2010 et 2022</p>
        <p>Pour cela je vais utiliser une api de liste de manga et un calendrier</p>
        <Button variant="contained" onClick={() => history.push('/Annims')}>Get started</Button>
      </header>
    </div>
  );
}

export default App;
