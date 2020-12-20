export interface INode {
    id: number;
    value: number;
    color: string;
}

export interface INodeState {
    nodes?: INode[];
}