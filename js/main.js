import React from "react";
import ReactDOM from "react-dom";
import ExampleWork from "./example-work";

const myWork = [
  {
    title: "Noob Board",
    href: "https://noob-board.herokuapp.com",
    desc:
      "A community for new developers to ask and answer questions, share ideas, and help each other out. Post your problem, comment a solution, and favourite helpful posts.",
    image: {
      desc: "Noob Board",
      src: "images/noob-board.png",
      comment: ""
    }
  },
  {
    title: "Events Tracker",
    href: "https://charmata.github.io/events-tracker",
    desc: "This application lets you search for events in major North American cities.",
    image: {
      desc: "Events Tracker",
      src: "images/events-tracker.png",
      comment: ""
    }
  },
  {
    title: "Moviepedia",
    href: "https://moviepedia-1.herokuapp.com",
    desc: "Review and explore movies.",
    image: {
      desc: "Moviepedia search page",
      src: "images/moviepedia.png",
      comment: ""
    }
  }
];
ReactDOM.render(<ExampleWork work={myWork} />, document.getElementById("example-work"));
