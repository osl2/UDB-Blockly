Blockly.Blocks['data_boolean'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["true", "TRUE"], ["false", "FALSE"]]), "BOOLEAN");
        this.setOutput(true, ["boolean", "value"]);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['data_boolean_statement'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["true", "TRUE"], ["false", "FALSE"]]), "BOOLEAN");
        this.setPreviousStatement(true, ["boolean", "value"]);
        this.setNextStatement(true, ["boolean", "value"]);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['data_string'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldTextInput("value"), "string");
        this.setOutput(true, ["string", "value"]);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['data_string_statement'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldTextInput("value"), "string");
        this.setPreviousStatement(true, ["string", "value"]);
        this.setNextStatement(true, ["string", "value"]);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['data_number'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldTextInput("0"), "number");
        this.setOutput(true, ["number", "value"]);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['data_number_statement'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldTextInput("0"), "number");
        this.setPreviousStatement(true, ["number", "value"]);
        this.setNextStatement(true, ["number", "value"]);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['data_date'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldNumber(1, 1, 31, 1), "day")
            .appendField(".")
            .appendField(new Blockly.FieldNumber(1, 1, 12), "month")
            .appendField(".")
            .appendField(new Blockly.FieldNumber(2019, -9999, 9999, 1), "year");
        this.setOutput(true, ["number", "value"]);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['data_date_statement'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldNumber(1, 1, 31, 1), "day")
            .appendField(".")
            .appendField(new Blockly.FieldNumber(1, 1, 12), "month")
            .appendField(".")
            .appendField(new Blockly.FieldNumber(2019, -9999, 9999, 1), "year");
        this.setPreviousStatement(true, ["number", "value"]);
        this.setNextStatement(true, ["number", "value"]);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['data_datetime'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldNumber(1, 1, 31, 1), "day")
            .appendField(".")
            .appendField(new Blockly.FieldNumber(1, 1, 12), "month")
            .appendField(".")
            .appendField(new Blockly.FieldNumber(2019, -9999, 9999, 1), "year")
            .appendField(" - ")
            .appendField(new Blockly.FieldNumber(1, 1, 31, 1), "hour")
            .appendField(":")
            .appendField(new Blockly.FieldNumber(1, 1, 31, 1), "minute");
        this.setOutput(true, ["number", "value"]);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['data_datetime_statement'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldNumber(1, 1, 31, 1), "day")
            .appendField(".")
            .appendField(new Blockly.FieldNumber(1, 1, 12), "month")
            .appendField(".")
            .appendField(new Blockly.FieldNumber(2019, -9999, 9999, 1), "year")
            .appendField(" - ")
            .appendField(new Blockly.FieldNumber(1, 1, 31, 1), "hour")
            .appendField(":")
            .appendField(new Blockly.FieldNumber(1, 1, 31, 1), "minute");
        this.setPreviousStatement(true, ["number", "value"]);
        this.setNextStatement(true, ["number", "value"]);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};