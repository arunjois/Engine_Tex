import {Word} from Doc;
var para="This is a paragraph";
var arr=para.split(" ");
arr.forEach(function(ele) {
    new Word(ele);
});