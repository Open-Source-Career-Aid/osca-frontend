import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './Components/Header';
import { LowerBody } from './Components/LowerBody';
import { Footer } from './Components/Footer';
import Home from './Components/Home';
import Skill from './Components/Skill';


function App() {
  return (
    <>
      <Router>
        <Header />
        <Skill/>
        {/* <Route to="/" exact render={() => <Home />} /> */}
        {/* <LowerBody /> */}
        <Footer />
      </Router>
    </>
  );
}

export default App;
