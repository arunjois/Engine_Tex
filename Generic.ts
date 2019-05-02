class LinkedNode<T> {
    private _elem: T;
    public next: LinkedNode<T> | null;

    constructor(elem: T) {
        this._elem = elem;
        this.next = null;
    }

    /*get*/ elem(): T {
        return this._elem;
    }
}

class LinkedList<T> {
    private head: LinkedNode<T> | null = null;
    private len = 0;

    constructor(headElement?: LinkedNode<T>) {
        this.head = headElement || null;
    }

    public append(elem: T) {
        let node = new LinkedNode(elem);
        let current: LinkedNode<T>;

        if (this.head === null) {
            this.head = node;
        } else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.len++;
    }

    public removeAt(pos: number): LinkedNode<T> | null {
        if (pos > -1 && pos < this.len && this.head) {
            let current = this.head;
            let previous: LinkedNode<T> = current;
            let index = 0;

            if (pos === 0) {
                this.head = current.next;
            } else {
                while (index++ < pos && current.next) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }
            this.len--;
            return current;
        } else {
            return null;
        }
    }


    public insert(elem: T, pos: number) {
        if (pos > -1 && pos < this.len && this.head) {
            let current = this.head;
            let index = 0;
            let previous = current;
            let node = new LinkedNode(elem);

            if (pos === 0) {
                node.next = current;
                this.head = node;
            } else {
                while (index++ < pos && current.next) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }
            this.len++;
            return true;
        } else {
            return false;
        }
    }

    public toString() {
        var current = this.head;
        var str = '';
        while (current) {
            str += current.elem;
            current = current.next;
        }
        return str;
    }
}
var para = "This is a paragraph";
var arr = para.split(" ");
arr.forEach(function (ele) {
    let ll = new LinkedList<String>();
    ll.append(ele);
    //console.log(ll.head);
    ll.toString();
})
/*
para="1 2 3 4 5";
arr = para.split(" ");
arr.forEach(function(tmp) {
    let tt = new List<Number>();
    tt.append(tmp);
    console.log(tt.head);
})
*/
