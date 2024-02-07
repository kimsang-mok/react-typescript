interface PersonProps {
  name: {
    firstName: string;
    lastName: string;
  };
}

function Person(props: PersonProps) {
  return (
    <div>
      {props.name.firstName} {props.name.lastName}
    </div>
  );
}

export default Person;
