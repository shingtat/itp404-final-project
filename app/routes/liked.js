import Route from '@ember/routing/route';

export default Route.extend({
  title: "Liked Page!",
  model() {
    return this.store.findAll('recipe');
  }
});
