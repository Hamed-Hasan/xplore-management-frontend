export interface iServices {
  id: string;
  title: string;
  day: number;
  age: number;
  how_month: string[];
  availability: number;
  departure: string;
  departureTime: string;
  returnTime: string;
  included: string[];
  notIncluded: string[];
  lat: string;
  long: string;
  description: string;
  image: string;
  price: number;
  availabilityType: string;
  location: string;
  createdAt: string;
  updatedAt: string;
  review: any[];
  category: string;
}

export interface iDebounced {
  searchQuery: string;
  delay: number;
}
