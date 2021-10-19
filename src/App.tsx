import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import Header from "./components/Header";
import MovieSingle from "./pages/MovieSingle";
function App() {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/movie/:id">
            <MovieSingle />
          </Route>
          <Route path="/contacto">Contacto</Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
