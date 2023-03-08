const babel = require('@babel/core');

const source = 'const fnn = () => 1;';
const result = babel.transform(source, {});

console.log(result);