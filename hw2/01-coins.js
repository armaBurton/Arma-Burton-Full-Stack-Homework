/** Exercise 01 - Coins **/

// Add your function here
const calculateChange = (num) => {
  const monies = {
    dollar: 0,
    quarter: 0,
    dime: 0,
    nickle: 0,
    penny: 0,
  };

  if (num > 100) {
    console.error("Error: the number is too large");
  } else {
    runTheNumbers(monies, num);
    generateTheReport(monies);
  }
};

const generateTheReport = (monies) => {
  console.log(
    [
      monies.dollar > 1
        ? `${monies.dollar} dollars, `
        : monies.dollar === 1
        ? `${monies.dollar} dollar, `
        : "",
      monies.quarter > 1
        ? `${monies.quarter} quarters, `
        : monies.quarter === 1
        ? `${monies.quarter} quarter, `
        : "",
      monies.dime > 1
        ? `${monies.dime} dimes, `
        : monies.dime === 1
        ? `${monies.dime} dime, `
        : "",
      monies.nickle > 1
        ? `${monies.nickle} nickles, `
        : monies.nickle === 1
        ? `${monies.nickle} nickle, `
        : "",
      monies.penny > 1
        ? `${monies.penny} pennys.`
        : monies.penny === 1
        ? `${monies.penny} penny.`
        : "",
    ]
      .filter(Boolean)
      .join("")
  );
};

const runTheNumbers = (monies, num) => {
  amount = num;
  monies.dollar = Math.trunc(num);
  amount = (amount % 1).toFixed(2);
  monies.quarter = Math.trunc(amount / 0.25);
  amount = (amount % 0.25).toFixed(2);
  monies.dime = Math.trunc(amount / 0.1);
  amount = (amount % 0.1).toFixed(2);
  monies.nickle = Math.trunc(amount / 0.05);
  amount = (amount % 0.05).toFixed(2);
  monies.penny = Math.trunc(amount / 0.01);
};

// Sample test cases
console.log(calculateChange(4.62));
// $4.62 ==> 4 dollars, 2 quarters, 1 dime, 2 pennies
console.log(calculateChange(0.16));
// $0.16 ==> 1 dime, 1 nickel, 1 penny
console.log(calculateChange(150.11));
// $150.11 ==> Error: the number is too large

// Add additional test cases here
