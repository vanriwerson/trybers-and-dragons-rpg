import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private _energyType: EnergyType;
  static createdInstances = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';

    Necromancer.createdInstances += 1;
  }
  
  public get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return this.createdInstances;
  }
}