// Remember to create the keys_prod and keys_dev files in your local installation
if(process.env.NODE_ENV === 'production') {
    module.exports = require('./keys_prod');
} else {
    module.exports = require('./keys_dev');
}