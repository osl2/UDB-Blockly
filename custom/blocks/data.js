Blockly.Blocks['data_boolean'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("\u22A8 / \u22AD")
            .appendField(new Blockly.FieldDropdown([["true", "TRUE"], ["false", "FALSE"]]), "BOOLEAN");
        this.setOutput(true, ["boolean", "value"]);
        this.setColour(230);
        this.setTooltip(Blockly.Msg.Custom.DATAELEMENT_BOOL);
        this.setHelpUrl("");
    }
};

Blockly.Blocks['data_boolean_statement'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("\u22A8 / \u22AD")
            .appendField(new Blockly.FieldDropdown([["true", "TRUE"], ["false", "FALSE"]]), "BOOLEAN");
        this.setPreviousStatement(true, ["boolean", "value"]);
        this.setNextStatement(true, ["boolean", "value"]);
        this.setColour(230);
        this.setTooltip(Blockly.Msg.Custom.DATAELEMENT_BOOL);
        this.setHelpUrl("");
    }
};

Blockly.Blocks['data_string'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAA" +
                "n0lEQVQI1z3OMa5BURSF4f/cQhAKjUQhuQmFNwGJEUi0RKN5rU7FHKhpjEH3TEMtkdBSCY" +
                "1EIv8r7nFX9e29V7EBAOvu7RPjwmWGH/VuF8CyN9/OAdvqIXYLvtRaNjx9mMTDyo+NjAN1" +
                "HNcl9ZQ5oQMM3dgDUqDo1l8DzvwmtZN7mnD+PkmLa+4mhrxVA9fRowBWmVBhFy5gYEjKMf" +
                "z9AylsaRRgGzvZAAAAAElFTkSuQmCC", 15, 10, "*"))
            .appendField(new Blockly.FieldTextInput("value"), "STRING")
            .appendField(new Blockly.FieldImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAA" +
                "qUlEQVQI1z3KvUpCcRiA8ef9E4JNHhI0aFEacm1o0BsI0Slx8wa8gLauoDnoBhq7DcfWhg" +
                "gONDmJJgqCPA7neJ7p934EOOKOnM8Q7PDElo/4x4lFb2DmuUjcUzS3URnGib9qaPNbuXvB" +
                "O3sGPHJDRG6fGVdMSeWDP2q99FQdFrz26Gu5Tq7dFMzUvbXy8KXeAj57cOklgA+u1B5Aos" +
                "lLtGIHQMaCVnwDnADZIFIrXsoXrgAAAABJRU5ErkJggg==", 15, 10, "*"));
        this.setOutput(true, ["string", "value"]);
        this.setColour(230);
        this.setTooltip(Blockly.Msg.Custom.DATAELEMENT_STRING);
        this.setHelpUrl("");
    }
};

Blockly.Blocks['data_string_statement'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAA" +
                "n0lEQVQI1z3OMa5BURSF4f/cQhAKjUQhuQmFNwGJEUi0RKN5rU7FHKhpjEH3TEMtkdBSCY" +
                "1EIv8r7nFX9e29V7EBAOvu7RPjwmWGH/VuF8CyN9/OAdvqIXYLvtRaNjx9mMTDyo+NjAN1" +
                "HNcl9ZQ5oQMM3dgDUqDo1l8DzvwmtZN7mnD+PkmLa+4mhrxVA9fRowBWmVBhFy5gYEjKMf" +
                "z9AylsaRRgGzvZAAAAAElFTkSuQmCC", 15, 10, "*"))
            .appendField(new Blockly.FieldTextInput("value"), "STRING")
            .appendField(new Blockly.FieldImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAA" +
                "qUlEQVQI1z3KvUpCcRiA8ef9E4JNHhI0aFEacm1o0BsI0Slx8wa8gLauoDnoBhq7DcfWhg" +
                "gONDmJJgqCPA7neJ7p934EOOKOnM8Q7PDElo/4x4lFb2DmuUjcUzS3URnGib9qaPNbuXvB" +
                "O3sGPHJDRG6fGVdMSeWDP2q99FQdFrz26Gu5Tq7dFMzUvbXy8KXeAj57cOklgA+u1B5Aos" +
                "lLtGIHQMaCVnwDnADZIFIrXsoXrgAAAABJRU5ErkJggg==", 15, 10, "*"));
        this.setPreviousStatement(true, ["string", "value"]);
        this.setNextStatement(true, ["string", "value"]);
        this.setColour(230);
        this.setTooltip(Blockly.Msg.Custom.DATAELEMENT_STRING);
        this.setHelpUrl("");
    }
};

