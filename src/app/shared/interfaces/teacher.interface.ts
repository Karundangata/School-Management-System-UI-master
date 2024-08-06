export interface Teacher {
  id: string;
  first_name: string;
  last_name: string;
  date_of_birth: string;
  gender: string;
  address: string;
  phone_number: string;
  qualification: string;
}

export interface TeachersResponse {
  data: Teacher[];
}
