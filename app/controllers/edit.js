import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
    editRecipe(recipe, event) {
      event.preventDefault();

      recipe.save().then(() => {
        this.transitionToRoute('recipe', recipe.id);
      });
    }
  }
});
