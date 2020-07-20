import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('about', { path: '/boogers' }); // Tells Ember router to run about.js route file. Also renders the about hbs file
  this.route('contact', { path: '/contact' });
  this.route('pokemon', { path: '/digimon' });
});

export default Router;
