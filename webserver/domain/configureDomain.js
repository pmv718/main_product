let Domain = require('./Domain');

//  delete require.cache[require.resolve('./intentLexicon.json')];
let configureDomain = function(name) {
    Domain.setDomain(name);
};

module.exports = configureDomain;
