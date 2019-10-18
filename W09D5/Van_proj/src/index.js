const DOMNodeCollection = require('./dom_node_collection');

document.addEventListener("DOMContentLoaded", () => {
  let $div = $1('div');
  // console.log($div);
  $div.children();
  
});

const $1 = function (arg) { 
  if (typeof arg === "string" || arg instanceof String) {
    let tempArr = Array.from(document.querySelectorAll(arg));
    return new DOMNodeCollection(tempArr);
  } else if(arg instanceof HTMLElement) {
    return new DOMNodeCollection(Array.from(arg));
  }
}; 

window.$1 = $1; 
