import React, { ChangeEvent, useState } from 'react';
import { Button, List, ListItemText, TextField } from '@material-ui/core';
import { connect, useDispatch, useSelector } from 'react-redux';
import { INode, INodeState } from '../../../models/nodes.model';

//in: amount of nodes, minimum value, maximum value
//out: array
const BinarySearchTree = (amount: number, minimum: number, maximum: number, tree: INodeState) => {

}

export const BinarySearchTreeOptions = () => {
    const [nodeCount, setNodeCount] = useState('');
    const dispatch = useDispatch();

    const nodeCountChangedHandler = (count: ChangeEvent<HTMLInputElement>) => {
        setNodeCount(count.target.value);
    }

    return (
        <div>
            <Button />
        </div>
    )
}