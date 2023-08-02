const dirTree = require("directory-tree");
const tree = dirTree("res/", ['.jpg', '.png']);

console.log(tree)

