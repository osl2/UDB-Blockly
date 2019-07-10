Blockly.Blocks['cond_block'] = {
    init: function () {
        this.appendValueInput("column")
            .setCheck(["column", "literal"]);
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["=", "1"], ["<>", "2"], [">", "3"], ["<", "4"], [">=", "5"], ["<=", "6"], ["LIKE", "7"], ["IN", "8"]]), "NAME");
        this.appendValueInput("value")
            .setCheck(["column", "literal"]);
        this.setInputsInline(false);
        this.setPreviousStatement(true, ["conditionstart", "and", "or", "not"]);
        this.setNextStatement(true, "condition");
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['cond_not'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("NOT");
        this.setPreviousStatement(true, "conditionstart");
        this.setNextStatement(true, "not");
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['cond_or'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("OR");
        this.setPreviousStatement(true, "condition");
        this.setNextStatement(true, "or");
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['cond_and'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("AND");
        this.setPreviousStatement(true, "condition");
        this.setNextStatement(true, "and");
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};