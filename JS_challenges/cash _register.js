function checkCashRegister(price, cash, cid) {
  const dinheiro = [10000, 2000, 1000, 500, 100, 25, 10, 5, 1,];
  function transacao(price, cash, cid) {
    var trocoNecessario = (cash - price) * 100;
    var pagamento = [
      ["ONE HUNDRED", 0],
      ["TWENTY", 0],
      ["TEN", 0],
      ["FIVE", 0],
      ["ONE", 0],
      ["QUARTER", 0],
      ["DIME", 0],
      ["NICKEL", 0],
      ["PENNY", 0],
    ];
    var disponivel = [].concat(cid);
    disponivel = disponivel.reverse();
    disponivel = disponivel.map(x => [x[0], x[1] * 100]);
    var sumOfCash = disponivel.reduce((a, b) => (a + b[1]), 0) / 100;
    if (sumOfCash === trocoNecessario / 100) {
      return { status: "CLOSED", change: [].concat(cid) };
    }
    else for (var i = 0; i < disponivel.length; i++) {
      while (dinheiro[i] <= trocoNecessario && disponivel[i][1] > 0) {
        pagamento[i][1] += dinheiro[i];
        trocoNecessario -= dinheiro[i];
        disponivel[i][1] -= dinheiro[i];
      }
    };
    var change = pagamento;
      change = change.map(x => [x[0], x[1] / 100]);
      change = change.filter(x => x[1] !== 0);
    var changeTotal = change.reduce((a, b) => (a + b[1]), 0);
    if (changeTotal < trocoNecessario) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
    return { status: "OPEN", change };
  }
  var resp = transacao(price, cash, cid);
  return resp;
};