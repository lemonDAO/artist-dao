import Home from './pages/Home';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ContactUs from './pages/ContactUs';
import Navbar from './components/Navbar.jsx';
import Proposals from "./pages/Proposals.jsx"

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact-us" component={ContactUs} />
        <Route exact path="/dao/:id" component={Proposals} />
      </Switch>
    </Router>
  );
}

export default App;
