import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";
import Button from "./components/Button";
import { Container } from "./components/Container";
import User from "./components/state/User";
import Counter from "./components/state/Counter";

function App() {
  const personName = {
    first: "Bruce",
    last: "Wayne",
  };

  const nameList = [
    {
      first: "Bruce",
      last: "Wayne",
    },
    {
      first: "Clark",
      last: "Kent",
    },
    {
      first: "Princess",
      last: "Diana",
    },
  ];

  return (
    <>
      <div>
        <Greet name="Kimsang" messageCount={20} isLogin={false} />
        <Person name={personName} />
        <PersonList names={nameList} />
        <Status status="success" />
        <Heading>Placeholder text</Heading>
        <Oscar>
          <Heading>Oscar goes to Leonardo Dicpario!</Heading>
        </Oscar>
        <Greet name="Kim" isLogin={true} />
        <Button
          handleClick={(event, id) => console.log("Button clicked", event, id)}
        />
        <Container
          styles={{
            border: "1px solid black",
            padding: "1rem",
          }}
        />
        <User />
        <Counter />
      </div>
    </>
  );
}

export default App;
