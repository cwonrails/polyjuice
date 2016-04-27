/**
 * @fileoverview Tests for `no-with` (ESLint) translation
 * @author Breno Lima de Freitas <https://breno.io>
 * @copyright 2016 Breno Lima de Freitas. All rights reserved.
 * See LICENSE file in root directory for full license.
 */

'use strict'

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var lib = require('../../../lib/dictionaries/eslint/no-with.js')

var getFn = caller(lib)

describe('eslint#no-with', function() {
  it('converts the rule correctly', function() {
    var fn = getFn()
    var fnContext = getFn(['x'])

    expect(fn()).to.eql(['with'])
    expect(fnContext()).to.eql(['x', 'with'])
  })
})