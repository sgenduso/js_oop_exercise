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

Animal.prototype.wakeUp = function () {
  this.awake = true;
  return this.awake;
};

Animal.prototype.sleep = function () {
  this.awake = false;
  return this.awake;
};

Animal.prototype.feed = function () {
  if (this.awake === true) {
    return 'NOM NOM NOM';
  } else {
    return 'ZZZZZZ';
  }
};

module.exports=Animal;
