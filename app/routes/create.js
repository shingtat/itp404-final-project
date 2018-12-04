import Route from '@ember/routing/route';

export default Route.extend({
  title: "Create Page!",
  setupController(controller, model) {
    this._super(controller, model);
    controller.set('creator', '');
    controller.set('country', '');
    controller.set('title', '');
    controller.set('ingredients', '');
    controller.set('steps', '');
    controller.set('image', '');
  }
});
