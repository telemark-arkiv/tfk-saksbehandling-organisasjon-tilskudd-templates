[![Build Status](https://travis-ci.org/telemark/tfk-saksbehandling-organisasjon-tilskudd-templates.svg?branch=master)](https://travis-ci.org/telemark/tfk-saksbehandling-organisasjon-tilskudd-templates)
[![Coverage Status](https://coveralls.io/repos/telemark/tfk-saksbehandling-organisasjon-tilskudd-templates/badge.svg?branch=master&service=github)](https://coveralls.io/github/telemark/tfk-saksbehandling-organisasjon-tilskudd-templates?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
# tfk-saksbehandling-organisasjon-tilskudd-templates

[![Greenkeeper badge](https://badges.greenkeeper.io/telemark/tfk-saksbehandling-organisasjon-tilskudd-templates.svg)](https://greenkeeper.io/)
Templates for tilskudd

Oversikt over alle malene og koder for de ulike ligger [her](docs/templates.md)

## Installasjon

Fra npm

```sh
$ npm i --save tfk-saksbehandling-organisasjon-tilskudd-templates
```

## Bruk
Send inn id på malen du skal benytte og få fullstendig filbane i retur.

Maler
- mottatt kultur
- mottatt folkehelse
- søknad

```JavaScript
'use strict'

const getTemplatePath = require('tfk-saksbehandling-elev-skoleskyss-templates')

console.log(getTemplatePath('soknad'))

//=> path/to/template/soknad.docx
```

## Lisens
[MIT](LICENSE)