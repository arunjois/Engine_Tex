export class Documents {
    type:string;
    title : String|null;
    text : String|null;
    constructor(Type:string,Title:String|null,Text:String|null) {
        this.type=Type;
        this.title=Title;
        this.text=Text;
    }
}
let d = new Documents("Chapter","This is title","This is text");
console.log(d.text);