Blockly.Blocks['cond_block'] = {
    init: function () {
        this.appendValueInput("column")
            .setCheck(["column", "literal"]);
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["=", "1"], ["<>", "2"], [">", "3"], ["<", "4"], [">=", "5"], ["<=", "6"], ["LIKE", "like"], ["IN", "in"]], function (selection) {
                this.sourceBlock_.updateSelection_(selection)
            }), "OPERATOR");
        this.appendValueInput("value")
            .setCheck(["column", "literal"]);
        this.setInputsInline(false);
        this.setPreviousStatement(true, ["conditionstart", "and", "or", "not"]);
        this.setNextStatement(true, "condition");
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    },
    updateSelection_: function (selection) {
        //If LIKE is selected the input on the second needs to be a String.
        //If IN is selected the input on the second needs to be a SELECT Statement or list of values
        if (selection === "like") {
            if (this.getInput("value").type !== Blockly.INPUT_VALUE) {
                this.removeInput("value");
                this.appendValueInput("value")
                    .setCheck("string");
            } else {
                this.getInput("value").setCheck("string");
            }
        } else if (selection === "in") {
            if (this.getInput("value").type === Blockly.INPUT_VALUE) {
                this.removeInput("value");
                this.appendStatementInput("value")
                    .setCheck(["value", "subselect"]);
            }
        } else {
            if (this.getInput("value").type !== Blockly.INPUT_VALUE) {
                this.removeInput("value");
                this.appendValueInput("value")
                    .setCheck(["column", "literal"]);
            }
        }
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