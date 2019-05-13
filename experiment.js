"use strict";
exports.__esModule = true;
var Documents = /** @class */ (function () {
    function Documents(Type, Title, Text) {
        this.type = Type;
        this.title = Title;
        this.text = Text;
    }
    return Documents;
}());
exports.Documents = Documents;
var d = new Documents("Chapter", "This is title", "This is text");
console.log(d.text);
