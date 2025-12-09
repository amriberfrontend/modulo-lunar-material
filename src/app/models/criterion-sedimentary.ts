import { ICriterion } from "./i-criterion";
import { IMaterial } from "./i-material";

export class CriterionSedimentary implements ICriterion {
  readonly group: string = 'sedimentary';
  readonly texture?: string = 'phaneritic';
  
  matches(rock: IMaterial): boolean {
    return rock.group == this.group && rock.texture == this.texture;
  }
}
