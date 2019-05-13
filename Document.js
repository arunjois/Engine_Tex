"use strict";
exports.__esModule = true;
var Generic_1 = require("./Generic");
var Document = /** @class */ (function () {
    function Document(Chapter) {
        this.chapter = Chapter;
    }
    return Document;
}());
exports.Document = Document;
var Chapter = /** @class */ (function () {
    function Chapter(Section) {
        this.section = Section;
    }
    Chapter.prototype.getSection = function () {
        return this.section.toString();
    };
    return Chapter;
}());
exports.Chapter = Chapter;
var Section = /** @class */ (function () {
    function Section(Title, Text) {
        this.title = Title;
        this.text = Text;
    }
    Section.prototype.setTitle = function (Title) {
        this.title = Title;
    };
    Section.prototype.getTitle = function () {
        return this.title;
    };
    Section.prototype.setText = function (Text) {
        this.text = Text;
    };
    Section.prototype.getText = function () {
        return this.text;
    };
    return Section;
}());
exports.Section = Section;
var s = new Section("This is title", "This is text");
var l = new Generic_1.LinkedList();
l.append(s);
var c = new Chapter(l);
var doc = new Generic_1.LinkedList();
doc.append(c);
var d = new Document(doc);
console.log(c.getSection());
