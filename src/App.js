import React from "react";
import "./App.css";
import Movies from "./components/movies";
import { Route } from "react-router-dom";
import Test from "./components/test";

function App() {
  return (
    <main className="container">
      <Route exact path="/test" component={Test} />
      <Route path="/" component={Movies} />

      {/* <Movies /> */}
    </main>
  );
}

export default App;
