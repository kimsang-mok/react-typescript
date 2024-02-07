interface PersonListProps {
  names: {
    first: string;
    last: string;
  }[];
}

function PersonList(props: PersonListProps) {
  return (
    <div>
      {props.names.map((name) => (
        <h2>
          {name.first} {name.last}
        </h2>
      ))}
    </div>
  );
}

export default PersonList;
