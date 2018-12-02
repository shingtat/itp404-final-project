import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  creator(){
    return faker.name.findName();
  },
  country(){
    return faker.address.country();
  },
  title(){
    return faker.name.firstName();
  },
  ingredients(){
    return "eggs, flour, pork, beef";
  },
  steps(){
    return faker.lorem.paragraph();
  },
  image(){
    return faker.image.food();
  }
});
