Blockly.Blocks['block_update'] = {
    init: function () {
        this.appendValueInput("table")
            .setCheck("table")
            .appendField("UPDATE");
        this.appendStatementInput("columntovalue")
            .setCheck("columntovalue")
            .appendField("SET");
        this.appendStatementInput("modifiers")
            .setCheck("updatemodifier");
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['update_where'] = {
    init: function () {
        this.appendStatementInput("condition")
            .setCheck("conditionstart")
            .appendField("WHERE");
        this.setPreviousStatement(true, "updatemodifier");
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['columntovalue'] = {
    init: function () {
        this.appendValueInput("column")
            .setCheck("column");
        this.appendDummyInput()
            .appendField("=");
        this.appendValueInput("value")
            .setCheck("value");
        this.setPreviousStatement(true, "columntovalue");
        this.setNextStatement(true, "columntovalue");
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};