import { ICriterion } from "./i-criterion";
import { IMaterial } from "./i-material";

export class CriterionMetamorphic implements ICriterion {
  readonly group: string = 'metamorphic';
  readonly texture?: string = 'vitreous';
  readonly grainSize?: string[] = ['medium', 'fine'];

  matches(rock: IMaterial): boolean {
    return rock.group == this.group && rock.texture == this.texture && rock.grainSize in this.grainSize!!;
  }
}
