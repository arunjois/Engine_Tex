var X;
(function (X) {
    var Node = /** @class */ (function () {
        function Node(elem) {
            this.elem = elem;
            this.next = null;
        }
        return Node;
    }());
    var LinkedList = /** @class */ (function () {
        function LinkedList() {
            this.head = null;
            this.len = 0;
        }
        LinkedList.prototype.append = function (elem) {
            var node = new Node(elem);
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
            if (pos > -1 && pos < this.len) {
                var current = this.head;
                var previous = void 0;
                var index = 0;
                if (pos === 0) {
                    this.head = current.next;
                }
                else {
                    while (index++ < pos) {
                        previous = current;
                        current = current.next;
                    }
                    previous.next = current.next;
                }
                this.len--;
                return current.elem;
            }
            else {
                return null;
            }
        };
        LinkedList.prototype.insert = function (elem, pos) {
            if (pos > -1 && pos < this.len) {
                var current = this.head;
                var index = 0;
                var previous = void 0;
                var node = new Node(elem);
                if (pos === 0) {
                    node.next = current;
                    this.head = node;
                }
                else {
                    while (index++ < pos) {
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
                str += current.elem; //output is undefinedundefinedundefined
                // str += JSON.stringify(current); 
                // prints out {"next":{"next":{}}}{"next":{}}{}
                current = current.next;
            }
            return str;
        };
        return LinkedList;
    }());
    var para = "This is a paragraph";
    var arr = para.split(" ");
    arr.forEach(function (ele) {
        //console.log(ele);
        var ll = new LinkedList();
        ll.append(ele);
        console.log(ll.toString());
    });
    /*let t = new LinkedList();
    t.append('asd'); // Works fine
    t.append(1);
    t.append(0);
    console.log(t); // LinkedList
    let tt = t.removeAt(1);
    console.log(t, 'tt', tt); // LinkedList, 'tt', 1
    t.insert('asd', 2);
    let ttt = t.insert('a', 1)
    console.log(ttt); // true
    console.log(t); // LinkedList
    console.log(t.toString()); //asda0
    */
})(X || (X = {}));
