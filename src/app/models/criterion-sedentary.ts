import { ICriterion } from "./i-criterion";
import { IMaterial } from "./i-material";

export class CriterionSedentary implements ICriterion {
  group: "igneous" | "metamorphic" | "sedentary";
  texture?: "vitreous" | "phaneritic" | "aphanitic" | undefined;

  constructor() {
    this.group = "sedentary";
    this.texture = "phaneritic";
  }
  matches(rock: IMaterial): boolean {
    return rock.group == this.group && rock.texture == this.texture;
  }
}
