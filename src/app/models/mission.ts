import { ICriterion } from "./i-criterion";
import { IMaterial } from "./i-material";
import { IMission } from "./i-mission";
import { IPilot } from "./i-pilot";

export class Mission implements IMission {
  pilot: IPilot;
  criterion: ICriterion;
  rocks: IMaterial[];
  constructor(
    pilot: IPilot,
    criterion: ICriterion,
  ) {
    this.pilot = pilot;
    this.criterion = criterion
    this.rocks = [];
  }

  addRock(rock: IMaterial) {
    this.rocks.push(rock);
  }

  matchesCriterion(rock: IMaterial): boolean {
    return this.criterion.matches(rock);
  }

}
