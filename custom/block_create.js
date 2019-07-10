Blockly.Blocks['block_create'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("CREATE TABLE")
            .appendField(new Blockly.FieldTextInput("tablename"), "tablename");
        this.appendStatementInput("columndefinitions")
            .setCheck("columndefinition");
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};