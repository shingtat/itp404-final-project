import Route from '@ember/routing/route';

export default Route.extend({
  title: "Index Page!",
  model() {
    return this.store.findAll('recipe');
  }
});
