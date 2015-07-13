function Animal(name, age, kind, awake){
  this.name = name;
  this.age = age;
  this.kind = kind;
  this.awake = false;
}

Animal.prototype.oink = function(){
  if (this.kind === 'pig') {
    return 'oink';
  } else {
    return 'HEY, I am not a pig!';
  }
};

Animal.prototype.growUp = function () {
  this.age++;
  return this.age;
};


module.exports=Animal;
