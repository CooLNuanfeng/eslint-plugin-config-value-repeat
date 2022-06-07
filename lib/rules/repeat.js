/**
 * @fileoverview config value repeat
 * @author coolnuanfeng
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: 'suggestion',
        docs: {
            description: "check config value repeat",
            category: "Fill me in",
            recommended: false
        },
        schema: [
            // fill in your schema
        ],
        // 报错信息描述
        messages: {
            avoidMethod: "The value of the configuration '{{key}}' already exists, the configuration is repeated",
        },
    },

    create: function(context) {
        
        // variables should be defined here

        // any helper functions should go here or else delete this section
        function checkRepateValue(properties){
            const valueSet = new Set()
            for(let i = 0; i<properties.length; i++){
                if(properties[i].value.type === 'ObjectExpression' || properties[i].value.type === 'ArrayExpression'){
                    if(properties[i].value.properties){
                        checkRepateValue(properties[i].value.properties)
                    }
                }else if(properties[i].value.type === 'Literal' && !valueSet.has(properties[i].value.value)){
                    valueSet.add(properties[i].value.value)
                }else if(valueSet.has(properties[i].value.value)){
                    context.report({
                        node: properties[i],
                        messageId: 'avoidMethod',
                        data: {
                            key: properties[i].key.name || properties[i].key.value
                        },
                    });
                }
            }
        }


        return {
            // give me methods
            'VariableDeclarator ObjectExpression': (node) => {
                // console.log(node)
                checkRepateValue(node.properties)   
            },
            'ExportDefaultDeclaration ObjectExpression': (node) => {
                // console.log(node)
                checkRepateValue(node.properties)   
            },
        };
    }
};
