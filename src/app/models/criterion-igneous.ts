import { ICriterion } from "./i-criterion";
import { IMaterial } from "./i-material";

export class CriterionIgneous implements ICriterion {
  readonly group: "igneous" | "metamorphic" | "sedentary";
  readonly grainSize?: ("veryCoarse" | "coarse" | "medium" | "fine")[] | undefined;

  constructor() {
    this.group = "igneous";
    this.grainSize = ["veryCoarse"];
  }
  matches(rock: IMaterial): boolean {
    return rock.group == this.group && rock.grainSize in this.grainSize!!;
  }
}
