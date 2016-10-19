'use strict'

const path = require('path')
const templates = require('./templates/templates.json')

module.exports = (id) => {
  if (!id) {
    throw new Error('Missing required input: template id')
  }

  const doc = templates[id]

  if (!doc) {
    throw new Error('Template not found')
  } else {
    return path.join(__dirname, 'templates', doc)
  }
}
