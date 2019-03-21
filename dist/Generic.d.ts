declare class LinkedNode<T> {
    private _elem;
    next: LinkedNode<T> | null;
    constructor(elem: T);
    elem(): T;
}
declare class LinkedList<T> {
    private head;
    private len;
    constructor(headElement?: LinkedNode<T>);
    append(elem: T): void;
    removeAt(pos: number): LinkedNode<T> | null;
    insert(elem: T, pos: number): boolean;
    toString(): string;
}
