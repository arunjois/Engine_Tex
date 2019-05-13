import {Item,List} from "./List";
export class Word {
	word:String
	italic:boolean=false;
	bold:boolean=false;
	underline:boolean=false;

	constructor(w:String) {
		this.word=w;
	}
}
class Paragraph extends Word {
	alignment:any;

}
class Enumerate {
	list : List<Word>;
	constructor(l:List<Word>) {
		this.list=l;
	}

}

class Itemize extends Word {

}


class Title {
	title:List<Word>;
	branch:List<Word>;
	name:List<Word>;
	usn:List<Word>;
	guide:List<Word>;
	college:List<Word>;
	logo="NULL";	/* This will be removed  */
	next:any;
	constructor(Title:List<Word>,Branch:List<Word>,Name:List<Word>,
		USN:List<Word>,Guide:List<Word>,College:List<Word>){
		this.title=Title;
		this.branch=Branch;
		this.name=Name;
		this.usn=USN;
		this.guide=Guide;
		this.college=College;
	}
}
var temp = "this is string";
var ll = temp.split(function(ele) {
	var ll = new LinkedList<Word>();
	ll.append(ele);
	return ll;
});
var ll1 = temp.split(function(ele) {
	var ll = new LinkedList<Word>();
	ll.append(ele);
	return ll;
});
var ll2 = temp.split(function(ele) {
	var ll = new LinkedList<Word>();
	ll.append(ele);
	return ll;
});
var ll3 = temp.split(function(ele) {
	var ll = new LinkedList<Word>();
	ll.append(ele);
	return ll;
});
var ll4 = temp.split(function(ele) {
	var ll = new LinkedList<Word>();
	ll.append(ele);
	return ll;
});
var ll5 = temp.split(function(ele) {
	var ll = new LinkedList<Word>();
	ll.append(ele);
	return ll;
});
let title = new Title(ll,ll1,ll2,ll3,ll4,ll5);
console.log(title);