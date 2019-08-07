Blockly.SQL['cond_block'] = function(block) {
    var code = "";
    var left = Blockly.SQL.valueToCode(block, 'LEFT', Blockly.SQL.ORDER_ATOMIC);
    var operator = block.getFieldValue('OPERATOR');
    var right = "";
    if (block.getFieldValue('OPERATOR') === "IN") {
        if (block.getInputTargetBlock('RIGHT') && block.getInputTargetBlock('RIGHT').type === "block_subselect") {
            var subselect = Blockly.SQL.statementToCode(block, 'RIGHT', Blockly.SQL.ORDER_ATOMIC).trim();
            right += subselect;
        }  else {
            var values = Blockly.SQL.statementToCode(block, 'RIGHT', Blockly.SQL.ORDER_ATOMIC);
            values = values.substring(0, values.length - 1); // Remove last ,
            var valuesArray = createArrayOfString(values, ",");
            var valuelist = generateSeparatedList(valuesArray, "', '");
            right += "('" + valuelist + "')";
        }
    } else if (block.getFieldValue('OPERATOR') === "LIKE") {
        right += "'" + Blockly.SQL.valueToCode(block, 'RIGHT', Blockly.SQL.ORDER_ATOMIC) + "'";
    } else {
        right += Blockly.SQL.valueToCode(block, 'RIGHT', Blockly.SQL.ORDER_ATOMIC);
    }
    code += "(" + left + " " + operator + " " + right + ") ";
    return code;
};

Blockly.SQL['cond_not'] = function(block) {
    var code = "";
    code += "NOT ";
    return code;
};

Blockly.SQL['cond_or'] = function(block) {
    var code = "";
    code += "OR ";
    return code;
};

Blockly.SQL['cond_and'] = function(block) {
    var code = "";
    code += "AND ";
    return code;
};