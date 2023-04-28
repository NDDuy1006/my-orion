import BaseType from './base';

interface Booker extends BaseType {
  first_name: string;
  last_name: string;
  email: string;
  phone: number;
  location: string;
  birth_date: Date;
  birth_place: string;
}

export default Booker;
