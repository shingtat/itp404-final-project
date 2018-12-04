import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('recipe', {path: '/recipes/:id'});
  this.route('create', { path: '/recipes/new' });
  this.route('edit', { path: '/recipes/:id/edit' });
  this.route('loading');
  this.route('404');
  this.route('error');
  this.route('liked');
});

export default Router;
