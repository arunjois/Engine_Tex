var Documents = /** @class */ (function () {
    function Documents(Type, Title, Text) {
        this.type = Type;
        this.title = Title;
        this.text = Text;
    }
    return Documents;
}());
var d = new Documents("Chapter", "This is title", "This is text");
console.log(d.text);
