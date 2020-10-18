/**
 * @param - String
 * Capitalizes the first letter
 * TODO - Capitalize hyphenated Pokemon names
 */
export default (pokemon) => {
  return pokemon[0].toUpperCase() + pokemon.slice(1);
}