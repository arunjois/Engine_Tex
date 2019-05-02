export class Item<T> {
    element:T;
    next:null;
    constructor(element:T){
        this.element=element;
        this.next=null;
    }
}
export class List<T>{
    public head:Item<T> | any;
    len=0;
    public append(elem:Item<T>) {
        if(this.head==null) {
            this.head=elem;
            this.len++;
        }
        else {
            while(this.head!=null) {
                this.head=elem.next;
            }
            let temp:any;
            temp=this.head;
            temp.next=elem;
            this.len++;
        }
    }
    public display() {
        let temp:any;
        temp=this.head;
        while(this.head!=null) {
            console.log(this.head.element);
            this.head=temp.next;
        }
    }
}
    var para = "This is a paragraph";
    var arr = para.split(" ");
    arr.forEach(function (ele) {
        let ll = new List<String>();
        ll.append(ele);
        console.log(ll.head);
    })
    para="1 2 3 4 5";
    arr = para.split(" ");
    arr.forEach(function(tmp) {
        let tt = new List<Number>();
        tt.append(tmp);
        console.log(tt.head);
    });