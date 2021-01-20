const location = {
    alias: 'l',
    desc: 'Location of the place to get weather',
    demand: true
};
const argv = require('yargs')
    .options({ location })
    .argv;


module.exports = {
    argv
};