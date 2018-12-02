import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    createRecipe(event) {
      event.preventDefault();

      let recipe = this.store.createRecord('recipe', {
        creator: this.from,
        country: this.to,
        title: this.title,
        ingredients: this.ingredients,
        steps: this.steps,
        image: this.image
      });

      recipe.save().then(() => {
        this.transitionToRoute('index');
      });
    }
  }
});
