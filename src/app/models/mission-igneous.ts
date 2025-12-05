import { CriterionIgneous } from "./criterion-igneous";
import { ICriterion } from "./i-criterion";
import { IMaterial } from "./i-material";
import { IMission } from "./i-mission";
import { IPilot } from "./i-pilot";

export class MissionIgneous implements IMission {
  pilot: IPilot;
  criterion: ICriterion;
  rocks: IMaterial[];
  constructor(pilot: IPilot) {
    this.pilot = pilot;
    this.criterion = new CriterionIgneous();
    this.rocks = [];
  }
  matchesCriterion(rock: IMaterial): boolean {
    throw new Error("Method not implemented.");
  }
}
