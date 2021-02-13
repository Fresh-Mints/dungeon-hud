export interface INode {
    id: number;
    value: number;
    color: string;
    data?: INode[];
}

export interface INodeState {
    nodes?: INode[];
}