Blockly.Blocks['block_insert'] = {
    init: function () {
        this.appendValueInput("table")
            .setCheck("table")
            .appendField("INSERT INTO");
        this.appendStatementInput("column")
            .setCheck("column");
        this.appendStatementInput("value")
            .setCheck("value")
            .appendField("VALUES");
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};