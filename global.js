#!/usr/bin/env node
// console.log(process);
// with objects, you don't need the , to get to the correct spots. You can just call them by their name.
let {node, v8} = process.versions;
console.log(`Node.js version: v${node}\nV8 version: v${v8}`);
