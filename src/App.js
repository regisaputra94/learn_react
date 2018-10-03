/* global React ReactDOM */
import React from "react";
import { render } from "react-dom";
import pf from "petfinder-client";
import Pet from "./Pet";

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

// FUNCTION
// const App = () => {
//     return React.createElement("div", {}, [
//         React.createElement("h1", {}, "Adopt Me!"),
//         React.createElement(Pet, {
//             name : "Luna",
//             animal : "Dog",
//             breed : "Husky"
//         }),
//         React.createElement(Pet, {
//             name : "Tar",
//             animal : "Cat",
//             breed : "Mixed"
//         }),
//         React.createElement(Pet, {
//             name : "Cocktail",
//             animal : "Bird",
//             breed : "Papper"
//         })
//     ])
// }

//CLASS Function
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pets: []
    };
  }
  componentDidMount() {
    // const promise = petfinder.breed.list({ animal: "dog" });

    // promise.then(console.log, console.error);

    petfinder.pet.find({ output: "full", location: "Seattle, WA" });
  }

  handleTittleClick() {
    alert("you click this tittle!");
  }

  render() {
    //JSX more than simple
    return (
      <div>
        <h1 onClick={this.handleTittleClick}>Addopt Me!</h1>
        <Pet name="Luna" animal="Dog" breed="Husky" />
        <Pet name="Tar" animal="Cat" breed="Mixed" />
        <Pet name="Papper" animal="Bird" breed="Parrot" />
      </div>
    );
  }
}

render(React.createElement(App), document.getElementById("root"));
