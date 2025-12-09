import { IMaterial } from "./i-material";

export interface ICriterion {
  group: string;
  texture?: string;
  grainSize?: string[];

  matches(rock: IMaterial): boolean;
}
