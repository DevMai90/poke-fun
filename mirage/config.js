export default function () {
  // Only provide data if API request hits this URL. Think of it as a base route.
  this.namespace = '/api/v2';

  // Using 4 ID for now. Real API returns one Pokemon only.
  this.get('/pokemon/4', () => {
    return {
      data: [
        {
          form_name: '',
          form_names: [],
          form_order: 1,
          id: 4,
          is_battle_only: false,
          is_default: true,
          is_mega: false,
          name: 'charmander',
          names: [],
          order: 5,
          pokemon: {
            name: 'charmander',
            url: 'https://pokeapi.co/api/v2/pokemon/4/'
          },
          sprites: {
            back_default:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png',
            back_shiny:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/4.png',
            front_default:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
            front_shiny:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/4.png'
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/'
          }
        },
        {
          form_name: '',
          form_names: [],
          form_order: 1,
          id: 5,
          is_battle_only: false,
          is_default: true,
          is_mega: false,
          name: 'charmeleon',
          names: [],
          order: 6,
          pokemon: {
            name: 'charmeleon',
            url: 'https://pokeapi.co/api/v2/pokemon/5/'
          },
          sprites: {
            back_default:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/5.png',
            back_shiny:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/5.png',
            front_default:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png',
            front_shiny:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/5.png'
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/'
          }
        },
        {
          form_name: '',
          form_names: [],
          form_order: 1,
          id: 6,
          is_battle_only: false,
          is_default: true,
          is_mega: false,
          name: 'charizard',
          names: [],
          order: 7,
          pokemon: {
            name: 'charizard',
            url: 'https://pokeapi.co/api/v2/pokemon/6/'
          },
          sprites: {
            back_default:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/6.png',
            back_shiny:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/6.png',
            front_default:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
            front_shiny:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/6.png'
          },
          version_group: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/'
          }
        }
      ]
    };
  });
}
