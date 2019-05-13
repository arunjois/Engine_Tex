import { LinkedList } from "./Generic";
import { StringifyOptions } from "querystring";
class Document {
    chapter : LinkedList<Chapter>;
}
class Chapter {
    section : LinkedList<Section>;
}
class Section {
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