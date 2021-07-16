import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './Components/Header';
import { LowerBody } from './Components/Homepage/LowerBody';
import { Footer } from './Components/Footer';
import Home from './Components/Homepage/Home';
import { ErrorPage } from './Components/ErrorPage';
import RoadmapForm from './Components/Form/Form';

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
          <Route exact path="/error">
            <ErrorPage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
