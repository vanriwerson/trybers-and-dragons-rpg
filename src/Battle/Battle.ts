import Character from '../Character';
import Fighter from '../Fighter';

abstract class Battle {
  constructor(protected player: Fighter | Character) { }

  // Should return 1 if player wins, -1 otherwise
  fight(): number {
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}

export default Battle;
