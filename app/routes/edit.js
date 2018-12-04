import Route from '@ember/routing/route';

export default Route.extend({
  title: "Edit Page!",
  model(params) {
    return this.store.findRecord('recipe', params.id);
  }
});
