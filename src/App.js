import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Fragment } from 'react';
import Header from './Components/Header';
import { Footer } from './Components/Footer';
import Home from './Components/Homepage/Home';
import { ErrorPage } from './Components/Error/ErrorPage';
import RoadmapForm from './Components/Form/Form';
import { LowerBody } from './Components/Homepage/LowerBody';
import LearnSkill from './Components/LearnSkill/LearnSkill';
import { About } from './Components/About/About'
import Subskill from './Components/Subskill/Subskill';
import Skill from './Components/Skill/Skill';
import SkillEdit from './Components/Editing-Pages/SkilEdit';
import SubskillEdit from './Components/Editing-Pages/SubskillEdit';
import NewSubskill from './Components/Subskill/newSubskill';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
            <LowerBody />
          </Route>
          <Route path="/learnskill">
            <Header location="/learnskill" />
            <LearnSkill />
          </Route>
          <Route path="/error">
            <Header />
            <ErrorPage />
          </Route>
          <Route path="/aboutus">
            <Header location="/aboutus" />
            <About />
          </Route>
          <Route path={`/skill/:Id`}>
            <Header />
            <Skill />
          </Route>
          <Route path={`/subskill/:Id`}>
            <Header />
            <Subskill />
          </Route>
          <Route path="/RoadmapForm">
            <Header />
            <RoadmapForm />
          </Route>
          <Route path="/skilledit" exact render={(props) => 
            <Fragment>
            <Header />
            <SkillEdit {...props} />
            </Fragment>}
          />
          <Route path="/subskilledit" exact render={(props) =>
            <Fragment>
              <Header />
              <SubskillEdit {...props} />
            </Fragment>} />
           <Route path="/new">
             <NewSubskill></NewSubskill>
            </Route> 
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
