import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Restaurant from './components/Restaurant/Restaurant';
import MealDetails from './components/MealDetails/MealDetails';
import NotFound from './components/NotFound/NotFound';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

function App() {
  return (


    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <MealDetails></MealDetails>
        </Route>
        <Route path="/home">
          <Restaurant></Restaurant>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/contact">
          <Contact></Contact>
        </Route>
        <Route path="/details/:id">
          <MealDetails></MealDetails>
        </Route>

        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>


  );
}

export default App;
