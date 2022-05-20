/**
 * @fileoverview config value repeat
 * @author config-value-repeat
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/config-value-repeat"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("config-value-repeat", rule, {

    valid: [

        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: "config value repeat",
            errors: [{
                message: "",
                type: "Me too"
            }]
        }
    ]
});
