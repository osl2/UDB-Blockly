Blockly.Blocks['block_drop'] = {
    init: function () {
        this.appendValueInput("table")
            .setCheck("table")
            .appendField("DROP TABLE");
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};