import './App.css';
import PersonCard from "./components/PersonCard";

function App() {
  return (
    <div className="App">
      <PersonCard
        lastName={"Greeley"}
        firstName={"Blake"}
        age={26}
        hair={"brown"}
      />

      <PersonCard
        lastName={"Greeley"}
        firstName={"Madi"}
        age={22}
        hair={"red"}
      />
    </div>
  );
}

export default App;
