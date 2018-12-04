import { helper } from '@ember/component/helper';

export function parseIngredients(params/*, hash*/) {
  if(params[0].length===0){
    return "";
  }
  var beginIndex = 0;
  var ul = document.createElement("ul");
  for(var i = 0; i < params[0].length; i++){
    if(params[0][i]==','){
      var lis = document.createElement("li");
      lis.innerHTML = params[0].substring(beginIndex,i);
      ul.appendChild(lis);
      beginIndex = i+1;
    }
  }
  var list = document.createElement("li");
  list.innerHTML = params[0].substring(beginIndex, params[0].length);
  ul.appendChild(list);
  return ul;
}

export default helper(parseIngredients);
