export interface Info {
  count: number;
  pages: number;
  next: number;
  prev: number;
}

export interface Character {
  id: number;
  name: String;
  status: String;
  species: String;
  image: String;
}

export interface Characters {
  info: Info;
  results: [Character];
}
