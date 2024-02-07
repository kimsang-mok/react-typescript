export interface Name {
  first: string;
  last: string;
}

export interface PersonProps {
  name: Name;
}

export interface BirthInfoProps {
  dateOfBirth?: Date;
  birthPlace?: string;
}

export interface EthnicityProps {
  gender?: string;
  race?: string;
}
