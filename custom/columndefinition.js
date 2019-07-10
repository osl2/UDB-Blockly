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
            .appendField(new Blockly.FieldDropdown([["INTEGER", "integer"], ["DOUBLE", "double"], ["FLOAT", "float"], ["BOOLEAN", "boolean"], ["DATE", "date"], ["DATETIME", "datetime"], ["VARCHAR", "varchar"]], function (selectedType) {
                this.sourceBlock_.updateShape_(selectedType)
            }), "TYPE");
        this.setOutput(true, "columntype");
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    },
    mutationToDom: function () {
        let container = document.createElement('mutation');
        container.setAttribute('type', this.getFieldValue('TYPE'));
        return container;
    },
    domToMutation: function (xmlElement) {
        let value = xmlElement.getAttribute('type');
        this.setFieldValue(value, 'TYPE');
        this.updateShape_(value);
    },
    updateShape_: function (selectedType) {
        //Add or remove field for entry of n in varchar(n)
        let input = this.getInput('input');
        let fieldExists = this.getField('varcharlength');
        if (selectedType === "varchar") {
            if (!fieldExists) {
                input.appendField(new Blockly.FieldNumber(0, 0, Infinity, 1), "varcharlength");
            }
        } else if (fieldExists) {
            //remove it, it is not needed
            input.removeField('varcharlength');
        }
    }
};