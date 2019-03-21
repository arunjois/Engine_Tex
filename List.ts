class Nodes<T> {
    element:T;
    next:any;
    constructor(element:T){
        this.element=element;
        this.next=null;
    }
}
class List<T>{
    public head:Nodes<T>;
    len=0;
    public append(elem:any) {
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