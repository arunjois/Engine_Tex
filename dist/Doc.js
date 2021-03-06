"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var Word = /** @class */ (function () {
    function Word(w) {
        this.italic = false;
        this.bold = false;
        this.underline = false;
        this.word = w;
    }
    return Word;
}());
exports.Word = Word;
var Paragraph = /** @class */ (function (_super) {
    __extends(Paragraph, _super);
    function Paragraph() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Paragraph;
}(Word));
var Enumerate = /** @class */ (function (_super) {
    __extends(Enumerate, _super);
    function Enumerate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Enumerate;
}(Word));
var Itemize = /** @class */ (function (_super) {
    __extends(Itemize, _super);
    function Itemize() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Itemize;
}(Word));
var Title = /** @class */ (function () {
    function Title() {
    }
    return Title;
}());
