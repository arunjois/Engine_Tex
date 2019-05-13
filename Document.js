var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Section = /** @class */ (function () {
    function Section(SubHeading, text) {
        this.subheading = new String();
        this.subheading = SubHeading;
        this.text = text;
    }
    return Section;
}());
var Title = /** @class */ (function (_super) {
    __extends(Title, _super);
    function Title(Head, Section) {
        var _this = _super.call(this, Section[0].subheading, Section[0].text) || this;
        _this.head = Head;
        _this.section = Section;
        return _this;
    }
    return Title;
}(Section));
var Documents = /** @class */ (function (_super) {
    __extends(Documents, _super);
    function Documents(Title) {
        var _this = _super.call(this, Title[0].head, Title[0].section) || this;
        _this.title = Title;
        return _this;
    }
    return Documents;
}(Title));
var heading = "This is heading";
var text = "this is text";
var arr = ['this', 'is', 'text'];
var Some;
var d;
Some = new Section(heading, arr);
t: new Title(heading, Some);
d: new Document();
console.log(d);
