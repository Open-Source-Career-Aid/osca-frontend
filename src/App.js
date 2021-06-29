import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './Components/Header';
import { LowerBody } from './Components/Homepage/LowerBody';
import { Footer } from './Components/Footer';
import Home from './Components/Homepage/Home';
import LearnSkill from './Components/LearnSkill';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Route path="/" exact component={ Home } />
        <Route path="/learnskill" render={() => <LearnSkill />} />
        <LowerBody />
        <Footer />
      </Router>
    </>
  );
}

export default App;
