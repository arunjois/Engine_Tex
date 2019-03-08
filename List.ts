class Node {
    element:any;
    next:any;
    constructor(element:any){
        this.element=element;
        this.next=null;
    }
}
class List<T>{
    head=null;
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
            console.log(temp);
            this.head=temp.next;
        }
    }
}