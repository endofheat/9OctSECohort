import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PropsDisplayer from "./components/PropsDisplayer";
import City from "./components/City";
import Address from "./components/Address";
import FullName from "./components/FullName";
import ComplexComment from "./components/ComplexComment";
import Comment from "./components/Comment";
import Callout from "./components/Callout";
import FancyBox from "./components/FancyBox";
import MoviesList from "./components/MovieList";
import MoodChanger from "./components/MoodChanger";
import Greeting from "./components/Greeting";
import BigCats from "./components/BigCats";

function ExampleComponent() {
  return (
    <div className="ExampleComponent componentBox">
      <h1>Example Component</h1>
      <h3
        style={{
          color: "blue",
          textTransform: "uppercase",
          fontStyle: "italic",
          textDecoration: "underline",
        }}
      >
        Welcome.{" "}
      </h3>
      <p>React component.</p>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);

  const h3Styles = { color: "red", fontSize: "2em", marginBottom: "0.5em" };

  const spiderman = {
    name: "Spiderman",
    alterEgo: "Peter Parker",
    catchPhrase: "With great power comes great responsibility",
  };

  const spideyJSX = (
    <>
      <h3 style={h3Styles}>{spiderman.name}</h3>
      <blockquote>{spiderman.catchPhrase}</blockquote>
      <cite>{spiderman.alterEgo}</cite>
    </>
  );

  const comment = {
    date: new Date(),
    text: "I hope you enjoy learning React!",
    author: {
      // author is also an object
      name: "Hello Kitty",
      avatarUrl: "https://placekitten.com/g/64/64",
    },
  };

  return (
    <>
      <ExampleComponent name="Akira" />
      <FullName first="Akira" middle=" " last="Li" />
      <ComplexComment
        author={comment.author}
        date={comment.date}
        text={comment.text}
      />
      <Comment
        author={comment.author}
        date={comment.date}
        text={comment.text}
      />
      <City name="Auckland">
        <h4>
          Auckland is great but the cost of living is{" "}
          <strong>too expensive</strong>
        </h4>
      </City>
      <City name="Auckland" state="AKL" />
      <City name="Chicago" state="Illinois" country="USA" />
      <City name="Newcastle">
        <div>
          Newcastle is a harbour city in the Australian state of New South
          Wales.
        </div>
        <div>
          <strong>Population:</strong> 322,278 (2016)
        </div>
      </City>
      <Address
        street="Nowhere"
        suburb="Somewhere"
        state="AKL"
        postcode="1010"
      />
      <PropsDisplayer />
      <PropsDisplayer
        name="Akira Li"
        address={{ suburb: "Guess", state: "AKL", postcode: 1010 }}
        children={["Sascha", "DinoBear", "If plush toys counted"]}
      />
      <PropsDisplayer
        name={spiderman.name}
        alterEgo={spiderman.alterEgo}
        catchPhrase={spiderman.catchPhrase}
        buttonCount={count}
      />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 10)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR okay, I'm doing
          that. But let me test one more thing. ha, interesting.
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Callout
        title="Nested React Component"
        message="Simple message with a fancy box applied via composition"
      >
      <FullName first="Elon" last="Musk" />
      </Callout>
      <FancyBox>
        <ExampleComponent name="Akira" />
      </FancyBox>
      <ExampleComponent name="Akira" />
      <div className="MoviesList componentBox">
        <MoviesList></MoviesList>
      </div>
      <MoodChanger></MoodChanger>
      <Greeting>
        <div>Bye, world.  </div>
      </Greeting>
      <Greeting name="Akira">
        <div>Have a nice day. </div>
      </Greeting>
      <div className="BigCats componentBox">
        <BigCats></BigCats>
      </div>
    </>
  );
}

export default App;
