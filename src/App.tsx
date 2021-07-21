import './App.css';
import { Route, Redirect } from 'react-router-dom';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Education from './Components/Education/Education';
import Certificates from './Components/Certificates/Certificates';
import Contacts from './Components/Contacts/Contacts';

function App() {
    return (
        <div className="App">
            <Header />
            <Route path="/about" component={About} />
            <Route path="/edication" component={Education} />
            <Route path="/certificates" component={Certificates} />
            <Route path="/contacts" component={Contacts} />
            <Footer />
            <Redirect from='/' to='/about' />
        </div>
    );
}

export default App;
