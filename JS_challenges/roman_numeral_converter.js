function convertToRoman(num) {
  let n = num.toString().length;

  let array = [
    [0, ""], [1, "I"], [2, "II"], [3, "III"], [4, "IV"], [5, "V"], [6, "VI"], [7, "VII"], [8, "VIII"], [9, "IX"], [10, "X"], [20, "XX"], [30, "XXX"],
    [40, "XL"], [50, "L"], [60, "LX"], [70, "LXX"], [80, "LXXX"], [90, "XC"], [100, "C"], [200, "CC"], [300, "CCC"], [400, "CD"], [500, "D"],
    [600, "DC"], [700, "DCC"], [800, "DCCC"], [900, "CM"], [1000, "M"], [2000, "MM"], [3000, "MMM"], [4000, "MMMM"], [5000, "MMMMM"],
    [6000, "MMMMMM"], [7000, "MMMMMMM"], [8000, "MMMMMMMM"], [9000, "MMMMMMMMM"]
  ];

  if (num > 9999) {
    return "Too big";

  } else if (num < 0) {
    return "Too little";
  }

  if (n == 4) {
    let milleString = num.toString()[0] + "000";
    let centaineString = num.toString()[1] + "00";
    let dizaineString = num.toString()[2] + "0";
    let uniteString = num.toString()[3];

    let milleInt = parseInt(milleString);
    let centaineInt = parseInt(centaineString);
    let dizaineInt = parseInt(dizaineString);
    let uniteInt = parseInt(uniteString);

    for (let k = 0; k < array.length; k++) {
      if (milleInt == array[k][0]) {
        milleInt = array[k][1];

      }
      if (centaineInt == array[k][0]) {
        centaineInt = array[k][1];

      }
      if (dizaineInt == array[k][0]) {
        dizaineInt = array[k][1];

      }
      if (uniteInt == array[k][0]) {
        uniteInt = array[k][1];
      }
    }

    return milleInt + centaineInt + dizaineInt + uniteInt;

  } else if (n == 3) {
    let centaineString = num.toString()[0] + "00";
    let dizaineString = num.toString()[1] + "0";
    let uniteString = num.toString()[2];

    let centaineInt = parseInt(centaineString);
    let dizaineInt = parseInt(dizaineString);
    let uniteInt = parseInt(uniteString);

    for (let k = 0; k < array.length; k++) {
      if (centaineInt == array[k][0]) {
        centaineInt = array[k][1];

      }
      if (dizaineInt == array[k][0]) {
        dizaineInt = array[k][1];

      }
      if (uniteInt == array[k][0]) {
        uniteInt = array[k][1];
      }
    }

    return centaineInt + dizaineInt + uniteInt;

  } else if (n == 2) {
    let dizaineString = num.toString()[0] + "0";
    let uniteString = num.toString()[1];

    let dizaineInt = parseInt(dizaineString);
    let uniteInt = parseInt(uniteString);

    for (let k = 0; k < 19; k++) {
      if (dizaineInt == array[k][0]) {
        dizaineInt = array[k][1];

      }
      if (uniteInt == array[k][0]) {
        uniteInt = array[k][1];
      }
    }

    return dizaineInt + uniteInt;

  } else if (n == 1) {
    let uniteString = num.toString()[0];

    let uniteInt = parseInt(uniteString);

    for (let k = 0; k < 10; k++) {
      if (uniteInt == array[k][0]) {
        uniteInt = array[k][1];
      }
    }

    return uniteInt;

  }
};