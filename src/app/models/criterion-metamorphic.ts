import { ICriterion } from "./i-criterion";
import { IMaterial } from "./i-material";

export class CriterionMetamorphic implements ICriterion {
  readonly group: "igneous" | "metamorphic" | "sedentary";
  readonly texture?: "vitreous" | "phaneritic" | "aphanitic" | undefined;
  readonly grainSize?: ("veryCoarse" | "coarse" | "medium" | "fine")[] | undefined;

  constructor() {
    this.group = "metamorphic";
    this.texture = "vitreous";
    this.grainSize = ["medium", "fine"];
  }
  matches(rock: IMaterial): boolean {
    return rock.group == this.group && rock.texture == this.texture && rock.grainSize in this.grainSize!!;
  }
}
