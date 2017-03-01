let domain;

let setDomain = function(name) {
  this.domain = name;
  console.log('current domain is set: ', domain);
};

let getDomain = function() {
  return this.domain;
};

module.exports = {
  setDomain,
  getDomain
};
