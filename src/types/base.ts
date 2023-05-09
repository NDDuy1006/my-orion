import Booker from './booker';

interface BaseType {
  id: string;
  arrival?: string;
  departure?: string;
  adults?: number;
  children?: number;
  primary_guest?: Booker;
}

export default BaseType;

export interface BaseResponseType<T> {
  success: boolean;
  code: number;
  message: string;
  errors: string[];
  data: T[];
}
