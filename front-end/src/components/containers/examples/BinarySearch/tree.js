function renderTreeSelect(paths, clicks) {
    // node checkbox states:
    // [v] - checked: ALL the leaf nodes in the sub-tree are selected.
    // [o] - partially-checked: SOME (but not all) of the nodes in sub-tree are selected.
    // [ ] - unchecked: NONE of the leaf nodes in the sub-tree are selected.
    // '/' delimited
    // '.' for each level of indentation.
    // I think the main thing here is going to be traversing this datastructure.
    // child nodes of a parent should be sorted by name.

    // for each click, find each reference in paths. 
    // if checked, then set this to unchecked, check parents for partially-checked. 
    // if then set to checked.
    const checked = '[v]';
    const partiallyChecked = '[o]';
    const unchecked = '[ ]';
    const nodeStructure = {
        'Name': '',
        'State': unchecked,
        'Level': '',
        'Children': ''
    };
    let nodes = {}
    // Create a datastructure w/ Name, State, Children, Level?
    paths.forEach(pathLines => {
        pathLines.forEach(name => {
            let children = [],
                newChildren = [],
                existingChildren = [];
            // grab new and existing children.
            newChildren = pathLines.slice(pathLines.find(name), pathLines.length)
            existingChildren = nodes[name]['Children']
            //merge children
            newChildren.forEach(child => {
                if (existingChildren(child) === -1) {
                    children.push(child);
                }
            });
            nodes[name] = {
                'State': '[ ]',
                'Children': children
            }
        })
    })
    // loop through clicks. Updating state for nodes.
    clicks.forEach(clickedNode => {
        if (nodes[clickedNode]['State'] === checked) {
            nodes[clickedNode]['State'] = unchecked
            nodes.Children.forEach(node => {
                node.State = unchecked;
            })
            // check parents are unchecked if they need to be.
            nodes.forEach(node => {
                if (node.children.some(child => child === clickedNode)) {
                    node.State = unchecked
                    node.children.forEach(childNode => {
                        if (childNode.state === checked) {
                            node.State = partiallyChecked;
                        }
                    });
                }
            });
            // checking a partially checked or unchecked
        } else if (nodes[clickedNode]['State'] === partiallyChecked ||
            nodes[clickedNode]['State'] === unchecked) {
            nodes[clickedNode]['State'] = checked
            nodes.Children.forEach(node => {
                node.State = checked;
            })
            // check parents are at least partially checked.
            nodes.forEach(node => {
                //default to checked
                node.State = checked;
                // if any child states are unchecked then set to partially checked.
                if (node.children.some(child => child.state !== checked)) {
                    node.State = partiallyChecked;
                }
            });
        }
    });
    // format
    let output = [];
    for (let i = 1; i < nodes.length; i++) {
        output[i] = node[i].level + node[i].state + node[i].name
    }
    return output
}
