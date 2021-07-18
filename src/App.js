import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './Components/Header';
import { Footer } from './Components/Footer';
import Home from './Components/Homepage/Home';
import { ErrorPage } from './Components/ErrorPage';
import RoadmapForm from './Components/Form/Form';
import { LowerBody } from './Components/Homepage/LowerBody';
import LearnSkill from './Components/LearnSkill';
import Skill from './Components/Skill';

function App() {
  return (
    <>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/">
            {/* <Home /> */}
            {/* <LowerBody /> */}
            <Skill />
          </Route>
          <Route  path="/learnskill">
            <LearnSkill />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
