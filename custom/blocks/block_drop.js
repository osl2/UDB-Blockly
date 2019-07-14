Blockly.Blocks['block_drop'] = {
    init: function () {
        this.appendValueInput("TABLE")
            .setCheck("table")
            .appendField("DROP TABLE");
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};