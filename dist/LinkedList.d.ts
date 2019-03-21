declare class Link {
    value: number;
    nextNode: Link;
    constructor(nodeValue: any, nodeReference: any);
}
declare class LinkedList {
    list: Link;
    _length: number;
    insertLink(i: number): boolean;
    printLinkList(): void;
    searchNodeByValue(i: number): number;
    removeListItemByValue(i: number): boolean;
    removeListItemByPos(i: number): boolean;
    toString(): String;
}
declare let obj: LinkedList<{}>;
