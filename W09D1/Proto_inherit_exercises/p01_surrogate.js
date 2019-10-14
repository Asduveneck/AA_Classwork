function Surrogate(){}
Surrogate(Surrogate.prototype = SuperClass.prototype);
Subclass.prototype = new Surrogate();
Subclass.prototype.constructor = Subclass;

//inherits(subclass)
Function.prototype.inherits = function(superClass) {
  function Surrogate(){}
  Surrogate(Surrogate.prototype = superClass.prototype);
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};