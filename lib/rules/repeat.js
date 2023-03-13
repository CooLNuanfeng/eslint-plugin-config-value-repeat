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
                let node = properties[i]
                let nodeVal = node.value
                let nodeKey = node.key

                if(nodeVal.type === 'ObjectExpression'){
                    let propNode = nodeVal.properties
                    if(propNode){
                        checkRepateValue(propNode)
                    }
                }else if(nodeVal.type === 'ArrayExpression'){
                    let eles = nodeVal.elements
                    eles.forEach(node => {
                        checkRepateValue(node.properties)
                    });
                }else if(nodeVal.type === 'Literal' && !valueSet.has(nodeVal.value)){
                    valueSet.add(nodeVal.value)
                }else if(valueSet.has(nodeVal.value)){
                    context.report({
                        node,
                        messageId: 'avoidMethod',
                        data: {
                            key: nodeKey.name || nodeKey.value
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
