import DS from 'ember-data';

export default DS.Model.extend({
  creator: DS.attr('string'),
  country: DS.attr('string'),  
  title: DS.attr('string'),
  ingredients: DS.attr('string'),
  steps: DS.attr('string'),
  image: DS.attr('string'),
});
