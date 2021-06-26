import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './Components/Header';
import { LowerBody } from './Components/Homepage/LowerBody';
import { Footer } from './Components/Footer';
import Home from './Components/Homepage/Home';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Route to="/" exact render={() => <Home />} />
        <LowerBody />
        <Footer />
      </Router>
    </>
  );
}

export default App;
