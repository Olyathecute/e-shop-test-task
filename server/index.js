const path = require('path')

console.log(__dirname)
require('@babel/register')({
  configFile: path.resolve(__dirname, '../babel.config.js')
})

require('./express.js')
