// curry é tranformar uma função com vários argmentos em várias funçõe com um único argumento aninhadas
function unCurried(x, y) {
  return x + y;
}

function curried(x) {
  return function(y) {
    return x + y;
  }
}

const arrowCurried = x => y => x + y;

curried(1)(2);
