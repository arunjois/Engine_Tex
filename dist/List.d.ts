declare class Nodes<T> {
    element: T;
    next: any;
    constructor(element: T);
}
declare class List<T> {
    head: Nodes<T>;
    len: number;
    append(elem: any): void;
    display(): void;
}
declare var para: string;
declare var arr: string[];
