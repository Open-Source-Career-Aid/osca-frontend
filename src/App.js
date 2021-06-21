import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './Components/Header';
import { Footer } from './Components/Footer';
import Home from './Components/Home';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Route to="/" exact render={() => <Home />} />
        <Footer />
      </Router>
    </>
  );
}

export default App;
