/**
* @fileoverview Translation for `disallowSpacesInGenerator` (JSCS) to ESLint
* @author Breno Lima de Freitas <https://breno.io>
* @copyright 2016 Breno Lima de Freitas. All rights reserved.
* See LICENSE file in root directory for full license.
*/

'use strict'

//------------------------------------------------------------------------------
// Rule Translation Definition
//------------------------------------------------------------------------------

module.exports = {
  name: 'generator-star-spacing',
  truthy: function(__current__, value) {
    var obj = __current__ ? __current__[1] : {}

    if (value.beforeStar) {
      obj.before = false
    }

    if (value.afterStar) {
      obj.after = false
    }

    return [2, obj]
  }
};
