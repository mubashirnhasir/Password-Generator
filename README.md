# Random Password Generator Using ReactJS
## Hooks used in this Project
- UseRef
- UseState
- UseCallBack
- UseEffect

## Why UseRef ?
### Useref is used to make copy to clipboard feature using <ins>[window.current?.select](https://developer.mozilla.org/en-US/docs/Web/API/Window/getSelection)</ins> You can refer about it on MDN.

## Why UseState ?
UseState is used to manaage states of input values and store password values

## Why useCallback ?
useCallBack is used to optimize the code re-rendering, we specify what are the possible dependencies are there which can trigger the change of password and run the function, and stores the rerendered values in cache memory.

## UseEffect
UseEffect is used to re-render based on dependencies of length ranger,Number Checkbox, Char Checkbox. when clicked on any of these dependencies it will call the Password GeneratorFunction(). 
