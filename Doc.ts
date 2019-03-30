import {Item,List} from "./List";
import { listenerCount } from "cluster";
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
class Enumerate extends Word {

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
let project_name = "This is a project";
let arr = project_name.split(" ");
arr.forEach(
	function(ele) {
		let w = new Word(ele);
		let temp=new List<Word>();
		temp.append(w);
	}
);

//Title obj = new Title(list);