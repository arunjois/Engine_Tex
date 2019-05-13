import { LinkedList } from "./Generic";
export class Document {
    chapter : LinkedList<Chapter>;
    constructor(Chapter:LinkedList<Chapter>) {
        this.chapter=Chapter;
    }
}
export class Chapter {
    section : LinkedList<Section>;
    constructor(Section:LinkedList<Section>) {
        this.section=Section;
    }
    public getSection() : String {
        return this.section.toString();
    }
}
export class Section {
    title : String;
    text : String;
    public setTitle(Title:String) {
        this.title=Title;
    }
    public  getTitle() :String{
        return this.title;
    }
    public setText(Text:String) {
        this.text=Text;
    }
    public getText():String {
        return this.text;
    }
    constructor (Title:String,Text:String) {
        this.title=Title;
        this.text=Text;

    }
}
let s = new Section ("This is title","This is text");
let l = new LinkedList<Section>();
l.append(s);
let c = new Chapter(l);
let doc = new LinkedList<Chapter>();
doc.append(c);
let d = new Document(doc);
console.log(c.getSection());