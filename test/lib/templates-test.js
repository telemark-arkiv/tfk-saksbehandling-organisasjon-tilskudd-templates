'use strict'

const tap = require('tap')
const templates = require('../../templates/templates.json')

tap.equal(Object.keys(templates).length, 3, 'There are 3 different templates')

tap.ok(templates['mottatt-folkehelse'], 'There is a template for mottatt-folkehelse')

tap.ok(templates['mottatt-kultur'], 'There is a template for mottatt-kultur')

tap.ok(templates['soknad'], 'There is a template for soknad')
