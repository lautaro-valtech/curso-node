const localVariableB = 'Soy una variable local en el módulo B';

console.log(globalThis.globalVariableA);

const moduleA = require('./moduleA.cjs');
console.log(moduleA.localVariableA);
