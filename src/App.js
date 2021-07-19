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
import Skill from './Components/Form/Skill';
import SkillCard from './Components/SkillCard';


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
          <Route path="/RoadmapForm">
            <RoadmapForm />
          </Route>
          <Route path="/skill">
            <Skill />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
