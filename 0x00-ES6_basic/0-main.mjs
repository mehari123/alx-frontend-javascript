// import { taskFirst, taskNext } from './0-constants.js';

// console.log(`${taskFirst()} ${taskNext()}`);

import taskBlock from './1-block-scoped.mjs';

console.log(taskBlock(true));
console.log(taskBlock(false));