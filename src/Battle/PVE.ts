import Character from '../Character';
import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    private _hero: Fighter | Character,
    private _enemies: SimpleFighter[],
  ) {
    super(_hero);
  }

  public fight(): number {
    this._enemies.forEach((enemy) => {
      while (this._hero.lifePoints !== -1 && enemy.lifePoints !== -1) {
        this._hero.attack(enemy);
        enemy.attack(this._hero);
      }
    });
    
    return super.fight();
  }
}