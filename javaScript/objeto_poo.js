function convertToRoman(num) {
  let arr = [
    [0, ""],
    [1, "I"],
    [2, "II"],
    [3, "III"],
    [4, "IV"],
    [5, "V"],
    [6, "VI"],
    [7, "VII"],
    [8, "VIII"],
    [9, "IX"],
    [10, "X"],
    [20, "XX"],
    [30, "XXX"],
    [40, "XL"],
    [50, "L"],
    [60, "LX"],
    [70, "LXX"],
    [80, "LXXX"],
    [90, "XC"],
    [100, "C"],
    [200, "CC"],
    [300, "CCC"],
    [400, "CD"],
    [500, "D"],
    [600, "DC"],
    [700, "DCC"],
    [800, "DCCC"],
    [900, "CM"],
    [1000, "M"],
    [2000, "MM"],
    [3000, "MMM"],
    [4000, "MMMM"],
    [5000, "MMMMM"],
    [6000, "MMMMMM"],
    [7000, "MMMMMMM"],
    [8000, "MMMMMMMM"],
    [9000, "MMMMMMMMM"]
  ];
  if (num > 9999) {
    return;
  } else if (num < 0) {
    return;
  }
  if (num.toString().length == 4) {
    let stringMilhar = num.toString()[0] + "000";
    let stringCentena = num.toString()[1] + "00";
    let stringDezena = num.toString()[2] + "0";
    let stringUnidade = num.toString()[3];
    let milhar = parseInt(stringMilhar);
    let centena = parseInt(stringCentena);
    let dezena = parseInt(stringDezena);
    let unidade = parseInt(stringUnidade);
    for (let i = 0; i < arr.length; i++) {
      if (milhar == arr[i][0]) {
        milhar = arr[i][1];
      }
      if (centena == arr[i][0]) {
        centena = arr[i][1];
      }
      if (dezena == arr[i][0]) {
        dezena = arr[i][1];
      }
      if (unidade == arr[i][0]) {
        unidade = arr[i][1];
      }
    }
    return milhar + centena + dezena + unidade;
  }
  if (num.toString().length == 3) {
    let stringCentena = num.toString()[0] + "00";
    let stringDezena = num.toString()[1] + "0";
    let stringUnidade = num.toString()[2];
    let centena = parseInt(stringCentena);
    let dezena = parseInt(stringDezena);
    let unidade = parseInt(stringUnidade);
    for (let i = 0; i < arr.length; i++) {
      if (centena == arr[i][0]) {
        centena = arr[i][1];
      }
      if (dezena == arr[i][0]) {
        dezena = arr[i][1];
      }
      if (unidade == arr[i][0]) {
        unidade = arr[i][1];
      }
    }
    return centena + dezena + unidade;
  }
  if (num.toString().length == 2) {
    let stringDezena = num.toString()[0] + "0";
    let stringUnidade = num.toString()[1];
    let dezena = parseInt(stringDezena);
    let unidade = parseInt(stringUnidade);
    for (let i = 0; i < 19; i++) {
      if (dezena == arr[i][0]) {
        dezena = arr[i][1];
      }
      if (unidade == arr[i][0]) {
        unidade = arr[i][1];
      }
    }
    return dezena + unidade;
  }
  if (num.toString().length == 1) {
    let stringUnidade = num.toString()[0];
    let unidade = parseInt(stringUnidade);
    for (let i = 0; i < 10; i++) {
      if (unidade == arr[i][0]) {
        unidade = arr[i][1];
      }
    }
    return unidade;
  }
};