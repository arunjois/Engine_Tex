"use strict";
var Nodes = /** @class */ (function () {
    function Nodes(element) {
        this.element = element;
        this.next = null;
    }
    return Nodes;
}());
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
            console.log(temp.element);
            this.head = temp.next;
        }
    };
    return List;
}());
var para = "This is a paragraph";
var arr = para.split(" ");
arr.forEach(function (ele) {
    var ll = new List();
    ll.append(ele);
    console.log(ll.toString());
});
