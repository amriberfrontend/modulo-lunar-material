import { IPilot } from "./i-pilot";

export class Astronaut implements IPilot {
  id: string;
  name: string;
  age: number;
  constructor(id: string, name: string, age: number) {
    this.id = id;
    this.name = name;
    this.age = age;
  }
}
