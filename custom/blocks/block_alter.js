Blockly.Blocks['block_alter'] = {
    init: function () {
        this.appendValueInput("table")
            .setCheck("table")
            .appendField("ALTER TABLE");
        this.appendStatementInput("modifier")
            .setCheck(null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['alter_rename_to'] = {
    init: function () {
        this.appendValueInput("renameto")
            .setCheck(null)
            .appendField("RENAME TO")
            .appendField(new Blockly.FieldTextInput("new_tablename"), "newname");
        this.setPreviousStatement(true, "altermodifier");
        this.setNextStatement(true, "altermodifier");
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['alter_rename_column'] = {
    init: function () {
        this.appendValueInput("column")
            .setCheck("column")
            .appendField("RENAME COLUMN");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("TO")
            .appendField(new Blockly.FieldTextInput("new_columnname"), "newcolumnname");
        this.setInputsInline(false);
        this.setPreviousStatement(true, "altermodifier");
        this.setNextStatement(true, "altermodifier");
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['alter_add_column'] = {
    init: function () {
        this.appendStatementInput("columndefinition")
            .setCheck("columndefinition")
            .appendField("ADD COLUMN");
        this.setInputsInline(false);
        this.setPreviousStatement(true, "altermodifier");
        this.setNextStatement(true, "altermodifier");
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};