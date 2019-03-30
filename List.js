"use strict";
exports.__esModule = true;
var Item = /** @class */ (function () {
    function Item(element) {
        this.element = element;
        this.next = null;
    }
    return Item;
}());
exports.Item = Item;
var List = /** @class */ (function () {
    function List() {
        this.len = 0;
    }
    List.prototype.append = function (elem) {
        if (this.head == null) {
            this.head = elem;
            this.len++;
        }
        else {
            while (this.head != null) {
                this.head = elem.next;
            }
            var temp = void 0;
            temp = this.head;
            temp.next = elem;
            this.len++;
        }
    };
    List.prototype.display = function () {
        var temp;
        temp = this.head;
        while (this.head != null) {
            console.log(this.head.element);
            this.head = temp.next;
        }
    };
    return List;
}());
exports.List = List;
var para = "This is a paragraph";
var arr = para.split(" ");
arr.forEach(function (ele) {
    var ll = new List();
    ll.append(ele);
    console.log(ll.head);
});
para = "1 2 3 4 5";
arr = para.split(" ");
arr.forEach(function (tmp) {
    var tt = new List();
    tt.append(tmp);
    console.log(tt.head);
});
