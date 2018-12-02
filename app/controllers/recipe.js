import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    deleteRecipe(recipe) {
        recipe.destroyRecord().then(()=>{
          this.transitionToRoute('index');
        });
    }
  }
});
