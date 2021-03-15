module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let onlyBrackets = "";
  function isBrakets(symbol) {
      for (let subArr of bracketsConfig){
        if (subArr[0] === symbol || subArr[1] === symbol)
            return true;
      }
      return false;
  }
  function isPair(openedSymbol, closedSymbol) {
      for (let subArr of bracketsConfig){
        if(subArr[0] === openedSymbol)
            if (subArr[1] === closedSymbol)
                return true;
      }
      return false;
  }
  function  isOpenedSymbol(symbol){
      for (let subArr of bracketsConfig){
          if (subArr[0] === symbol)
              return true;
      }
      return false;
  }
  stack.push(str[0]);
  for(let i = 1; i < str.length; i++)
  {
        if (isPair(stack[stack.length - 1], str[i]))
            stack.pop();
        else
            if(isOpenedSymbol(str[i]))
                stack.push(str[i]);
            else
                return false;
    }
    if (stack.length != 0)
        return false;
    else
        return true;
}
