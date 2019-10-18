class DOMNodeCollection {
  constructor(array) {
    this.nodeList = array;
  }

  html(str) {
    if(str) this.nodeList.forEach(node => node.innerHTML = str); 
    else return this.nodeList[0].innerHTML;
  }

  empty() {
    this.nodeList.forEach(node => node.innerHTML = "");
  }

  append(obj) {
    if (obj instanceof DOMNodeCollection) {
      this.nodeList.forEach( node => {
        obj.forEach( objNode => node.innerHTML += node.outerHTML);
      });
    } else {
      this.nodeList.forEach( node => node.innerHTML += obj);
    }
  }

  addClass(name) {
    this.nodeList.forEach( node => node.className = name);
  }

  removeClass() {
    this.nodeList.forEach( node => node.className = "");
  } 

  children() {
    
    let childrenArr = [];
    
    for (let i = 0; i < this.nodeList.length; i++) {
      let node = this.nodeList[i];
      if (node.childElementCount > 0) {
        console.log(node.children);
        console.log($1(node.children[0]));
        console.log("Child Element Count for UL:")
        console.log(node.children[0].childElementCount);
        console.log(node.children[0].children);
        console.log(node.children[0].children[0]);
        console.log($1(node.children[0].children[0]));


        
        
        // childrenArr = childrenArr.concat()
      }
    }

    // for(let node of this.nodeList) {
    //   let nodeChildren = node.children;
      
    //   if (node.childElementCount === 0) {
    //     childrenArr.push(node);
    //   } else {
    //     for (let nodeChild of nodeChildren) {
    //       let newNode = new DOMNodeCollection(Array.from(nodeChild));
    //       newNode.children();
    //     }
    //     return childrenArr.concat();
    //   }
    // }
    // return childrenArr;
  }

}


module.exports = DOMNodeCollection;
