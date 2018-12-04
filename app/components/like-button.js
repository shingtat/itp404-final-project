import Component from '@ember/component';
import { computed } from '@ember/object';


export default Component.extend({
  tagName: 'span',
  init(){
    this._super(...arguments);
  },
  click(){
    this.set('like', !this.like);
  },
  source: computed('like', function(){
    let string = '/assets/images/';
    if(this.like){
      string+="like-filled.png";
    }
    else{
      string+="like-transparent.png";
    }
    return string;
  })
});
