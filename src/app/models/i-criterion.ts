import { IMaterial } from "./i-material";

export interface ICriterion {
  group: 'igneous' | 'metamorphic' | 'sedentary';
  texture?: 'vitreous' | 'phaneritic' | 'aphanitic';
  grainSize?: ('veryCoarse' | 'coarse' | 'medium' | 'fine')[];

  matches(rock: IMaterial): boolean;
}
