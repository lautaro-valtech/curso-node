const localVariableA = 'Soy una variable local en el módulo A';

globalThis.globalVariableA = 'Soy una variable global';

module.exports = {
  localVariableA,
};

console.log('moduleA:', module);
