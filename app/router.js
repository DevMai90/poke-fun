import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('home', { path: '/ ' });
  this.route('about', { path: '/boogers' }); // Tells Ember router to run about.js route file. Also renders the about hbs file
  this.route('contact', { path: '/contact' });
  this.route('pokemon', { path: '/digimon' });
  this.route('generations', { path: '/generations' });
  this.route('games', { path: 'games' });
  this.route('search', { path: '/search' });
  this.route('pokedex', { path: '/pokedex' });
});

export default Router;
