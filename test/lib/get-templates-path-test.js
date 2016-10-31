'use strict'

const tap = require('tap')
const isFile = require('is-file')
const getTemplatePath = require('../../index')

tap.ok(getTemplatePath('soknad'), 'It returns path if template exists')

tap.throws(
  function () {
    getTemplatePath()
  },
  {message: 'Missing required input: template id'},
  'Throws if template id not supplied'
)

tap.throws(
  function () {
    getTemplatePath('finnes-ikke')
  },
  {message: 'Template not found'},
  'Throws if template does not exist'
)

tap.equal(isFile(getTemplatePath('soknad')), true, 'Template for soknad is a file')

tap.equal(isFile(getTemplatePath('mottatt-kultur')), true, 'Template for mottatt.kultur is a file')

tap.equal(isFile(getTemplatePath('mottatt-folkehelse')), true, 'Template for mottatt.folkehelse is a file')

tap.equal(isFile(getTemplatePath('mottatt-idrett')), true, 'Template for mottatt.idrett is a file')
