#!/usr/bin/env node
// console.log(process);
// with objects, you don't need the , to get to the correct spots. You can just call them by their name.
let {node, v8} = process.versions;
// can also do let {versions: {node, v8}} = process;
// OR you can rename them {versions: {node: nodetastic, v8: camaro}} = process;
// THEN console.log(`Node.js version: v${nodetastic}\nv8 version: v${camaro}`);
console.log(`Node.js version: v${node}\nV8 version: v${v8}`);
