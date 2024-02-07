import { PersonProps, BirthInfoProps, EthnicityProps } from "./Person.type";

// interface ExtendedProps extends PersonProps, EthnicityProps {
//   gender: string;
//   race: string;
// }

function Person(props: PersonProps) {
  return (
    <div>
      {props.name.first} {props.name.last}
    </div>
  );
}

export default Person;
