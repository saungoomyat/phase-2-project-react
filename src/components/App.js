import React from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import DogList from "./DogList";
import DogDetail from "./DogDetail";
import NewDog from "./NewDog";

function App() {
    
    return (
        <div>
            <NavBar />
            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route exact path="/dogs">
                    <DogList />
                </Route>
                <Route path="/dogs/new">
                    <NewDog />
                </Route>
                <Route path="/dogs/:id">
                    <DogDetail />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="*">
                    <h1>404 not found</h1>
                </Route>
            </Switch>
        </div>
    );
}

export default App;
