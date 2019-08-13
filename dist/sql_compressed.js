module.exports = function(Blockly){var goog = Blockly.goog;"use strict";function createArrayOfString(e,l){return e.split(l).map(function(e){return e.trim()})}function generateSeparatedList(e,l){var t="";for(let o in e)t+=e[o]+l;return t=t.substring(0,t.length-l.length)}goog.provide("Blockly.SQL"),goog.require("Blockly.Generator"),Blockly.SQL=new Blockly.Generator("SQL"),Blockly.SQL.addReservedWords("ABORT,ACTION,ADD,AFTER,ALL,ALTER,ANALYZE,AND,AS,ASC,ATTACH,AUTOINCREMENT,BEFORE,BEGIN,BETWEEN,BY,CASCADE,CASE,CAST,CHECK,COLLATE,COLUMN,COMMIT,CONFLICT,CONSTRAINT,CREATE,CROSS,CURRENT,CURRENT_DATE,CURRENT_TIME,CURRENT_TIMESTAMP,DATABASE,DEFAULT,DEFERRABLE,DEFERRED,DELETE,DESC,DETACH,DISTINCT,DO,DROP,EACH,ELSE,END,ESCAPE,EXCEPT,EXCLUDE,EXCLUSIVE,EXISTS,EXPLAIN,FAIL,FILTER,FOLLOWING,FOR,FOREIGN,FROM,FULL,GLOB,GROUP,GROUPS,HAVING,IF,IGNORE,IMMEDIATE,IN,INDEX,INDEXED,INITIALLY,INNER,INSERT,INSTEAD,INTERSECT,INTO,IS,ISNULL,JOIN,KEY,LEFT,LIKE,LIMIT,MATCH,NATURAL,NO,NOT,NOTHING,NOTNULL,NULL,OF,OFFSET,ON,OR,ORDER,OTHERS,OUTER,OVER,PARTITION,PLAN,PRAGMA,PRECEDING,PRIMARY,QUERY,RAISE,RANGE,RECURSIVE,REFERENCES,REGEXP,REINDEX,RELEASE,RENAME,REPLACE,RESTRICT,RIGHT,ROLLBACK,ROW,ROWS,SAVEPOINT,SELECT,SET,TABLE,TEMP,TEMPORARY,THEN,TIES,TO,TRANSACTION,TRIGGER,UNBOUNDED,UNION,UNIQUE,UPDATE,USING,VACUUM,VALUES,VIEW,VIRTUAL,WHEN,WHERE,WINDOW,WITH,WITHOUT"),Blockly.SQL.ORDER_ATOMIC=0,Blockly.SQL.init=function(e){Blockly.SQL.variableDB_?Blockly.SQL.variableDB_.reset():Blockly.SQL.variableDB_=new Blockly.Names(Blockly.SQL.RESERVED_WORDS_)},Blockly.SQL.finish=function(e){return Blockly.SQL.variableDB_.reset(),e.trim()},Blockly.SQL.scrubNakedValue=function(e){return e+"\n"},Blockly.SQL.quote_=function(e){return"'"+(e=e.replace(/\\/g,"\\\\").replace(/\n/g,"\\\n").replace(/'/g,"\\'"))+"'"},Blockly.SQL.scrub_=function(e,l,t){var o="";if(!e.outputConnection||!e.outputConnection.targetConnection){(r=e.getCommentText())&&(o+="/*\n"+Blockly.SQL.prefixLines(r+"\n"," * ")+" */\n");for(var n=0;n<e.inputList.length;n++)if(e.inputList[n].type==Blockly.INPUT_VALUE){var r,a=e.inputList[n].connection.targetBlock();if(a)(r=Blockly.SQL.allNestedComments(a))&&(o+="/*\n"+Blockly.SQL.prefixLines(r+"\n"," * ")+" */\n")}}var c=e.nextConnection&&e.nextConnection.targetBlock();return o+l+(t?"":Blockly.SQL.blockToCode(c))},Blockly.SQL.getAdjusted=function(e,l,t,o,n){var r=t||0,a=n||Blockly.SQL.ORDER_NONE;e.workspace.options.oneBasedIndex&&r--;var c=e.workspace.options.oneBasedIndex?"1":"0";if(r>0)var E=Blockly.SQL.valueToCode(e,l,Blockly.SQL.ORDER_ADDITION)||c;else if(r<0)E=Blockly.SQL.valueToCode(e,l,Blockly.SQL.ORDER_SUBTRACTION)||c;else if(o)E=Blockly.SQL.valueToCode(e,l,Blockly.SQL.ORDER_UNARY_NEGATION)||c;else E=Blockly.SQL.valueToCode(e,l,a)||c;if(Blockly.isNumber(E))E=parseFloat(E)+r,o&&(E=-E);else{if(r>0){E=E+" + "+r;var L=Blockly.SQL.ORDER_ADDITION}else if(r<0){E=E+" - "+-r;L=Blockly.SQL.ORDER_SUBTRACTION}if(o){E=r?"-("+E+")":"-"+E;L=Blockly.SQL.ORDER_UNARY_NEGATION}L=Math.floor(L),a=Math.floor(a),L&&a>=L&&(E="("+E+")")}return E},Blockly.SQL.block_alter=function(e){var l="",t=Blockly.SQL.valueToCode(e,"TABLE",Blockly.SQL.ORDER_ATOMIC).trim(),o=createArrayOfString(Blockly.SQL.statementToCode(e,"MODIFIER").trim(),"\n"),n="";for(let e in o)n+=o[e]+"\n";return l+="ALTER TABLE "+t+"\n"+n+";"},Blockly.SQL.alter_rename_to=function(e){var l="";return l+="\nRENAME TO "+Blockly.SQL.valueToCode(e,"NEWNAME",Blockly.SQL.ORDER_ATOMIC).trim()},Blockly.SQL.alter_rename_column=function(e){var l="";return l+="\nRENAME COLUMN "+Blockly.SQL.valueToCode(e,"COLUMN",Blockly.SQL.ORDER_ATOMIC).trim()+" TO "+Blockly.SQL.valueToCode(e,"NEWNAME",Blockly.SQL.ORDER_ATOMIC).trim()},Blockly.SQL.alter_add_column=function(e){var l="";return l+="\nADD COLUMN "+Blockly.SQL.statementToCode(e,"COLUMNDEFINITION",Blockly.SQL.ORDER_ATOMIC).trim()},Blockly.SQL.block_create=function(e){var l="",t=Blockly.SQL.valueToCode(e,"TABLE",Blockly.SQL.ORDER_ATOMIC).trim(),o=createArrayOfString(Blockly.SQL.statementToCode(e,"COLUMNDEFINITION").trim(),"\n"),n="";for(let e in o)n+=o[e]+", ";return l+="CREATE TABLE "+t+" ("+(n=n.substring(0,n.length-2))+");"},Blockly.SQL.block_drop=function(e){var l="";return l+="DROP TABLE "+Blockly.SQL.valueToCode(e,"TABLE",Blockly.SQL.ORDER_ATOMIC).trim()+";"},Blockly.SQL.block_insert=function(e){var l="",t=Blockly.SQL.valueToCode(e,"TABLE",Blockly.SQL.ORDER_ATOMIC).trim(),o=Blockly.SQL.statementToCode(e,"COLUMN",Blockly.SQL.ORDER_ATOMIC),n=generateSeparatedList(createArrayOfString(o=o.substring(0,o.length-1),","),", "),r=Blockly.SQL.statementToCode(e,"VALUE",Blockly.SQL.ORDER_ATOMIC);return l+="INSERT INTO "+t+" ("+n+")\nVALUES ("+generateSeparatedList(createArrayOfString(r=r.substring(0,r.length-1),","),", ")+");"},Blockly.SQL.block_select=function(e){var l="",t=Blockly.SQL.statementToCode(e,"COLUMN"),o=createArrayOfString(t=t.substring(0,t.length-1),","),n="",r=Blockly.SQL.statementToCode(e,"TABLE"),a=createArrayOfString(r=r.substring(0,r.length-1),","),c="",E=createArrayOfString(Blockly.SQL.statementToCode(e,"MODIFIER").trim(),"\n"),L="";if(0===t.length)n="*";else{for(let e in o)n+=o[e]+", ";n=n.substring(0,n.length-2)}for(let e in a)c+=a[e]+", ";c=c.substring(0,c.length-2);for(let e in E)L+=E[e]+"\n";return l+="SELECT "+n+"\nFROM "+c+" "+L+";"},Blockly.SQL.block_subselect=function(e){var l="",t=Blockly.SQL.block_select(e);return l+="("+t.substring(0,t.length-1)+")"},Blockly.SQL.select_join=function(e){var l="\n",t=Blockly.SQL.valueToCode(e,"TABLE",Blockly.SQL.ORDER_ATOMIC).trim(),o=Blockly.SQL.statementToCode(e,"CONDITION").trim();return l+=e.getFieldValue("jointype")+" JOIN "+t+" ON "+o},Blockly.SQL.select_where=function(e){var l="\nWHERE ";return l+=Blockly.SQL.statementToCode(e,"CONDITION").trim()},Blockly.SQL.select_group=function(e){var l="\nGROUP BY ",t=Blockly.SQL.statementToCode(e,"COLUMN");return l+=generateSeparatedList(createArrayOfString(t=t.substring(0,t.length-1),","),", ").trim()+" "+Blockly.SQL.statementToCode(e,"MODIFIER").trim()},Blockly.SQL.select_group_having=function(e){var l="HAVING ";return l+=Blockly.SQL.statementToCode(e,"CONDITION").trim()},Blockly.SQL.select_order=function(e){var l="\nORDER BY ",t=Blockly.SQL.statementToCode(e,"COLUMN");return l+=generateSeparatedList(createArrayOfString(t=t.substring(0,t.length-1),","),", ")},Blockly.SQL.select_limit=function(e){var l="\nLIMIT ";return l+=e.getFieldValue("limit")},Blockly.SQL.block_update=function(e){var l="",t=Blockly.SQL.valueToCode(e,"TABLE",Blockly.SQL.ORDER_ATOMIC).trim(),o=Blockly.SQL.statementToCode(e,"ALLOCATIONS").trim();return l+="UPDATE "+t+"\nSET "+(o=o.substring(0,o.length-1))+"\n"+Blockly.SQL.statementToCode(e,"MODIFIER").trim()+";"},Blockly.SQL.update_where=function(e){var l="WHERE ";return l+=Blockly.SQL.statementToCode(e,"CONDITION").trim()},Blockly.SQL.columntovalue=function(e){var l="";return l+=Blockly.SQL.valueToCode(e,"COLUMN",Blockly.SQL.ORDER_ATOMIC).trim()+" = '"+Blockly.SQL.valueToCode(e,"VALUE",Blockly.SQL.ORDER_ATOMIC).trim()+"', "},Blockly.SQL.columndefinition=function(e){var l="",t=e.getFieldValue("NAME"),o=e.getFieldValue("TYPE"),n="",r=Blockly.SQL.valueToCode(e,"DEFAULT",Blockly.SQL.ORDER_ATOMIC).trim();return"TRUE"===e.getField("primarykey").getValue()&&(n+="PRIMARY KEY","TRUE"===e.getField("autoincrement").getValue()&&(n+=" AUTOINCREMENT")),"TRUE"===e.getField("notnull").getValue()&&(n+=" NOT NULL"),"TRUE"===e.getField("unique").getValue()&&(n+=" UNIQUE"),"TRUE"===e.getField("default").getValue()&&(n+=" DEFAULT "+r),l+=t+" "+o+" "+n.trim()+"\n"},Blockly.SQL.cond_block=function(e){var l="",t=Blockly.SQL.valueToCode(e,"LEFT",Blockly.SQL.ORDER_ATOMIC),o=e.getFieldValue("OPERATOR"),n="";if("IN"===e.getFieldValue("OPERATOR"))if(e.getInputTargetBlock("RIGHT")&&"block_subselect"===e.getInputTargetBlock("RIGHT").type){n+=Blockly.SQL.statementToCode(e,"RIGHT",Blockly.SQL.ORDER_ATOMIC).trim()}else{var r=Blockly.SQL.statementToCode(e,"RIGHT",Blockly.SQL.ORDER_ATOMIC);n+="('"+generateSeparatedList(createArrayOfString(r=r.substring(0,r.length-1),","),"', '")+"')"}else"LIKE"===e.getFieldValue("OPERATOR")?n+="'"+Blockly.SQL.valueToCode(e,"RIGHT",Blockly.SQL.ORDER_ATOMIC)+"'":n+=Blockly.SQL.valueToCode(e,"RIGHT",Blockly.SQL.ORDER_ATOMIC);return l+="("+t+" "+o+" "+n+") "},Blockly.SQL.cond_not=function(e){return"NOT ","NOT "},Blockly.SQL.cond_or=function(e){return"OR ","OR "},Blockly.SQL.cond_and=function(e){return"AND ","AND "},Blockly.SQL.data_boolean=function(e){var l="";return[l+="TRUE"===e.getField("BOOLEAN").getValue()?1:0,Blockly.SQL.ORDER_ATOMIC]},Blockly.SQL.data_boolean_statement=function(e){var l="";return(l+="TRUE"===e.getField("BOOLEAN").getValue()?1:0)+","},Blockly.SQL.data_string=function(e){return[Blockly.SQL.quote_(e.getFieldValue("STRING")),Blockly.SQL.ORDER_ATOMIC]},Blockly.SQL.data_string_statement=function(e){return Blockly.SQL.quote_(e.getFieldValue("STRING"))+","},Blockly.SQL.data_number=function(e){var l="";return[l+=e.getFieldValue("NUMBER"),Blockly.SQL.ORDER_ATOMIC]},Blockly.SQL.data_number_statement=function(e){var l="";return(l+=e.getFieldValue("NUMBER"))+","},Blockly.SQL.data_date=function(e){var l="";return l+=e.getFieldValue("YEAR").pad(4)+"-"+e.getFieldValue("MONTH").pad(2)+"-"+e.getFieldValue("DAY").pad(2),[l+=" 00:00:00.000",Blockly.SQL.ORDER_ATOMIC]},Blockly.SQL.data_date_statement=function(e){var l="";return l+=e.getFieldValue("YEAR").pad(4)+"-"+e.getFieldValue("MONTH").pad(2)+"-"+e.getFieldValue("DAY").pad(2),(l+=" 00:00:00.000")+","},Blockly.SQL.data_datetime=function(e){var l="";return l+=e.getFieldValue("YEAR").pad(4)+"-"+e.getFieldValue("MONTH").pad(2)+"-"+e.getFieldValue("DAY").pad(2),[l+=" "+e.getFieldValue("HOUR").pad(2)+":"+e.getFieldValue("MINUTE").pad(2)+":00.000",Blockly.SQL.ORDER_ATOMIC]},Blockly.SQL.data_datetime_statement=function(e){var l="";return l+=e.getFieldValue("YEAR").pad(4)+"-"+e.getFieldValue("MONTH").pad(2)+"-"+e.getFieldValue("DAY").pad(2),(l+=" "+e.getFieldValue("HOUR").pad(2)+":"+e.getFieldValue("MINUTE").pad(2)+":00.000")+","},String.prototype.pad=function(e){for(var l=String(this);l.length<(e||2);)l="0"+l;return l},Blockly.SQL.entity_table=function(e){var l="";return[l+=e.getFieldValue("table"),Blockly.SQL.ORDER_ATOMIC]},Blockly.SQL.entity_table_statement=function(e){var l="";return l+=e.getFieldValue("table")+","},Blockly.SQL.entitiy_column=function(e){var l="";return[l+=e.getFieldValue("column"),Blockly.SQL.ORDER_ATOMIC]},Blockly.SQL.entity_column_statement=function(e){var l="";return l+=e.getFieldValue("column")+","};return Blockly.SQL;}