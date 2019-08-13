# Regeng-js (WIP)

[![npm version](https://badge.fury.io/js/regeng.svg)](https://badge.fury.io/js/regeng)
[![Build Status](https://travis-ci.com/LucHighwalker/regeng-js.svg?branch=master)](https://travis-ci.com/LucHighwalker/regeng-js)

Regeng or regular english, is a npm package which aims to allow the generation of regular expressions using plain english. This is a javascript port of my [ruby gem](https://rubygems.org/gems/regeng) of the same name.

## Installation

    npm install regeng

## Usage

```js
const Regeng = require 'regeng';

const reg = new Regeng('any letter between e and z');

console.log(reg.plain)
// any letter between e and z

console.log(reg.re)
// /[e-z]/
```

More examples in the [Documentation](https://luchighwalker.github.io/regeng-js/)

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/LucHighwalker/regeng-js.

## License

This package is available as open source under the terms of the [MIT License](/docs/license.md).
