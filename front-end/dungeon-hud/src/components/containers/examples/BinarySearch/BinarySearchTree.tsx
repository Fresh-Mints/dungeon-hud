import React, { ChangeEvent, useReducer, useState } from 'react';
import { Button, List, ListItemText, TextField } from '@material-ui/core';
import { connect, useDispatch, useSelector } from 'react-redux';
import { INode, INodeState } from '../../../../models/nodes.model';

function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function getRandomColor() {
    return Math.floor(Math.random() * 16777215).toString(16)
}

export const BinarySearchTreeOptions = () => {
    const [options, setOptions] = useState({amount: 0, min: 0, max: 0})
    const [tree, setTree] = useState([]);
    const [displayGraph, switchGraphDisplay] = useState(false);
    
    const updateOptions = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setOptions({...options, [name]:value})
    }

    //in: amount of nodes, min value, max value
    //out: unsorted array
    const GenerateUnsortedTree = (amount: number, min: number, max: number, tree: INode[]) => {
        for (let i=0; i < amount; i++) {
            const node: INode = {
                id: i,
                value: getRandomInt(min, max),
                color: getRandomColor(),
            };
            tree.push(node)
        }
    }

    //Build sorted binary tree using INode.value as the key.
    //
    const generateTreeHandler = () => {
        switchGraphDisplay(true);
        setTree([]);
        GenerateUnsortedTree(options.amount, options.min, options.max, tree);
        setTree(tree);
    }

    return (
        <div>
            <TextField
                name='amount'
                type='number'
                label='Amount of Nodes'
                value={options.amount}
                onChange={updateOptions}
            />
            <TextField
                name='min'
                type='number'
                label='Value min'
                value={options.min}
                onChange={updateOptions}
            />
            <TextField
                name='max'
                type='number'
                label='Value max'
                value={options.max}
                onChange={updateOptions}
            />
            <Button
                onClick={generateTreeHandler}
            >
                Grow Tree
            </Button>
{/*             {displayGraph ? <Tree/> : null}
 */}        </div>
    );
}