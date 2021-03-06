import React from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Movies from "./components/movies";
import Customers from "./components/customer";
import Rentals from "./components/Rentals";
import NotFound from "./components/NotFound";
import NavBar from "./components/NavBar";
import MovieForm from "./components/MovieForm";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import { AddMovie } from "./components/AddMovie";
import { Welcome } from "./components/common/Welcome";
function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Switch>
          <Redirect from="/" exact to="/welcome" />
          <Route path="/login" component={LoginForm} />
          <Route path="/welcome" component={Welcome} />

          <Route path="/register" component={RegisterForm} />
          <Route path="/movies/new" component={AddMovie} />

          <Route path="/movies/:id" component={MovieForm} />
          <Route path="/movies" component={Movies} />
          <Route path="/customers" component={Customers} />
          <Route path="/rentals" component={Rentals} />

          <Route path="/not-found" component={NotFound} />

          <Redirect to="/not-found" />
        </Switch>
        {/* <Movies /> */}
      </main>
    </React.Fragment>
  );
}

export default App;
