import { IMaterial } from "./i-material";

export class Rock implements IMaterial {
  identifier: string = '';
  name: string = '';
  group: string = '';
  hardness: number = 0;
  grainSize: number = 0;
  utility: string = '';
  crystalSize: number = 0;
  formationTemperature: number = 0;
  structure: string = '';
  grainShape: string = '';
  texture: string = '';

  toString(): string {
    return `${this.identifier}\t ${this.name}\t ${this.group}`;
  }
}
