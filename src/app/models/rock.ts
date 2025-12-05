import { IMaterial } from "./i-material";

export class Rock implements IMaterial {
  id: string;
  name: string;
  group: string;
  grainSize: string;
  texture: string;
  hardness: number | undefined;
  utility: string | undefined;
  crystalSize: number | undefined;
  formingTemperature: number | undefined;
  structure: string | undefined;
  grainShape: string | undefined;

  constructor(
    options: {
      id?: string;
      name?: string;
      group?: string;
      grainSize?: string;
      texture?: string;
      hardness?: number;
      utility?: string;
      crystalSize?: number;
      formingTemperature?: number;
      structure?: string;
      grainShape?: string;
    } = {},
  ) {
    this.id = options.id || "";
    this.name = options.name || "";
    this.group = options.group || "";
    this.grainSize = options.grainSize || "";
    this.texture = options.texture || "";
    this.hardness = options.hardness;
    this.utility = options.utility;
    this.crystalSize = options.crystalSize;
    this.formingTemperature = options.formingTemperature;
    this.structure = options.structure;
    this.grainShape = options.grainShape;
  }
}
