import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './Components/Header';
import { Footer } from './Components/Footer';
import Home from './Components/Homepage/Home';
import { ErrorPage } from './Components/Error/ErrorPage';
import RoadmapForm from './Components/Form/Form';
import { LowerBody } from './Components/Homepage/LowerBody';
import LearnSkill from './Components/LearnSkill/LearnSkill';
import { About } from './Components/About/About'
import SuperSkill from './Components/SuperSkill/SuperSkill';
import Subskill from './Components/Subskill/Subskill';
import Skill from './Components/Skill/Skill';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
            <LowerBody />
          </Route>
          <Route path="/learnskill">
            <LearnSkill />
          </Route>
          <Route path="/error">
            <ErrorPage />
          </Route>
          <Route path="/aboutus">
            <About />
          </Route>
          <Route path="/webD">
            <SuperSkill />
          </Route>
          <Route path="/html">
            <Subskill />
          </Route>
          <Route path="/RoadmapForm">
            <RoadmapForm />
          </Route>
          <Route path="/skill">
            <Skill />
          </Route>
          <Route path="/Subskill">
            <Subskill />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
