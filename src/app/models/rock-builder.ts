import { Rock } from "./rock";

export class RockBuilder {
  rock: Rock;
  constructor() {
    this.rock = new Rock();
  }

  setIdentifier(identifier: string): this {
    this.rock.identifier = identifier;
    return this;
  }

  setName(name: string): this {
    this.rock.name = name;
    return this;
  }

  setGroup(group: string): this {
    this.rock.group = group;
    return this;
  }

  setHardness(hardness: number): this {
    this.rock.hardness = hardness;
    return this;
  }

  setGrainSize(grainSize: number): this {
    this.rock.grainSize = grainSize;
    return this;
  }

  setUtility(utility: string): this {
    this.rock.utility = utility;
    return this;
  }

  setCrystalSize(crystalSize: number): this {
    this.rock.crystalSize = crystalSize;
    return this;
  }

  setFormationTemperature(formationTemperature: number): this {
    this.rock.formationTemperature = formationTemperature;
    return this;
  }

  setStructure(structure: string): this {
    this.rock.structure = structure;
    return this;
  }

  setGrainShape(grainShape: string): this {
    this.rock.grainShape = grainShape;
    return this;
  }

  setTexture(texture: string): this {
    this.rock.texture = texture;
    return this;
  }

  build(): Rock {
    return this.rock;
  }


}
