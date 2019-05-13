class Section {
    subheading = new String();
    text:String[];
    constructor(SubHeading:String,text:String[]) {
        this.subheading=SubHeading;
        this.text=text;
    }
}
class Title extends Section {
    head:String;
    section:Section[];
    constructor(Head:String,Section:Section[]){
        super(Section[0].subheading,Section[0].text);
        this.head=Head;
        this.section=Section;
    }
}
class Documents extends Title {
   title:Title[];
   constructor(Title:Title[]) {
       super(Title[0].head,Title[0].section);
       this.title=Title;
   }
}
var heading = "This is heading";
var text = "this is text";
var arr = ['this','is','text'];
var Some:any;
var d:any;
Some = new Section(heading,arr);
t : new Title(heading, Some);
d: new Document();
console.log(d);