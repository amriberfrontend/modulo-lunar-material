import { ICriterion } from "./i-criterion";
import { IMaterial } from "./i-material";

export class CriterionIgneous implements ICriterion {
  readonly group: string = 'igneous';
  readonly grainSize?: string[] = ['veryCoarse'];

  matches(rock: IMaterial): boolean {
    return rock.group == this.group && rock.grainSize in this.grainSize!!;
  }
}
