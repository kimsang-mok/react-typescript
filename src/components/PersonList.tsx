import { Name } from "./Person.type";

interface PersonListProps {
  names: Name[];
}

function PersonList(props: PersonListProps) {
  return (
    <div>
      {props.names.map((name) => (
        <h2 key={name.first + name.last}>
          {name.first} {name.last}
        </h2>
      ))}
    </div>
  );
}

export default PersonList;
