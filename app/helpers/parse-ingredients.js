import { helper } from '@ember/component/helper';

export function parseIngredients(params/*, hash*/) {
  if(params[0].length===0){
    return "";
  }
  var beginIndex = 0;
  var ul = document.createElement("ul");
  for(var i = 0; i < params[0].length; i++){
    if(params[0][i]==','){
      var li = document.createElement("li");
      li.innerHTML = params[0].substring(beginIndex,i);
      ul.appendChild(li);
      beginIndex = i+1;
    }
  }
  var li = document.createElement("li");
  li.innerHTML = params[0].substring(beginIndex, params[0].length);
  ul.appendChild(li);
  return ul;
}

export default helper(parseIngredients);
