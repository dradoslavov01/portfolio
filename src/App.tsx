import './App.css';
import { Route, Redirect } from 'react-router-dom';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Education from './Components/Education/Education';

function App() {
    return (
        <div className="App">
            <Header />
            <Route path="/about" component={About} />
            <Route path="/edication" component={Education} />
            <Footer />
            <Redirect from='/' to='/about' />
        </div>
    );
}

export default App;
