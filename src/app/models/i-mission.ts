import { ICriterion } from "./i-criterion";
import { IMaterial } from "./i-material";
import { IPilot } from "./i-pilot";

export interface IMission {
  pilot: IPilot;
  criterion: ICriterion;
  rocks: IMaterial[];

  matchesCriterion(rock: IMaterial): boolean;
}
