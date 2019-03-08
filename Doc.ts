export class Word {
	word:String;
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
	title:Word;
	branch:Word;
	name:Word;
	usn:Word;
	guide:Word;
	college:Word;
	logo:String;	/* This will be removed  */
	next:any;
	constructor(){

	}
}