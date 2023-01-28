import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";

function App() {
  const personName = {
    first: "Ugochukwu",
    last: "Olise",
  };

  const nameList = [
    { first: "Mike", last: "Spence" },
    { first: "Tom", last: "Hanks" },
    { first: "Reel", last: "Fernandez" },
  ];
  return (
    <div className="App">
      <Greet name="Josiah" messageCount={1} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
    </div>
  );
}

export default App;
