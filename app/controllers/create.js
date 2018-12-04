import Controller from '@ember/controller';
import DS from 'ember-data';

export default Controller.extend({
  saving: false,
  errors: DS.Errors.create(),
  actions: {
    createRecipe(event) {
      this.set('saving', true);
      event.preventDefault();

      let recipe = this.store.createRecord('recipe', {
        creator: this.creator,
        country: this.country,
        title: this.title,
        ingredients: this.ingredients,
        steps: this.steps,
        image: this.image
      });

      if(this.validate(recipe)){
        recipe.save().then(() => {
          this.transitionToRoute('index');
        });
      }
      this.set('saving', false);
    }
  },

  validate: function(recipe){
    this.set('errors', DS.Errors.create());
    if(recipe.creator==='' || recipe.creator===undefined ){
      this.get('errors').add('creator', "creator can't be empty");
    }
    if(recipe.country==='' || recipe.country===undefined ){
      this.get('errors').add('country', "country can't be empty");
    }
    if(recipe.title==='' || recipe.title===undefined ){
      this.get('errors').add('title', "title can't be empty");
    }
    if(recipe.ingredients==='' || recipe.ingredients===undefined ){
      this.get('errors').add('ingredients', "ingredients can't be empty");
    }
    if(recipe.steps==='' || recipe.steps===undefined ){
      this.get('errors').add('steps', "steps can't be empty");
    }
    if(recipe.image==='' || recipe.image===undefined ){
      this.get('errors').add('image', "image can't be empty");
    }
    return this.get('errors.isEmpty');
  }
});
