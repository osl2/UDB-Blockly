Blockly.Blocks['block_select'] = {
    init: function () {
        this.appendStatementInput("column")
            .setCheck("column")
            .appendField("SELECT");
        this.appendStatementInput("table")
            .setCheck("table")
            .appendField("FROM");
        this.appendStatementInput("modifiers")
            .setCheck("selectmodifier");
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['block_subselect'] = {
    init: function () {
        this.appendStatementInput("column")
            .setCheck("column")
            .appendField("SELECT");
        this.appendStatementInput("table")
            .setCheck("table")
            .appendField("FROM");
        this.appendStatementInput("modifiers")
            .setCheck("selectmodifier");
        this.setPreviousStatement(true, "subselect");
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['select_join'] = {
    init: function () {
        this.appendValueInput("table")
            .setCheck("table")
            .appendField(new Blockly.FieldDropdown([["NATURAL", "natural"], ["LEFT", "left"], ["LEFT OUTER", "leftouter"], ["INNER", "inner"]]), "jointype")
            .appendField("JOIN");
        this.appendValueInput("condtion")
            .setCheck("conditionblock")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("ON");
        this.setPreviousStatement(true, "selectmodifier");
        this.setNextStatement(true, "selectmodifier");
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['select_where'] = {
    init: function () {
        this.appendStatementInput("condition")
            .setCheck("conditionblock")
            .appendField("WHERE");
        this.setPreviousStatement(true, "selectmodifier");
        this.setNextStatement(true, "selectmodifier");
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['select_group'] = {
    init: function () {
        this.appendStatementInput("column")
            .setCheck("column")
            .appendField("GROUP BY");
        this.appendStatementInput("having")
            .setCheck("selectgroupmodifier");
        this.setPreviousStatement(true, "selectmodifier");
        this.setNextStatement(true, "selectmodifier");
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['select_group_having'] = {
    init: function () {
        this.appendStatementInput("having")
            .setCheck("conditionblock")
            .appendField("HAVING");
        this.setPreviousStatement(true, "selectgroupmodifier");
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['select_order'] = {
    init: function () {
        this.appendStatementInput("column")
            .setCheck("column")
            .appendField("ORDER BY");
        this.setPreviousStatement(true, "selectmodifier");
        this.setNextStatement(true, "selectmodifier");
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['select_limit'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("LIMIT")
            .appendField(new Blockly.FieldNumber(1, 0, Infinity, 1), "limit");
        this.setPreviousStatement(true, "selectmodifier");
        this.setNextStatement(true, "selectmodifier");
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};