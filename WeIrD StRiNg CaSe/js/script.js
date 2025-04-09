// Solution

const toWeirdCase = string =>
  string.toUpperCase().replace(/\w{2}/g, val => val[0] + val[1].toLowerCase());