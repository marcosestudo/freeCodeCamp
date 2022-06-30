function sum(arr, n) {
  // Altere apenas o código abaixo desta linha
  let total = 0;
  if (n <= 0) {
    return total;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
  // Altere apenas o código acima desta linha
}