Blockly.Blocks['data_number'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("\u0023")
            .appendField(new Blockly.FieldTextInput("0", checkNumeric), "NUMBER");
        this.setOutput(true, ["number", "value"]);
        this.setColour(230);
        this.setTooltip(Blockly.Msg.Custom.DATAELEMENT_NUMBER);
        this.setHelpUrl("");
    }
};

Blockly.Blocks['data_number_statement'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("\u0023")
            .appendField(new Blockly.FieldTextInput("0", checkNumeric), "NUMBER");
        this.setPreviousStatement(true, ["number", "value"]);
        this.setNextStatement(true, ["number", "value"]);
        this.setColour(230);
        this.setTooltip(Blockly.Msg.Custom.DATAELEMENT_NUMBER);
        this.setHelpUrl("");
    }
};

Blockly.Blocks['data_date'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldNumber(1, 1, 31, 1), "DAY")
            .appendField(".")
            .appendField(new Blockly.FieldNumber(1, 1, 12), "MONTH")
            .appendField(".")
            .appendField(new Blockly.FieldNumber(2019, -9999, 9999, 1), "YEAR");
        this.setOutput(true, ["string", "value"]);
        this.setColour(230);
        this.setTooltip(Blockly.Msg.Custom.DATAELEMENT_DATE);
        this.setHelpUrl("");
    }
};

Blockly.Blocks['data_date_statement'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldNumber(1, 1, 31, 1), "DAY")
            .appendField(".")
            .appendField(new Blockly.FieldNumber(1, 1, 12), "MONTH")
            .appendField(".")
            .appendField(new Blockly.FieldNumber(2019, -9999, 9999, 1), "YEAR");
        this.setPreviousStatement(true, ["string", "value"]);
        this.setNextStatement(true, ["string", "value"]);
        this.setColour(230);
        this.setTooltip(Blockly.Msg.Custom.DATAELEMENT_DATE);
        this.setHelpUrl("");
    }
};

Blockly.Blocks['data_datetime'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldNumber(1, 1, 31, 1), "DAY")
            .appendField(".")
            .appendField(new Blockly.FieldNumber(1, 1, 12), "MONTH")
            .appendField(".")
            .appendField(new Blockly.FieldNumber(2019, -9999, 9999, 1), "YEAR")
            .appendField(" - ")
            .appendField(new Blockly.FieldNumber(1, 1, 31, 1), "HOUR")
            .appendField(":")
            .appendField(new Blockly.FieldNumber(1, 1, 31, 1), "MINUTE");
        this.setOutput(true, ["string", "value"]);
        this.setColour(230);
        this.setTooltip(Blockly.Msg.Custom.DATAELEMENT_DATETIME);
        this.setHelpUrl("");
    }
};

Blockly.Blocks['data_datetime_statement'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldNumber(1, 1, 31, 1), "DAY")
            .appendField(".")
            .appendField(new Blockly.FieldNumber(1, 1, 12), "MONTH")
            .appendField(".")
            .appendField(new Blockly.FieldNumber(2019, -9999, 9999, 1), "YEAR")
            .appendField(" - ")
            .appendField(new Blockly.FieldNumber(1, 1, 31, 1), "HOUR")
            .appendField(":")
            .appendField(new Blockly.FieldNumber(1, 1, 31, 1), "MINUTE");
        this.setPreviousStatement(true, ["string", "value"]);
        this.setNextStatement(true, ["string", "value"]);
        this.setColour(230);
        this.setTooltip(Blockly.Msg.Custom.DATAELEMENT_DATETIME);
        this.setHelpUrl("");
    }
};

function checkNumeric(string) {
    const exp = /^(([1-9]*)|(([1-9]*)\.([0-9]*)))$/g;
    string = string.replace(",", ".");
    if (string.match(exp)) {
        return string;
    } else {
        return null;
    }
}
