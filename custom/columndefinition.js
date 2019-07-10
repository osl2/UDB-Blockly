Blockly.Blocks['columndefinition'] = {
    init: function () {
        this.appendValueInput("column")
            .setCheck("columntype")
            .appendField(new Blockly.FieldTextInput("columnname"), "colname");
        this.appendDummyInput()
            .appendField("PRIMARY KEY")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "primkey")
            .appendField("AUTOINCREMENT")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "autoincrement");
        this.appendDummyInput()
            .appendField("NOT NULL")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "null");
        this.appendDummyInput()
            .appendField("UNIQUE")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "unique");
        this.appendValueInput("def")
            .setCheck("value")
            .appendField("DEFAULT")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "default");
        this.setPreviousStatement(true, "columndefinition");
        this.setNextStatement(true, "columndefinition");
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['columndefinition_type'] = {
    init: function () {
        this.appendDummyInput('input')
            .appendField(new Blockly.FieldDropdown([["INTEGER", "integer"], ["DOUBLE", "double"], ["FLOAT", "float"], ["BOOLEAN", "boolean"], ["DATE", "date"], ["DATETIME", "datetime"], ["VARCHAR", "varchar"]]), "TYPE");
        this.setOutput(true, "columntype");
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};