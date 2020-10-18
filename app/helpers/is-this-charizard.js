import { helper } from '@ember/component/helper';

const targetPokemonName = 'Charizard';

export function isThisCharizard([name]) {
  // argument gets passed into array
  if (name === targetPokemonName) return 'ISSA CHARIZARD!!!!!';
  else return 'Is not a Charizard...';
}

export default helper(isThisCharizard);
