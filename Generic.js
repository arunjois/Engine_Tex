var LinkedNode = /** @class */ (function () {
    function LinkedNode(elem) {
        this._elem = elem;
        this.next = null;
    }
    /*get*/ LinkedNode.prototype.elem = function () {
        return this._elem;
    };
    return LinkedNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList(headElement) {
        this.head = null;
        this.len = 0;
        this.head = headElement || null;
    }
    LinkedList.prototype.append = function (elem) {
        var node = new LinkedNode(elem);
        var current;
        if (this.head === null) {
            this.head = node;
        }
        else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.len++;
    };
    LinkedList.prototype.removeAt = function (pos) {
        if (pos > -1 && pos < this.len && this.head) {
            var current = this.head;
            var previous = current;
            var index = 0;
            if (pos === 0) {
                this.head = current.next;
            }
            else {
                while (index++ < pos && current.next) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }
            this.len--;
            return current;
        }
        else {
            return null;
        }
    };
    LinkedList.prototype.insert = function (elem, pos) {
        if (pos > -1 && pos < this.len && this.head) {
            var current = this.head;
            var index = 0;
            var previous = current;
            var node = new LinkedNode(elem);
            if (pos === 0) {
                node.next = current;
                this.head = node;
            }
            else {
                while (index++ < pos && current.next) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }
            this.len++;
            return true;
        }
        else {
            return false;
        }
    };
    LinkedList.prototype.toString = function () {
        var current = this.head;
        var str = '';
        while (current) {
            str += current.elem;
            current = current.next;
        }
        return str;
    };
    return LinkedList;
}());
