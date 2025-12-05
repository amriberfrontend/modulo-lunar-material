export interface IMaterial {
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

}
