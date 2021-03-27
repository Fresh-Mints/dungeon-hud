import React, { ChangeEvent, useReducer, useState } from 'react';
import { Button, List, ListItemText, TextField } from '@material-ui/core';
import { connect, useDispatch, useSelector } from 'react-redux';
import styles from './BinarySearchTree.module.css';


interface INode {
    id: number;
    value: number;
    color: string;
    data?: INode[];
}

interface INodeState {
    nodes?: INode[];
}

function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16)
}

function traverseTree(node: INode | undefined, array: INode[]) {
    console.log('Node ' + node?.value);
    let left = array[0];
    console.log('Left ' + left?.value)
    let right = array[1];
    console.log('Right ' + right?.value)
    // if our node is empty we should be done - return
    if (node === undefined) return;
    // if we are at the root then push our array.
    else if (!left && !right) {array.push(node)}
    // check to see if we're going left.
    else if (node.value < left?.value) {
        console.log('moving left')
        if (left?.data === undefined) {
            left.data = [node]
        } else {
            traverseTree(node, left.data)
        }
    }
    else if (!right) {
        console.log('pushing right')
        array.push(node)
    }
    // if we're less than the right value, we're going left.
    else if (node.value > right?.value) {
        console.log('moving right')
        if (right?.data === undefined) {
            right.data = [node]
        } else {
            traverseTree(node, right.data)
        }
    }
    // if value is greater than the left, less than the right then insert left
    else if (node.value > left?.value && node.value < right?.value) {
        console.log(' trying to replace left ')
        node.data = []
        node.data.push(left);
        array[0] = node
    }
}

export const BinarySearchTreeOptions = () => {
    const [options, setOptions] = useState({amount: 10, min: 1, max: 200})
    const [tree, setTree] = useState<INode[]>([]);
    const [displayGraph, switchGraphDisplay] = useState(false);
    const [treeGraph, setTreeGraph] = useState(<div/>);
    
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
            tree[i] = node
        }
        console.log(tree);
    }

    // Given an array, return a BST
    const SortTree = (tree: INode[]) => {
        let sortedTree: INode[] = [];
        for (let i=0; i < tree.length; i++) {
            const node: INode | undefined = tree[i]
            traverseTree(node, sortedTree)
        };
        setTree(sortedTree);
    }

    const deleteNodeHandler = (event: MouseEvent) => {
        
    }

    //Build sorted binary tree using INode.value as the key.
    //
    const generateTreeHandler = () => {
        switchGraphDisplay(true);
        setTree([])
        GenerateUnsortedTree(options.amount, options.min, options.max, tree);
        SortTree(tree);
    };

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
            <div className={styles.treeGraphContainer}>
                {tree.map(node => 
                    <span 
                        key={node.id} 
                        className={styles.node}
                        style={{backgroundColor: node.color}}
                    >
                        {node.value}
                    </span>
                )}
            </div>
        </div>
    );
}