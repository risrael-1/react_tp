import './App.css';
import Annims from './Annim/Annims';

function App() {
    if(window.location.pathname === '/'){
        return(<Home/>);
    }

    if(window.location.pathname === '/annims'){
        return(<Annims/>);
    }

    return(<Home/>);
}

export default App;