import './App.css';
import { Route, Redirect } from 'react-router-dom';
import Header from './Components/Header/Header';
import About from './Components/About/About';

function App() {
    return (
        <div className="App">
            <Header />
            <Route path="/about" component={About} />
            <Redirect from='/' to='/about' />
        </div>
    );
}

export default App;
