Blockly.SQL['data_boolean'] = function(block) {
    return code;
};

Blockly.SQL['data_boolean_statement'] = function(block) {
    return code;
};

Blockly.SQL['data_string'] = function(block) {
    var code = "";
    code += block.getFieldValue('string');
    return [code, Blockly.SQL.ORDER_ATOMIC];
};

Blockly.SQL['data_string_statement'] = function(block) {
    var code = "";
    code += block.getFieldValue('string') + ",";
    return code;
};

Blockly.SQL['data_number'] = function(block) {
    return code;
};

Blockly.SQL['data_number_statement'] = function(block) {
    return code;
};

Blockly.SQL['data_date'] = function(block) {
    return code;
};

Blockly.SQL['data_date_statement'] = function(block) {
    return code;
};

Blockly.SQL['data_datetime'] = function(block) {
    return code;
};

Blockly.SQL['data_datetime_statement'] = function(block) {
    return code;
};